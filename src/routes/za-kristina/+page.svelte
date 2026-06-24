<script>
	const credentials = [
		{
			year: '2024',
			title: 'Примерен сертификат',
			org: 'Институт по психотерапия, София'
		},
		{
			year: '2022',
			title: 'Примерен сертификат',
			org: 'Институт по психотерапия, София'
		},
		{
			year: '2021',
			title: 'Примерен сертификат',
			org: 'Институт по психотерапия, София'
		},
		{
			year: '2019',
			title: 'Примерен сертификат',
			org: 'Институт по психотерапия, София"'
		}
	];

	const pillars = [
		{
			title: 'Без осъждане',
			desc: 'Терапевтичното пространство е безопасно по дефиниция. Всичко, което споделяш, се приема с уважение и остава поверително.'
		},
		{
			title: 'Персонализиран темп',
			desc: 'Не работя по схема — намираме заедно ритъма и методите, които работят именно за теб и твоята ситуация.'
		},
		{
			title: 'Интегративен метод',
			desc: 'Комбинирам когнитивно-поведенчески, хуманистични и телесноориентирани техники според нуждата на момента.'
		}
	];
</script>

<svelte:head>
	<title>За Кристина — Кристина Дойчинова</title>
</svelte:head>

<!-- HERO -->
<section class="page-hero">
	<div class="page-hero__text">
		<nav class="breadcrumb">
			<a href="/">Начало</a>
			<span>·</span>
			<span>За Кристина</span>
		</nav>
		<h1>За<br /><em>Кристина</em></h1>
		<p class="page-hero__desc">
			Психотерапевт, обучител и фасилитатор с дългогодишен опит в индивидуална работа с възрастни.
		</p>
		<div class="page-hero__meta">
			<span>Психотерапевт</span>
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
				Пътят към психотерапията не беше права линия — беше среща с въпроси, на които нямах готови
				отговори.
			</blockquote>
			<p class="story__lead-p">
				Израснах с любопитство към хората — защо реагираме по начина, по който го правим; какво стои
				зад решенията, болките и радостите ни. Това любопитство ме отведе първо до психологията,
				после до психотерапията.
			</p>
			<p class="story__p">
				Завърших психология в Софийски университет, след което преминах специализирано обучение по
				интегративна психотерапия. Работила съм в различни контексти — с деца, юноши и възрастни, в
				клинична среда и в частна практика.
			</p>
			<p class="story__p">
				Днес работя изцяло индивидуално, защото вярвам в силата на дълбоката терапевтична връзка —
				онова пространство между двама души, в което наистина е възможна промяна.
			</p>
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

<!-- ОБРАЗОВАНИЕ -->
<section class="education">
	<div class="education__inner container">
		<div class="education__left">
			<span class="section-tag">Образование</span>
			<h2>Квалификации<br />& <em>сертификати</em></h2>
			<p class="education__sub">
				Непрекъснато надграждане на знанията, за да предоставям актуална и качествена помощ.
			</p>
		</div>
		<ul class="education__list">
			{#each credentials as item}
				<li class="credential">
					<span class="credential__year">{item.year}</span>
					<div class="credential__body">
						<p class="credential__title">{item.title}</p>
						<p class="credential__org">{item.org}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- ПОДХОД -->
<section class="approach">
	<div class="approach__inner container">
		<header class="approach__header">
			<span class="section-tag">Подходът</span>
			<h2>Как работя<br /><em>с теб</em></h2>
			<p class="approach__intro">
				Няма универсален метод. Работата ни заедно се гради на доверие, уважение и готовност и от
				двете страни.
			</p>
		</header>
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
		<h2>Свържи се<br /><em>с мен</em></h2>
		<p>Първият разговор е безплатен и без ангажимент — просто разговор.</p>
		<a href="/kontakti" class="btn btn-primary">Напиши ми</a>
	</div>
</section>

<style>
	/* ── BREADCRUMB ── */
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

	/* ── EDUCATION ── */
	.education {
		background: #e8e3dc;
		padding: var(--section-v) 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.education__inner {
		display: grid;
		grid-template-columns: 380px 1fr;
		gap: 0 80px;
		align-items: start;
	}

	.education__left h2 {
		font-size: clamp(2rem, 3.2vw, 3rem);
		line-height: 1.1;
		margin-top: 14px;
		margin-bottom: 18px;
	}

	.education__left h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.education__sub {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.85;
		max-width: 300px;
	}

	.education__list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.credential {
		display: flex;
		gap: 28px;
		align-items: baseline;
		padding: 26px 0;
		border-bottom: 1px solid rgba(113, 73, 85, 0.12);
	}

	.credential:first-child {
		border-top: 1px solid rgba(113, 73, 85, 0.12);
	}

	.credential__year {
		font-family: var(--heading-font);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--secondary);
		min-width: 52px;
		flex-shrink: 0;
	}

	.credential__title {
		font-size: 0.95rem;
		color: var(--text);
		margin-bottom: 5px;
		line-height: 1.4;
	}

	.credential__org {
		font-size: 0.82rem;
		color: var(--text-muted);
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

		.education__inner {
			grid-template-columns: 1fr;
			gap: 40px 0;
		}

		.education__sub {
			max-width: 100%;
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
