<script>
	// ⚠️ TODO: Replace with Kristina's OWN Telegram bot token + chat id.
	// These currently point to another project (Логос) and must be swapped
	// before launch, otherwise messages go to the wrong chat.
	// Note: the bot token is exposed client-side — this is inherent to the
	// browser-only Telegram approach.
	const TELEGRAM_BOT_ID = '8661181029:AAG4qHaigfPlvbFfflclSSTLDC4zw4P0LMc';
	const TELEGRAM_CHAT_ID = '-5553436765';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		sessionType: '',
		message: ''
	});

	let errors = $state({});
	let agree = $state(false);
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);
	let statusMessage = $state('');

	// Lightweight bot trap: stays "closed" until a human types in the message field.
	let humanCheck = $state(false);

	function clearError(field) {
		if (errors[field]) {
			delete errors[field];
			errors = { ...errors };
		}
	}

	function validate() {
		const e = {};
		if (!form.name.trim()) e.name = 'Името е задължително поле';

		if (!form.email.trim()) e.email = 'Имейлът е задължително поле';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			e.email = 'Моля въведете валиден имейл адрес';

		if (!form.phone.trim()) e.phone = 'Телефонът е задължително поле';
		else if (!/^[\d\s+\-()]{8,}$/.test(form.phone))
			e.phone = 'Моля въведете валиден телефонен номер';

		if (!form.sessionType) e.sessionType = 'Моля изберете тип сесия';

		if (!form.message.trim()) e.message = 'Съобщението е задължително поле';
		else if (form.message.trim().length < 10)
			e.message = 'Съобщението трябва да бъде поне 10 символа';

		if (!agree) e.agree = 'Трябва да се съгласите с условията за защита на личните данни';

		errors = e;
		return Object.keys(e).length === 0;
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (!validate()) return;
		if (!humanCheck) return; // bot trap — humans trigger it by typing the message

		isSubmitting = true;
		statusMessage = '';

		const url = `https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage`;
		const text = `🆕 Ново запитване от сайта (Контакти):

👤 Име: ${form.name}
📧 Имейл: ${form.email}
📞 Телефон: ${form.phone}
🗂 Тип сесия: ${form.sessionType}
💬 Съобщение: ${form.message}`;

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
			});

			if (res.ok) {
				submitSuccess = true;
				statusMessage = 'Съобщението беше изпратено успешно!';
				form = { name: '', email: '', phone: '', sessionType: '', message: '' };
				agree = false;
				humanCheck = false;
				setTimeout(() => {
					submitSuccess = false;
					statusMessage = '';
				}, 6000);
			} else {
				statusMessage = 'Изпращането беше неуспешно. Моля, опитайте отново.';
			}
		} catch (err) {
			console.error('Telegram send error:', err);
			statusMessage = 'Възникна грешка при изпращането. Моля, опитайте по-късно.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Контакти — Кристина Дойчинова</title>
	<meta
		name="description"
		content="Свържи се с Кристина Дойчинова за записване на сесия — имейл, телефон и контактна форма."
	/>
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<nav class="breadcrumb">
			<a href="/">Начало</a>
			<span>·</span>
			<span>Контакти</span>
		</nav>
		<h1>Свържи се<br /><em>с мен</em></h1>
		<p class="page-hero__desc">
			Имаш въпрос или искаш да запишеш сесия? Пиши ми — отговарям лично на всяко съобщение.
		</p>
	</div>
</section>

<!-- CONTACT INFO -->
<section class="info">
	<div class="info__inner container">
		<a class="info__item" href="mailto:contact@kristina-doychinova.bg">
			<span class="info__label">Имейл</span>
			<span class="info__value">contact@kristina-doychinova.bg</span>
		</a>
		<a class="info__item" href="tel:+359888123456">
			<span class="info__label">Телефон</span>
			<span class="info__value">+359 888 123 456</span>
		</a>
		<div class="info__item">
			<span class="info__label">Адрес</span>
			<span class="info__value">гр. София, ул. Примерна 12</span>
		</div>
	</div>
</section>

<!-- CONTACT FORM (centered) -->
<section class="form-section">
	<div class="form-section__inner">
		<p class="section-tag" style="text-align:center;">Контактна форма</p>
		<h2 class="form-section__title">Напиши ми <em>съобщение</em></h2>

		{#if submitSuccess}
			<div class="alert alert--success">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
					<path
						d="M20 6L9 17l-5-5"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<p>Благодаря! Съобщението беше изпратено успешно. Ще се свържа с теб скоро.</p>
			</div>
		{/if}
		{#if statusMessage && !submitSuccess}
			<div class="alert alert--error"><p>{statusMessage}</p></div>
		{/if}

		<form class="form" onsubmit={handleSubmit} novalidate>
			<div class="form__row">
				<div class="form__group">
					<label for="name">Име *</label>
					<input
						id="name"
						type="text"
						placeholder="Твоето име"
						bind:value={form.name}
						oninput={() => clearError('name')}
						class:input--error={errors.name}
					/>
					{#if errors.name}<span class="form__error">{errors.name}</span>{/if}
				</div>
				<div class="form__group">
					<label for="email">Имейл *</label>
					<input
						id="email"
						type="email"
						placeholder="твоят@имейл.com"
						bind:value={form.email}
						oninput={() => clearError('email')}
						class:input--error={errors.email}
					/>
					{#if errors.email}<span class="form__error">{errors.email}</span>{/if}
				</div>
			</div>

			<div class="form__row">
				<div class="form__group">
					<label for="phone">Телефон *</label>
					<input
						id="phone"
						type="tel"
						placeholder="+359 ..."
						bind:value={form.phone}
						oninput={() => clearError('phone')}
						class:input--error={errors.phone}
					/>
					{#if errors.phone}<span class="form__error">{errors.phone}</span>{/if}
				</div>
				<div class="form__group">
					<label for="sessionType">Тип сесия *</label>
					<select
						id="sessionType"
						bind:value={form.sessionType}
						onchange={() => clearError('sessionType')}
						class:input--error={errors.sessionType}
					>
						<option value="">Избери сесия</option>
						<option value="Лична сесия">Лична сесия</option>
						<option value="Онлайн сесия">Онлайн сесия</option>
						<option value="Интегративна сесия">Интегративна сесия</option>
						<option value="Друго / не съм сигурен/на">Друго / не съм сигурен/на</option>
					</select>
					{#if errors.sessionType}<span class="form__error">{errors.sessionType}</span>{/if}
				</div>
			</div>

			<div class="form__group">
				<label for="message">Съобщение *</label>
				<textarea
					id="message"
					rows="6"
					placeholder="Разкажи ми с какво мога да помогна..."
					bind:value={form.message}
					oninput={() => {
						clearError('message');
						humanCheck = true;
					}}
					class:input--error={errors.message}
				></textarea>
				{#if errors.message}<span class="form__error">{errors.message}</span>{/if}
			</div>

			<label class="form__checkbox" class:form__checkbox--error={errors.agree}>
				<input type="checkbox" bind:checked={agree} onchange={() => clearError('agree')} />
				<span>Съгласявам се с <a href="/privacy">условията за защита на личните данни</a> *</span>
			</label>
			{#if errors.agree}<span class="form__error">{errors.agree}</span>{/if}

			<button type="submit" class="btn btn-primary form__submit" disabled={isSubmitting}>
				{#if isSubmitting}Изпращане...{:else}Изпрати съобщение{/if}
			</button>
		</form>
	</div>
</section>

<!-- MAP -->
<section class="map">
	<iframe
		title="Местоположение"
		src="https://maps.google.com/maps?q=Sofia%2C%20Bulgaria&t=&z=13&ie=UTF8&iwloc=&output=embed"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
</section>

<style>
	/* PAGE HERO */
	.page-hero {
		padding: calc(var(--nav-h) + 56px) 0 80px;
		border-bottom: 1px solid var(--border);
		text-align: center;
	}

	.page-hero__inner {
		max-width: 760px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.78rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
		margin-bottom: 36px;
	}
	.breadcrumb a {
		color: var(--text-muted);
		transition: color 0.2s;
	}
	.breadcrumb a:hover {
		color: var(--secondary);
	}

	.page-hero h1 {
		font-size: clamp(2.8rem, 5.5vw, 5rem);
		line-height: 1.08;
		margin-bottom: 24px;
	}
	.page-hero h1 em {
		color: var(--secondary);
		font-style: italic;
	}

	.page-hero__desc {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.85;
		max-width: 480px;
	}

	/* CONTACT INFO */
	.info {
		border-bottom: 1px solid var(--border);
	}

	.info__inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.info__item {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 44px 24px;
		text-align: center;
		align-items: center;
		border-right: 1px solid var(--border);
		transition: background 0.25s ease;
	}
	.info__item:last-child {
		border-right: none;
	}
	a.info__item:hover {
		background: rgba(113, 73, 85, 0.04);
	}

	.info__label {
		font-size: 0.68rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--secondary);
	}

	.info__value {
		font-family: var(--heading-font);
		font-size: 1.15rem;
		color: var(--text);
	}

	/* FORM SECTION */
	.form-section {
		padding: 90px 24px 100px;
	}

	.form-section__inner {
		max-width: 680px;
		margin: 0 auto;
	}

	.form-section__title {
		text-align: center;
		font-size: clamp(2rem, 3.6vw, 3rem);
		line-height: 1.1;
		margin: 12px 0 48px;
	}
	.form-section__title em {
		color: var(--secondary);
		font-style: italic;
	}

	/* ALERTS */
	.alert {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 20px;
		margin-bottom: 28px;
		font-size: 0.9rem;
		line-height: 1.5;
	}
	.alert--success {
		background: rgba(92, 128, 60, 0.1);
		color: #4a6b30;
		border: 1px solid rgba(92, 128, 60, 0.25);
	}
	.alert--error {
		background: rgba(180, 60, 60, 0.08);
		color: #a33;
		border: 1px solid rgba(180, 60, 60, 0.2);
	}

	/* FORM */
	.form {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	.form__row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 22px;
	}

	.form__group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.form__group label {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text);
	}

	.form input,
	.form select,
	.form textarea {
		font-family: var(--body-font);
		font-size: 0.95rem;
		font-weight: 300;
		color: var(--text);
		background: transparent;
		border: 1px solid var(--border);
		padding: 13px 16px;
		outline: none;
		transition: border-color 0.2s ease;
		width: 100%;
	}

	.form textarea {
		resize: vertical;
		min-height: 130px;
		line-height: 1.7;
	}

	.form input:focus,
	.form select:focus,
	.form textarea:focus {
		border-color: var(--secondary);
	}

	.form input::placeholder,
	.form textarea::placeholder {
		color: var(--text-muted);
		opacity: 0.7;
	}

	.input--error {
		border-color: #c66 !important;
	}

	.form__error {
		font-size: 0.78rem;
		color: #b35;
	}

	/* CHECKBOX */
	.form__checkbox {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 0.88rem;
		color: var(--text-muted);
		line-height: 1.5;
		cursor: pointer;
		margin-top: 4px;
	}

	.form__checkbox input {
		width: 18px;
		height: 18px;
		margin-top: 2px;
		accent-color: var(--secondary);
		flex-shrink: 0;
	}

	.form__checkbox a {
		color: var(--secondary);
		text-decoration: underline;
	}

	.form__submit {
		margin-top: 10px;
		align-self: flex-start;
	}

	.form__submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* MAP */
	.map {
		line-height: 0;
	}
	.map iframe {
		width: 100%;
		height: 420px;
		border: none;
		filter: grayscale(0.3) contrast(0.95);
	}

	/* MOBILE */
	@media (max-width: 768px) {
		.info__inner {
			grid-template-columns: 1fr;
		}
		.info__item {
			border-right: none;
			border-bottom: 1px solid var(--border);
			padding: 32px 24px;
		}
		.info__item:last-child {
			border-bottom: none;
		}

		.form__row {
			grid-template-columns: 1fr;
		}

		.form__submit {
			align-self: stretch;
			text-align: center;
		}

		.map iframe {
			height: 320px;
		}
	}
</style>
