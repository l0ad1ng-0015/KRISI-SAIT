<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// ⚠️ TODO: Replace with Kristina's own Telegram credentials before launch
	const TELEGRAM_BOT_ID = '8661181029:AAG4qHaigfPlvbFfflclSSTLDC4zw4P0LMc';
	const TELEGRAM_CHAT_ID = '-5553436765';

	const events = [
		{
			num: '01',
			type: 'На живо',
			title: 'Беседа с Кристина',
			desc: 'Среща на живо в малка група — пространство за въпроси, споделяне и дълбок разговор с Кристина. Местата са ограничени.',
			details: ['90 мин', 'Присъствено', 'Малка група'],
			ticket: true,
			ticketNote:
				'След регистрацията Кристина ще се свърже с теб с информация за закупуване на билет.',
			gradient: 'linear-gradient(180deg, #c4a8b0 0%, #9e7a84 100%)'
		},
		{
			num: '02',
			type: 'Онлайн',
			title: 'Медитация',
			desc: '40 минути водена медитация, последвани от 20 минути споделяне и разговор. Zoom среща с предварителна регистрация.',
			details: ['60 мин', 'Zoom среща', '40 мин медитация · 20 мин разговор'],
			ticket: false,
			gradient: 'linear-gradient(180deg, #a0b0bc 0%, #738290 100%)'
		},
		{
			num: '03',
			type: 'Онлайн',
			title: 'Водена визуализация',
			desc: '40 минути водена визуализация, последвани от 20 минути споделяне и разговор. Zoom среща с предварителна регистрация.',
			details: ['60 мин', 'Zoom среща', '40 мин визуализация · 20 мин разговор'],
			ticket: false,
			gradient: 'linear-gradient(180deg, #b0a0c0 0%, #7e7894 100%)'
		}
	];

	let openIndex = $state(null);

	const toggle = (i) => {
		openIndex = openIndex === i ? null : i;
	};

	let formData = $state(events.map(() => ({ name: '', email: '', phone: '', agree: false })));
	let formStatus = $state(events.map(() => ''));
	let formError = $state(events.map(() => ''));

	function validate(i) {
		const { name, email, phone, agree } = formData[i];
		if (!name.trim()) return 'Въведи своето име.';
		if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			return 'Въведи валиден имейл.';
		if (!phone.trim() || !/^[\d\s+\-()]{7,}$/.test(phone)) return 'Въведи валиден телефон.';
		if (!agree) return 'Необходимо е съгласие с обработката на личните данни.';
		return null;
	}

	async function handleRegister(e, i) {
		e.preventDefault();
		const err = validate(i);
		if (err) {
			formStatus[i] = 'error';
			formError[i] = err;
			return;
		}
		formStatus[i] = 'loading';

		const { name, email, phone } = formData[i];
		const ev = events[i];
		const text = `📅 Регистрация за събитие\n\n🎟 ${ev.title} (${ev.type})\n👤 Участник: ${name}\n📧 Имейл: ${email}\n📱 Телефон: ${phone}`;

		try {
			const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
			});
			if (res.ok) {
				formStatus[i] = 'success';
			} else {
				throw new Error();
			}
		} catch {
			formStatus[i] = 'error';
			formError[i] = 'Грешка при изпращане. Опитай отново.';
		}
	}

	function clearError(i) {
		if (formStatus[i] === 'error') formStatus[i] = '';
	}
</script>

<svelte:head>
	<title>Събития — Кристина Дойчинова</title>
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<h1>Предстоящи<br /><em>събития</em></h1>
		<div class="page-hero__divider" aria-hidden="true"></div>
		<p class="page-hero__quote">"Заедно се учим, вдъхновяваме и израстваме."</p>
		<div class="page-hero__meta">
			<span>03 формата</span>
			<span class="page-hero__dot"></span>
			<span>Онлайн & присъствено</span>
			<span class="page-hero__dot"></span>
			<span>Предварителна регистрация</span>
		</div>
	</div>
</section>

<!-- EVENTS -->
<section class="events">
	<div class="events__inner container">
		{#each events as event, i}
			<article class="event" class:event--open={openIndex === i}>
				<div class="event__accent" style="background: {event.gradient};"></div>

				<div class="event__content">
					<div class="event__head">
						<div class="event__left">
							<div class="event__meta-row">
								<span class="event__num">{event.num}</span>
								<span class="event__type-tag">{event.type}</span>
							</div>
							<h2 class="event__title">{event.title}</h2>
							<p class="event__desc">{event.desc}</p>
							<div class="event__chips">
								{#each event.details as d}
									<span class="event__chip">{d}</span>
								{/each}
							</div>
						</div>

						<div class="event__right">
							<span class="event__date">Скоро</span>
							<button
								class="btn event__reg-btn"
								class:btn-primary={openIndex === i}
								class:btn-outline={openIndex !== i}
								onclick={() => toggle(i)}
							>
								{openIndex === i ? 'Затвори' : 'Регистрирай се'}
							</button>
						</div>
					</div>

					{#if openIndex === i}
						<div class="event__form-wrap" transition:slide={{ duration: 320, easing: cubicOut }}>
							{#if formStatus[i] === 'success'}
								<div class="event__success">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										aria-hidden="true"
									>
										<path
											d="M20 6L9 17l-5-5"
											stroke="currentColor"
											stroke-width="1.6"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<div>
										<p class="event__success-title">Регистрацията е приета!</p>
										<p class="event__success-sub">
											{event.ticket
												? event.ticketNote
												: 'Ще получиш потвърждение на посочения имейл.'}
										</p>
									</div>
								</div>
							{:else}
								<form class="event__form" onsubmit={(e) => handleRegister(e, i)}>
									<div class="event__form-head">
										<p class="event__form-label">Регистрация — {event.title}</p>
										{#if event.ticket}
											<p class="event__ticket-note">{event.ticketNote}</p>
										{/if}
									</div>

									<div class="event__fields">
										<div class="event__field">
											<label for="ev-name-{i}">Име и фамилия *</label>
											<input
												id="ev-name-{i}"
												type="text"
												placeholder="Иван Иванов"
												bind:value={formData[i].name}
												oninput={() => clearError(i)}
											/>
										</div>
										<div class="event__field">
											<label for="ev-email-{i}">Имейл *</label>
											<input
												id="ev-email-{i}"
												type="email"
												placeholder="твоят@имейл.com"
												bind:value={formData[i].email}
												oninput={() => clearError(i)}
											/>
										</div>
										<div class="event__field">
											<label for="ev-phone-{i}">Телефон *</label>
											<input
												id="ev-phone-{i}"
												type="tel"
												placeholder="+359 888 123 456"
												bind:value={formData[i].phone}
												oninput={() => clearError(i)}
											/>
										</div>
									</div>

									<label class="event__agree">
										<input
											type="checkbox"
											bind:checked={formData[i].agree}
											onchange={() => clearError(i)}
										/>
										<span>Съгласявам се личните ми данни да бъдат обработени за целите на регистрацията.</span>
									</label>

									{#if formStatus[i] === 'error'}
										<p class="event__error">{formError[i]}</p>
									{/if}

									<button
										type="submit"
										class="btn btn-primary"
										disabled={formStatus[i] === 'loading'}
									>
										{formStatus[i] === 'loading' ? '...' : 'Изпрати регистрацията'}
									</button>
								</form>
							{/if}
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="cta-band">
	<div class="cta-band__inner container">
		<p class="section-tag">Не намираш подходящо?</p>
		<h2>Свържи се с<br /><em>Кристина</em></h2>
		<p>Кристина организира и индивидуални сесии и обучения — пиши за повече информация.</p>
		<a href="/kontakti" class="btn btn-primary">Свържи се</a>
	</div>
</section>

<style>
	/* PAGE HERO */
	.page-hero {
		padding: calc(var(--nav-h) + 80px) 0 90px;
		text-align: center;
		border-bottom: 1px solid var(--border);
	}

	.page-hero__inner {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page-hero h1 {
		line-height: 1.04;
		margin-bottom: 44px;
	}

	.page-hero h1 em {
		color: var(--secondary);
	}

	.page-hero__divider {
		width: 52px;
		height: 1px;
		background: var(--secondary);
		opacity: 0.35;
		margin-bottom: 36px;
	}

	.page-hero__quote {
		font-family: var(--heading-font);
		font-size: 1.35rem;
		font-style: italic;
		color: var(--text-muted);
		line-height: 1.65;
		max-width: 520px;
		margin-bottom: 44px;
	}

	.page-hero__meta {
		display: flex;
		align-items: center;
		gap: 18px;
		font-size: 0.7rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--secondary);
	}

	.page-hero__dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--secondary);
		opacity: 0.45;
	}

	/* EVENTS */
	.events {
		padding: 80px 0 100px;
	}

	.events__inner {
		max-width: 1060px;
		display: flex;
		flex-direction: column;
	}

	.event {
		display: flex;
		background: var(--bg);
		border: 1px solid var(--border);
		border-top: none;
		transition: box-shadow 0.3s ease;
	}

	.event:first-child {
		border-top: 1px solid var(--border);
	}

	.event--open {
		box-shadow: 0 12px 48px rgba(92, 60, 70, 0.1);
		z-index: 1;
		position: relative;
	}

	.event__accent {
		width: 8px;
		flex-shrink: 0;
	}

	.event__content {
		flex: 1;
		min-width: 0;
	}

	/* Event head row */
	.event__head {
		display: flex;
		align-items: flex-start;
		gap: 40px;
		padding: 44px 56px;
	}

	.event__left {
		flex: 1;
		min-width: 0;
	}

	.event__right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 20px;
		flex-shrink: 0;
	}

	.event__meta-row {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 14px;
	}

	.event__num {
		font-family: var(--heading-font);
		font-size: 1rem;
		font-style: italic;
		color: var(--secondary);
		opacity: 0.45;
	}

	.event__type-tag {
		font-size: 0.66rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--secondary);
		padding: 4px 13px;
		border: 1px solid var(--border);
		border-radius: 100px;
	}

	.event__title {
		font-family: var(--heading-font);
		font-size: 2.4rem;
		font-weight: 400;
		line-height: 1.1;
		color: var(--text);
		margin-bottom: 14px;
	}

	.event__desc {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.9;
		max-width: 540px;
		margin-bottom: 22px;
	}

	.event__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.event__chip {
		font-size: 0.66rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
		padding: 5px 14px;
		border: 1px solid var(--border);
	}

	.event__date {
		font-family: var(--heading-font);
		font-size: 0.95rem;
		font-style: italic;
		color: var(--text-muted);
		white-space: nowrap;
	}

	.event__reg-btn {
		white-space: nowrap;
	}

	/* Form expand area */
	.event__form-wrap {
		overflow: hidden;
		border-top: 1px solid var(--border);
		background: #e8e3dc;
	}

	.event__success {
		display: flex;
		align-items: flex-start;
		gap: 16px;
		padding: 36px 56px;
		color: var(--secondary);
	}

	.event__success svg {
		flex-shrink: 0;
		margin-top: 3px;
	}

	.event__success-title {
		font-size: 0.95rem;
		color: var(--text);
		margin-bottom: 6px;
		font-weight: 400;
	}

	.event__success-sub {
		font-size: 0.85rem;
		color: var(--text-muted);
		line-height: 1.75;
		max-width: 480px;
	}

	.event__form {
		padding: 40px 56px 48px;
	}

	.event__form-head {
		margin-bottom: 32px;
	}

	.event__form-label {
		font-size: 0.68rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 14px;
	}

	.event__ticket-note {
		font-size: 0.85rem;
		color: var(--text-muted);
		line-height: 1.75;
		max-width: 520px;
		padding: 14px 20px;
		border-left: 2px solid var(--secondary);
		opacity: 0.85;
	}

	.event__fields {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		margin-bottom: 28px;
	}

	.event__field {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.event__field label {
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.event__field input {
		background: var(--bg);
		border: 1px solid var(--border);
		padding: 12px 16px;
		font-family: var(--body-font);
		font-size: 0.9rem;
		color: var(--text);
		outline: none;
		transition: border-color 0.2s;
		width: 100%;
	}

	.event__field input:focus {
		border-color: var(--secondary);
	}

	.event__field input::placeholder {
		color: var(--text-muted);
		opacity: 0.5;
	}

	.event__agree {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 20px;
		cursor: pointer;
	}

	.event__agree input[type='checkbox'] {
		appearance: none;
		-webkit-appearance: none;
		width: 18px;
		height: 18px;
		border: 1px solid var(--border);
		background: var(--bg);
		flex-shrink: 0;
		margin-top: 1px;
		cursor: pointer;
		transition: background 0.18s, border-color 0.18s;
		position: relative;
	}

	.event__agree input[type='checkbox']:checked {
		background: var(--secondary);
		border-color: var(--secondary);
	}

	.event__agree input[type='checkbox']:checked::after {
		content: '';
		position: absolute;
		left: 4px;
		top: 1px;
		width: 6px;
		height: 10px;
		border: 1.5px solid #fff;
		border-top: none;
		border-left: none;
		transform: rotate(45deg);
	}

	.event__agree span {
		font-size: 0.82rem;
		color: var(--text-muted);
		line-height: 1.65;
	}

	.event__error {
		font-size: 0.82rem;
		color: #c0504a;
		margin-bottom: 18px;
	}

	/* CTA */
	.cta-band {
		background: #e3ddd6;
		padding: 100px 0;
		text-align: center;
		border-top: 1px solid var(--border);
	}

	.cta-band__inner {
		max-width: 560px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.cta-band h2 {
		font-size: 3.4rem;
		line-height: 1.15;
	}

	.cta-band h2 em {
		color: var(--secondary);
	}

	.cta-band p {
		font-size: 0.92rem;
		color: var(--text-muted);
		max-width: 420px;
		line-height: 1.85;
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.page-hero {
			padding: calc(var(--nav-h) + 48px) 0 64px;
		}

		.page-hero__quote {
			font-size: 1.1rem;
		}

		.events {
			padding: 52px 0 72px;
		}

		.event__head {
			flex-direction: column;
			gap: 24px;
			padding: 32px 28px;
		}

		.event__right {
			flex-direction: row;
			align-items: center;
			gap: 20px;
		}

		.event__title {
			font-size: 2rem;
		}

		.event__form {
			padding: 28px 28px 36px;
		}

		.event__success {
			padding: 28px;
		}

		.event__fields {
			grid-template-columns: 1fr 1fr;
		}

		.cta-band h2 {
			font-size: 2.6rem;
		}
	}

	@media (max-width: 600px) {
		.event__head {
			padding: 24px 20px;
		}

		.event__right {
			flex-direction: column;
			align-items: flex-start;
			gap: 14px;
		}

		.event__title {
			font-size: 1.8rem;
		}

		.event__form {
			padding: 20px 20px 28px;
		}

		.event__fields {
			grid-template-columns: 1fr;
		}

		.cta-band h2 {
			font-size: 2.2rem;
		}
	}
</style>
