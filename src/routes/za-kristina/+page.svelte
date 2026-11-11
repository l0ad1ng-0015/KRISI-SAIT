<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let expanded = $state(false);
</script>

<svelte:head>
	<title>За Кристина Дойчинова — Ментор в Себепознанието</title>
	<meta
		name="description"
		content="Кристина Дойчинова — ментор психо-емоционални динамики и себепознание. Близо 20 години работа с хора. Свободата започва със себепознанието."
	/>
	<meta property="og:title" content="За Кристина Дойчинова — Ментор в Себепознанието" />
	<meta
		property="og:description"
		content="Кристина Дойчинова — ментор психо-емоционални динамики и себепознание. Близо 20 години работа с хора. Свободата започва със себепознанието."
	/>
	<meta property="og:url" content="https://kristinadoychinova.com/za-kristina" />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
	<div class="page-hero__bg" aria-hidden="true">
		<img src="/photos/za-kristina-hero.webp" alt="" fetchpriority="high" decoding="sync" />
	</div>
	<div class="page-hero__overlay">
		<div class="page-hero__text">
			<div class="page-hero__meta">
				<span>Ментор</span>
				<span class="page-hero__dot"></span>
				<span>Лектор</span>
				<span class="page-hero__dot"></span>
				<span>Автор</span>
			</div>
			<h1>За<br /><em>Кристина</em></h1>
			<p class="page-hero__desc">
				Ментор психо-емоционални динамики и себепознание
			</p>
		</div>
	</div>
</section>

<!-- ИСТОРИЯ -->
<section class="story">
	<div class="story__inner container">
		<div class="story__content">
			<span class="section-tag">История</span>
			<h2 class="story__heading">Професионалният<br /><em>ми път</em></h2>
			<blockquote class="story__pull">
				Близо 20 години практика като психотерапевт и преподавател по хипноза и
				психотерапевтични техники.
			</blockquote>
			<p class="story__lead-p">
				Академичното ми образование е магистър — клиничен психолог. След него имам десетки
				курсове и обучения за работа с човешката психика – когнитивни, поведенчески, соматични,
				лингвистични, трансперсонални и пр. Имам богата и многолика професионална история, като
				водещ и фасилитатор на множество терапевтични формата – групови и индивидуални. Автор
				съм на няколко модела и обучения за психологична работа. Основател съм на Център
				InnerSelf и председател на „Институт за холистична терапия и иновативна психология". За
				всички тях подробно може да прочетете на
				<a href="https://innerself.bg" target="_blank" rel="noopener">innerself.bg</a>.
			</p>

			{#if expanded}
				<div transition:slide={{ duration: 360, easing: cubicOut }}>
					<p class="story__p">
						Но вярвам, че по-важната част е да се срещнете с мен като човек. Обичам изкуството,
						гората, движението. Имам доста хобита. Харесвам живота и нещата в него, дори когато
						не ги разбирам напълно. Изследовател съм. Обичам да пиша, харесвам смеха.
					</p>
					<p class="story__p story__p--emphasis">
						Вярвам, че да се научим как да живеем щастливо е път и този път е уникален — всеки
						от нас има капацитета да го извърви.<br />
						Не съм изоставила психотерапията, просто пътят ме отведе отвъд нея.
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
			<div class="story__portrait-img">
				<img src="/photos/kristina-portrait.webp" alt="Кристина Дойчинова" loading="lazy" />
			</div>
			<div class="story__portrait-caption">
				<span class="story__caption-mark">"</span>
				<p>Дори най-безумното действие е породено от желанието да се свържем с любовта.</p>
			</div>
		</div>
	</div>
</section>

<!-- РАБОТАТА МИ СЕГА -->
<section class="work">
	<div class="work__inner container">
		<header class="work__header">
			<span class="section-tag">Подходът</span>
			<h2>Работата<br /><em>ми сега</em></h2>
		</header>

		<div class="work__body">
			<p class="work__lead">
				След дългогодишна практика като психотерапевт и преподавател по психология и хипноза,
				днес посвещавам работата си на задълбоченото разбиране на човешкия вътрешен свят,
				себепознанието и пътя към вътрешна свобода и автентичност като ментор психо-емоционални
				динамики.
			</p>
			<p class="work__p">
				Когато осъзнаем, че човешкият живот е едно голямо учебно поле, започваме да разбираме,
				че играта има правила. Моята работа е да разберем какви са твоите правила, за да се
				движиш с лекота в личното ти игрално поле.
			</p>

			<p class="work__list-label">Независимо дали се стремиш към:</p>
			<ul class="work__list">
				<li>По-добри взаимоотношения</li>
				<li>По-здравословни връзки</li>
				<li>Намаляване на стреса и тревожността</li>
				<li>Яснота в собствената ти ситуация, чувства и поведения</li>
				<li>Разбиране и свързване с емоциите</li>
				<li>Радост, спонтанност и чувство на свобода и автентичност</li>
				<li>Удовлетворение, лекота и разблокиране на креативността</li>
			</ul>

			<p class="work__closing">
				В основата стои възстановяването на взаимоотношенията с теб, от които зависи всичко
				друго. Моята работа като ментор е да намерим уникалния път към твоята съкровена същност,
				която търси свобода и разгръщане.
			</p>
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
		position: relative;
		min-height: 65vh;
		overflow: hidden;
		border-bottom: 1px solid var(--border);
	}

	.page-hero__bg {
		position: absolute;
		inset: 0;
	}

	.page-hero__bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.page-hero__overlay {
		position: relative;
		z-index: 1;
		min-height: 65vh;
		display: flex;
		align-items: center;
		background: linear-gradient(
			to right,
			rgba(237, 234, 229, 0.97) 0%,
			rgba(237, 234, 229, 0.9) 35%,
			rgba(237, 234, 229, 0.55) 60%,
			transparent 82%
		);
	}

	.page-hero__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: calc(var(--nav-h) + 60px) 80px 80px;
		max-width: 580px;
	}

	.page-hero h1 {
		font-size: clamp(3.4rem, 7vw, 6rem);
		line-height: 1.08;
		margin-bottom: 20px;
		margin-top: 20px;
	}

	.page-hero h1 em {
		color: var(--secondary);
		font-style: italic;
	}

	.page-hero__desc {
		font-family: var(--heading-font);
		font-size: clamp(1rem, 1.8vw, 1.3rem);
		font-style: italic;
		color: var(--text-muted);
		line-height: 1.7;
		max-width: 440px;
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

	/* ── STORY ── */
	.story {
		padding: var(--section-v) 0 calc(var(--section-v) * 0.6);
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

	.story__lead-p a {
		color: var(--secondary);
		text-decoration: underline;
		text-underline-offset: 3px;
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
		position: relative;
		overflow: hidden;
	}

	.story__portrait-img img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
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

	/* ── РАБОТАТА МИ СЕГА ── */
	.work {
		padding: calc(var(--section-v) * 0.7) 0 var(--section-v);
		background: var(--card-bg);
		border-top: 1px solid var(--border);
	}

	.work__inner {
		max-width: 820px;
	}

	.work__header {
		margin-bottom: 52px;
	}

	.work__header h2 {
		font-size: clamp(2.4rem, 4vw, 3.6rem);
		line-height: 1.08;
		margin-top: 14px;
	}

	.work__header h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.work__body {
		max-width: 700px;
	}

	.work__lead {
		font-size: clamp(1rem, 1.6vw, 1.15rem);
		color: var(--text);
		line-height: 1.9;
		margin-bottom: 26px;
	}

	.work__p {
		font-size: clamp(1rem, 1.6vw, 1.1rem);
		color: var(--text-muted);
		line-height: 1.95;
		margin-bottom: 32px;
	}

	.work__list-label {
		font-size: 1rem;
		color: var(--text);
		font-style: italic;
		font-family: var(--heading-font);
		margin-bottom: 16px;
	}

	.work__list {
		list-style: none;
		padding: 0;
		margin: 0 0 32px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.work__list li {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.7;
		padding-left: 24px;
		position: relative;
	}

	.work__list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 11px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--secondary);
		opacity: 0.5;
	}

	.work__closing {
		font-size: clamp(1rem, 1.6vw, 1.1rem);
		color: var(--text);
		line-height: 1.9;
		font-family: var(--heading-font);
		font-style: italic;
		border-left: 2px solid var(--secondary);
		padding-left: 24px;
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

	/* ── RESPONSIVE ── */
	@media (max-width: 1024px) {
		.story__inner {
			grid-template-columns: 1fr 300px;
			gap: 0 52px;
		}
	}

	@media (max-width: 900px) {
		.page-hero__overlay {
			background: linear-gradient(
				to bottom,
				rgba(237, 234, 229, 0.97) 0%,
				rgba(237, 234, 229, 0.88) 60%,
				rgba(237, 234, 229, 0.7) 100%
			);
		}

		.page-hero__text {
			padding: calc(var(--nav-h) + 40px) 24px 60px;
			max-width: 100%;
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
	}

	@media (max-width: 600px) {
		.story__pull {
			font-size: 1.15rem;
		}
	}
</style>
