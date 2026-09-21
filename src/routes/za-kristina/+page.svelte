<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let expanded = $state(false);

	const pillars = [
		{
			title: 'Всичко в теб е наред',
			desc: 'Твоята същност е по-голяма от историите, които си научил за себе си'
		},
		{
			title: 'Мирът е твоята природа',
			desc: 'Да бъдеш свързан със себе си, докато преживяваш живота такъв, какъвто идва'
		},
		{
			title: 'Автентичността е свобода',
			desc: 'Да живееш в съгласие със себе си и с онова, което истински има значение за теб'
		}
	];
</script>

<svelte:head>
	<title>За Кристина Дойчинова — Ментор в Себепознанието</title>
	<meta
		name="description"
		content="Кристина Дойчинова — ментор в себепознанието и психо-емоционалните динамики. Повече от 20 години работа с хора. Свободата започва със себепознанието."
	/>
	<meta property="og:title" content="За Кристина Дойчинова — Ментор в Себепознанието" />
	<meta
		property="og:description"
		content="Кристина Дойчинова — ментор в себепознанието и психо-емоционалните динамики. Повече от 20 години работа с хора. Свободата започва със себепознанието."
	/>
	<meta property="og:url" content="https://kristinadoychinova.com/za-kristina" />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
	<div class="page-hero__text">
		<h1>За<br /><em>Кристина</em></h1>
		<p class="page-hero__desc">
			Ментор в себепознанието, обучител и фасилитатор с над 20 години опит в работата с хора.
		</p>
		<div class="page-hero__meta">
			<span>Ментор</span>
			<span class="page-hero__dot"></span>
			<span>Обучител</span>
			<span class="page-hero__dot"></span>
			<span>Фасилитатор</span>
		</div>
	</div>
	<div class="page-hero__visual" aria-hidden="true">
		<div class="page-hero__img"></div>
		<div class="page-hero__quote">
			<span class="page-hero__quote-mark">"</span>
			<p>Вярвам, че всеки носи в себе си силата за промяна.</p>
		</div>
	</div>
</section>

<!-- ИСТОРИЯ -->
<section class="story">
	<div class="story__inner container">
		<div class="story__content">
			<span class="section-tag">История</span>
			<h2 class="story__heading">Моят<br /><em>път</em></h2>
			<blockquote class="story__pull">
				Повече от 20 години изследвам човешката психика, а над 17 от тях прекарах в
				психотерапевтичния кабинет.
			</blockquote>
			<p class="story__lead-p">
				Пътят ми премина през психологията, хипнозата, работата с тялото, коучинга, различни
				терапевтични и духовни системи. Създадох свои методи, преподавах и работих с хиляди хора и
				ученици.
			</p>
			<p class="story__p">И точно този опит ме отведе отвъд методите.</p>

			{#if expanded}
				<div transition:slide={{ duration: 360, easing: cubicOut }}>
					<p class="story__p">
						Разбрах, че нищо в нас не се нуждае от поправка, а от свобода. Че не самите ситуации ни
						определят, а значенията, които сме се научили да им придаваме. Ограничени сме от това,
						което сме повярвали за себе си и възможностите си, от онова което сме научили.
					</p>
					<p class="story__p">
						Несъзнателното ни поле е изпълнено с истории, убеждения, емоционални модели, стратегии,
						които някога са ни били нужни, но днес често се превръщат в най-големите пречки.
					</p>
					<p class="story__p">
						Днес работата ми е да помагам на човек да разпознае тези невидими конструкции, да разбере
						динамиките, които са ги формирали и излезе отвъд тях. Да се приближи до онова, което
						винаги е било в сърцевината на моята работа — дълбокото свързване със себе си, с живота и
						с любовта.
					</p>
					<p class="story__p story__p--emphasis">
						Затова днес определям себе си като ментор в себепознанието и психо-емоционалните
						динамики.<br />
						Не защото съм оставила терапията зад себе си.<br />
						А защото пътят ми ме отведе отвъд нея.
					</p>
				</div>
			{/if}

			<button class="story__toggle" onclick={() => (expanded = !expanded)}>
				{expanded ? 'Покажи по-малко' : 'Прочети повече'}
				<svg
					class="story__toggle-icon"
					class:story__toggle-icon--up={expanded}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M3 5.5L8 10.5L13 5.5"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
		<div class="story__portrait" aria-hidden="true">
			<div class="story__portrait-img"></div>
			<div class="story__portrait-caption">
				<span class="story__caption-mark">"</span>
				<p>Терапията е пространство за смелост.</p>
			</div>
		</div>
	</div>
</section>

<!-- ПОДХОД -->
<section class="approach">
	<div class="approach__inner container">
		<header class="approach__header">
			<span class="section-tag">Подходът</span>
			<h2><em>Свободата</em> започва<br />със себепознанието!</h2>
			<p class="approach__intro">
				Като ментор помагам на хората да осъзнаят и предефинират менталните матрици, които
				ограничават благополучието и удовлетворението от живота им.
			</p>
		</header>

		<div class="approach__body">
			<p class="approach__lead">Независимо дали се стремите към:</p>
			<ul class="approach__list">
				<li>По-добри взаимоотношения със себе си, другите и света</li>
				<li>Повече усещане за вътрешен мир — намаляване на стреса и тревожността</li>
				<li>Повече яснота за самите вас и вашите ситуации — вашите чувства и поведения</li>
				<li>
					По-добро разбиране и свързване с емоционалния ви свят — връзка с невидимата ви навигационна
					система
				</li>
				<li>Или повече чувство на свобода и автентичност</li>
			</ul>
			<p class="approach__note">Личните сесии ще ви отведат към точната посока.</p>
			<p class="approach__p">
				Като ментор помагам на хората да разпознаят онова, което ги отдалечава от собствената им
				природа. Да разберат объркването, емоциите и моделите, които повтарят. Да научат онова, което
				някога не са имали възможност да научат. И да открият повече свобода в начина, по който
				мислят, чувстват, избират и живеят, за да достигнат благополучието и изобилието, което желаят
				в своя живот.
			</p>
		</div>

		<div class="approach__pillars">
			{#each pillars as pillar, i}
				<div class="pillar">
					<span class="pillar__num">0{i + 1}</span>
					<h3 class="pillar__title">{pillar.title}</h3>
					<p class="pillar__desc">{pillar.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-band">
	<div class="cta-band__inner container">
		<p class="section-tag">Първа стъпка</p>
		<h2>Свържи се<br /><em>с Кристина</em></h2>
		<a href="/kontakti" class="btn btn-primary">Пиши ѝ</a>
	</div>
</section>

<style>
	/* ── PAGE HERO ── */
	.page-hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
		border-bottom: 1px solid var(--border);
		min-height: 62vh;
	}

	.page-hero__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: calc(var(--nav-h) + 40px) 72px 72px 80px;
		max-width: 680px;
		justify-self: end;
		width: 100%;
	}

	.page-hero h1 {
		font-size: clamp(3rem, 6vw, 5.5rem);
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
		margin-bottom: 36px;
	}

	.page-hero__meta {
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 0.72rem;
		letter-spacing: 0.14em;
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

	.page-hero__visual {
		position: relative;
		overflow: hidden;
	}

	.page-hero__img {
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, #d8c8cb 0%, #c4a8b0 35%, #a88894 65%, #8e6a76 100%);
	}

	.page-hero__quote {
		position: absolute;
		left: 48px;
		bottom: 48px;
		right: 48px;
		max-width: 360px;
		background: rgba(237, 234, 229, 0.92);
		backdrop-filter: blur(2px);
		padding: 28px 32px 30px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.page-hero__quote-mark {
		font-family: var(--heading-font);
		font-size: 3rem;
		line-height: 0.6;
		color: var(--secondary);
		opacity: 0.4;
	}

	.page-hero__quote p {
		font-family: var(--heading-font);
		font-size: 1.25rem;
		font-style: italic;
		line-height: 1.4;
		color: var(--text);
	}

	/* ── STORY ── */
	.story {
		padding: var(--section-v) 0;
	}

	.story__inner {
		display: grid;
		grid-template-columns: 1fr 360px;
		gap: 0 80px;
		align-items: start;
	}

	.story__content {
		min-width: 0;
	}

	.story__heading {
		font-size: clamp(2.6rem, 4.5vw, 4.2rem);
		line-height: 1.04;
		margin-top: 14px;
		margin-bottom: 44px;
	}

	.story__heading em {
		color: var(--secondary);
		font-style: italic;
	}

	.story__pull {
		font-family: var(--heading-font);
		font-size: clamp(1.25rem, 2.2vw, 1.7rem);
		font-style: italic;
		line-height: 1.55;
		color: var(--text);
		border-left: 2px solid var(--secondary);
		padding-left: 26px;
		margin: 0 0 40px;
	}

	.story__lead-p {
		font-size: 1.02rem;
		color: var(--text);
		line-height: 1.95;
		margin-bottom: 22px;
		max-width: 580px;
	}

	.story__p {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.95;
		margin-bottom: 20px;
		max-width: 580px;
	}

	.story__p--emphasis {
		color: var(--text);
		font-style: italic;
		border-left: 2px solid var(--secondary);
		padding-left: 20px;
		margin-top: 28px;
	}

	.story__toggle {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary);
		padding: 0;
		transition: opacity 0.2s;
	}

	.story__toggle:hover {
		opacity: 0.7;
	}

	.story__toggle-icon {
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}

	.story__toggle-icon--up {
		transform: rotate(180deg);
	}

	/* Portrait */
	.story__portrait {
		position: sticky;
		top: calc(var(--nav-h) + 36px);
	}

	.story__portrait-img {
		width: 100%;
		aspect-ratio: 3 / 4;
		background: linear-gradient(170deg, #cdb8bd 0%, #aa8893 50%, #8a6470 100%);
	}

	.story__portrait-caption {
		padding: 22px 26px 24px;
		background: #e3ddd6;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.story__caption-mark {
		font-family: var(--heading-font);
		font-size: 2.2rem;
		line-height: 0.55;
		color: var(--secondary);
		opacity: 0.4;
	}

	.story__portrait-caption p {
		font-family: var(--heading-font);
		font-size: 1.05rem;
		font-style: italic;
		color: var(--text);
		line-height: 1.45;
	}

	/* ── APPROACH ── */
	.approach {
		padding: var(--section-v) 0;
	}

	.approach__inner {
		max-width: 1060px;
	}

	.approach__header {
		text-align: center;
		max-width: 580px;
		margin: 0 auto 72px;
	}

	.approach__header h2 {
		font-size: clamp(2.4rem, 4vw, 3.6rem);
		line-height: 1.08;
		margin-top: 14px;
		margin-bottom: 18px;
	}

	.approach__header h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.approach__intro {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.85;
	}

	.approach__body {
		max-width: 680px;
		margin: 0 auto 72px;
	}

	.approach__lead {
		font-size: 0.95rem;
		color: var(--text);
		font-weight: 500;
		margin-bottom: 18px;
	}

	.approach__list {
		list-style: none;
		padding: 0;
		margin: 0 0 28px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.approach__list li {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.7;
		padding-left: 22px;
		position: relative;
	}

	.approach__list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 10px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--secondary);
		opacity: 0.5;
	}

	.approach__note {
		font-size: 0.92rem;
		color: var(--secondary);
		font-style: italic;
		margin-bottom: 32px;
	}

	.approach__p {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.95;
	}

	.approach__pillars {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-top: 1px solid var(--border);
	}

	.pillar {
		padding: 48px 44px;
		border-right: 1px solid var(--border);
	}

	.pillar:last-child {
		border-right: none;
	}

	.pillar__num {
		font-family: var(--heading-font);
		font-size: 4rem;
		font-style: italic;
		color: var(--secondary);
		opacity: 0.18;
		display: block;
		line-height: 1;
		margin-bottom: 20px;
	}

	.pillar__title {
		font-family: var(--heading-font);
		font-size: 1.8rem;
		font-weight: 400;
		color: var(--text);
		margin-bottom: 14px;
		line-height: 1.15;
	}

	.pillar__desc {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.9;
	}

	/* ── CTA ── */
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
		font-size: clamp(2.2rem, 4vw, 3.4rem);
		line-height: 1.15;
	}

	.cta-band h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.cta-band p {
		font-size: 0.95rem;
		color: var(--text-muted);
		max-width: 400px;
		line-height: 1.8;
	}

	/* ── RESPONSIVE ── */
	@media (max-width: 1024px) {
		.story__inner {
			grid-template-columns: 1fr 300px;
			gap: 0 52px;
		}
	}

	@media (max-width: 900px) {
		.page-hero {
			grid-template-columns: 1fr;
			min-height: 0;
		}

		.page-hero__text {
			padding: calc(var(--nav-h) + 32px) 24px 48px;
			max-width: 100%;
			justify-self: stretch;
			order: 1;
		}

		.page-hero__visual {
			order: 0;
			min-height: 56vw;
			height: 56vw;
		}

		.page-hero__quote {
			left: 24px;
			right: 24px;
			bottom: 24px;
			padding: 20px 24px 22px;
		}

		.page-hero__quote p {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 860px) {
		.story__inner {
			grid-template-columns: 1fr;
			gap: 52px 0;
		}

		.story__portrait {
			position: static;
			max-width: 400px;
		}

		.approach__pillars {
			grid-template-columns: 1fr;
		}

		.pillar {
			border-right: none;
			border-bottom: 1px solid var(--border);
			padding: 36px 0;
		}

		.pillar:last-child {
			border-bottom: none;
		}
	}

	@media (max-width: 600px) {
		.story__pull {
			font-size: 1.15rem;
		}
	}
</style>
