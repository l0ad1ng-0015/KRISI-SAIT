<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const events = [
		{
			num: '01',
			type: 'На живо',
			title: 'Вътрешен мир и автентичност',
			paras: [
				'„Вътрешен мир и автентичност" е първият по рода си формат в България. Споделено пространство от единомислещи в жива среща. Път към себепознание, по който изследваме невидимите вътрешни модели, вярвания и емоционални динамики, през които преживяваме себе си, отношенията и живота си.',
				'Чрез открит и интерактивен разговор разглеждаме реалните въпроси и ситуации на хората в залата. Личната история на един човек често се превръща в огледало за мнозина — във възможност да разпознаете собствен модел, да видите онова, което досега е оставало скрито, и да откриете нова перспектива.',
				'Тук не търсим какви трябва да бъдем. Изследваме какво ни отдалечава от това, което сме — и как да живеем с повече вътрешна свобода, яснота и автентичност.',
				'Темите се раждат от самата среща и засягат многопластовата човешка природа — отношения, избори, емоции, страхове, вътрешни конфликти, преживявания от миналото, реализация и повтарящи се житейски модели.',
				'Всеки може да участва със свой въпрос или просто да присъства и да открие себе си в споделеното от другите.',
				'За специалистите, които работят с хора, срещите са и възможност да наблюдават на живо работата с психо-емоционални динамики и да разширят разбирането си за човешката психика.'
			],
			details: ['90 мин', 'Присъствено', 'Малка група'],
			date: 'Скоро',
			// ⚠️ TODO: Replace with the actual Google Form URL for this event
			formUrl: 'https://forms.gle/QGfdce8Nzqj44r1N8',
			gradient: 'linear-gradient(180deg, #c4a8b0 0%, #9e7a84 100%)'
		},
		{
			num: '02',
			type: 'Онлайн',
			title: 'Медитация',
			paras: [
				'Започваме с 40 минути водена медитация и оставащо време за споделяне.',
				'Груповите медитативни сесии са пространство за споделено присъствие, вътрешно съзерцание и свързване със себе си и с тишината, която се създава, когато сме заедно.',
				'Чрез водена медитация, внимание към тялото, дишането и вътрешното преживяване постепенно се отдалечаваме от обичайния ритъм на ежедневието и насочваме вниманието навътре.',
				'Присъствието в група носи своя особена дълбочина. Без необходимост да споделяме или обясняваме преживяването си, създаваме общо пространство, в което можем просто да бъдем — с повече приемане, осъзнатост и вътрешна тишина.',
				'С времето тази практика ни помага да развиваме по-устойчива връзка със себе си и способност да оставаме в своя вътрешен център дори когато животът около нас е динамичен.',
				'Срещите се провеждат в Zoom.'
			],
			details: ['60 мин', 'Zoom', '40 мин медитация · 20 мин споделяне'],
			date: 'Събота, 24 Октомври · 9:30–10:30',
			// ⚠️ TODO: Replace with the actual Google Form URL for this event
			formUrl: 'https://forms.gle/QGfdce8Nzqj44r1N8',
			gradient: 'linear-gradient(180deg, #a0b0bc 0%, #738290 100%)'
		},
		{
			num: '03',
			type: 'Онлайн',
			title: 'Уебинари',
			paras: [
				'Онлайн срещи, посветени на темите, които присъстват в живота на всеки от нас — емоции, отношения, вътрешни конфликти, избори и повтарящи се модели.',
				'Във всеки уебинар разглеждаме една конкретна тема, за да разберем какво стои зад онова, което чувстваме, мислим и преживяваме.',
				'Знание, което ни помага да виждаме по-ясно себе си и да живеем с повече разбиране, свобода и вътрешен мир.',
				'Понякога една нова перспектива е достатъчна, за да промени начина, по който преживяваме цял аспект от живота си.'
			],
			details: ['60 мин', 'Zoom', 'Различни теми'],
			date: 'Различни дати',
			webinars: [
				{
					title: 'Какво са психо-емоционалните динамики?',
					paras: [
						'Защо реагираме по определен начин? Защо някои ситуации ни засягат толкова силно? И защо едни и същи преживявания сякаш се появяват отново в различни форми?',
						'В тази среща ще разгледаме невидимите връзки между преживяванията, емоциите, убежденията и реакциите ни. Начина, по който те оформят отношенията, изборите и ежедневието ни.'
					],
					date: 'Скоро',
					// ⚠️ TODO: Replace with the actual Google Form URL for this webinar
					formUrl: 'https://forms.gle/QGfdce8Nzqj44r1N8'
				}
			],
			gradient: 'linear-gradient(180deg, #b0a0c0 0%, #7e7894 100%)'
		}
	];

	let openIndex = $state(null);
	let showMore = $state(events.map(() => false));

	const toggle = (i) => {
		openIndex = openIndex === i ? null : i;
	};
</script>

<svelte:head>
	<title>Предстоящи Събития — Кристина Дойчинова | Ментор</title>
	<meta name="description" content="Вътрешен мир и автентичност, онлайн медитации и уебинари с Кристина Дойчинова. Регистрирайте се за следващото събитие." />
	<meta property="og:title" content="Предстоящи Събития — Кристина Дойчинова" />
	<meta property="og:description" content="Вътрешен мир и автентичност, онлайн медитации и уебинари с Кристина Дойчинова. Регистрирайте се за следващото събитие." />
	<meta property="og:url" content="https://kristinadoychinova.com/sabitiya" />
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
							<p class="event__desc">{event.paras[0]}</p>
							{#if showMore[i]}
								<div transition:slide={{ duration: 320, easing: cubicOut }}>
									{#each event.paras.slice(1) as para}
										<p class="event__desc">{para}</p>
									{/each}
								</div>
							{/if}
							<button class="event__more-btn" onclick={() => (showMore[i] = !showMore[i])}>
								{showMore[i] ? 'Покажи по-малко' : 'Прочети повече'}
								<svg
									class="event__more-icon"
									class:event__more-icon--up={showMore[i]}
									width="14"
									height="14"
									viewBox="0 0 22 22"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M5.5 8.25L11 13.75L16.5 8.25"
										stroke="currentColor"
										stroke-width="1.6"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
							<div class="event__chips">
								{#each event.details as d}
									<span class="event__chip">{d}</span>
								{/each}
							</div>
						</div>

						<div class="event__right">
							<span class="event__date">{event.date}</span>
							{#if event.webinars}
								<button
									class="btn event__reg-btn"
									class:btn-primary={openIndex === i}
									class:btn-outline={openIndex !== i}
									onclick={() => toggle(i)}
								>
									{openIndex === i ? 'Затвори' : 'Виж уебинарите'}
								</button>
							{:else}
								<a
									href={event.formUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-outline event__reg-btn"
								>
									Регистрирай се
								</a>
							{/if}
						</div>
					</div>

					{#if event.webinars && openIndex === i}
						<div class="event__webinars" transition:slide={{ duration: 320, easing: cubicOut }}>
							{#each event.webinars as webinar}
								<div class="webinar">
									<div class="webinar__header">
										<h3 class="webinar__title">{webinar.title}</h3>
										<span class="webinar__date">{webinar.date}</span>
									</div>
									{#each webinar.paras as para}
										<p class="webinar__p">{para}</p>
									{/each}
									<a
										href={webinar.formUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-outline webinar__btn"
									>
										За записване, попълнете формата
									</a>
								</div>
							{/each}
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
		margin-bottom: 12px;
	}

	.event__desc:last-of-type {
		margin-bottom: 22px;
	}

	.event__more-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: none;
		border: none;
		cursor: pointer;
		font-family: var(--body-font);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary);
		padding: 0;
		margin-bottom: 20px;
		transition: opacity 0.2s;
	}

	.event__more-btn:hover {
		opacity: 0.7;
	}

	.event__more-icon {
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}

	.event__more-icon--up {
		transform: rotate(180deg);
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

	/* WEBINARS EXPAND AREA */
	.event__webinars {
		overflow: hidden;
		border-top: 1px solid var(--border);
		background: #e8e3dc;
		padding: 40px 56px 48px;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.webinar {
		padding: 32px 0;
		border-bottom: 1px solid rgba(113, 73, 85, 0.12);
	}

	.webinar:first-child {
		padding-top: 0;
	}

	.webinar:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.webinar__header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 24px;
		margin-bottom: 16px;
	}

	.webinar__title {
		font-family: var(--heading-font);
		font-size: 1.7rem;
		font-weight: 400;
		color: var(--text);
		line-height: 1.2;
	}

	.webinar__date {
		font-family: var(--heading-font);
		font-size: 0.9rem;
		font-style: italic;
		color: var(--text-muted);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.webinar__p {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.9;
		max-width: 600px;
		margin-bottom: 10px;
	}

	.webinar__p:last-of-type {
		margin-bottom: 0;
	}

	.webinar__btn {
		margin-top: 22px;
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

		.event__webinars {
			padding: 28px 28px 36px;
		}

		.webinar__header {
			flex-direction: column;
			gap: 6px;
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

		.event__webinars {
			padding: 20px 20px 28px;
		}

		.cta-band h2 {
			font-size: 2.2rem;
		}
	}
</style>
