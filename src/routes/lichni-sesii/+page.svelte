<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let openIndex = $state(null);

	const toggle = (i) => {
		openIndex = openIndex === i ? null : i;
	};

	const sessions = [
		{
			title: 'Индивидуални срещи',
			format: 'На живо & Онлайн · 50–60 мин',
			teaser: 'Среща на живо или онлайн — с лично внимание за твоите нужди, ситуация и история.',
			paras: [
				'Личните срещи са възможност да преорганизираш вътрешното си пространство по начин, който служи за твоето спокойствие, щастие и просперитет с лично внимание за твоите нужди, над твоята ситуация и история.',
				'Казват, че менторските срещи, които водя имат терапевтичен резултат, но това е страничен ефект от вътрешното пренареждане и много години опит като психотерапевт.',
				'Човешката психика не функционира като проста последователност от причина и следствие, а изгражда сложни взаимовръзки, които в момента на изграждането си са следвали много прецизна логика. В личните срещи откриваме невидимата логика, невидимата динамика, която те блокира да бъдеш свободен на всички нива на живота, за да откриеш себе си отново.'
			],
			closeQuote: 'Моята работа е да разбереш собствените си модели, ограничения и вътрешни динамики, така че да намериш свобода.',
			points: ['На живо', 'Онлайн', 'Поверителна среда']
		},
		{
			title: 'Медитативни сесии',
			format: 'Водена медитация · 50–60 мин',
			teaser: 'Лична сесия за водена медитация, чрез която да се свържеш отново със себе си.',
			openQuote: 'Колкото по-дълбок мир откриваш в себе си, толкова повече хаос можеш да толерираш.',
			paras: [
				'Лична сесия за водена медитация от ново поколение, чрез която да се свържеш отново със себе си, с ресурсите и необятността, която има капацитета да задържи всяко преживяване.',
				'Медитацията е нашата способност да се завръщаме към себе си, да оставим за момент света и да се приберем.',
				'Тези медитативни сесии са разработени по система, която наричам Медитативно-утвърдителен подход и се изграждат индивидуално за всеки човек. Насочени са към откриване на вътрешен мир и лично щастие.'
			],
			closeQuote: 'Единението е там, където покоят и движението не се отхвърлят.',
			points: ['Медитативно-утвърдителен подход', 'Индивидуален подход', 'Вътрешен мир']
		}
	];
</script>

<svelte:head>
	<title>Лични сесии — Кристина Дойчинова | Ментор</title>
	<meta
		name="description"
		content="Индивидуални сесии с Кристина Дойчинова — ментор в себепознанието. Лична среща, онлайн сесия или медитативна сесия. Запишете своята сесия."
	/>
	<meta property="og:title" content="Лични сесии — Кристина Дойчинова | Ментор" />
	<meta
		property="og:description"
		content="Индивидуални сесии с Кристина Дойчинова — ментор в себепознанието. Лична среща, онлайн сесия или медитативна сесия. Запишете своята сесия."
	/>
	<meta property="og:url" content="https://kristinadoychinova.com/lichni-sesii" />
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<h1>Лични<br /><em>сесии</em></h1>
		<div class="page-hero__divider" aria-hidden="true"></div>
		<p class="page-hero__quote">„Време да възстановиш взаимоотношенията и връзката със себе си"</p>
		<div class="page-hero__meta">
			<span>Яснота</span>
			<span class="page-hero__dot"></span>
			<span>Свобода</span>
			<span class="page-hero__dot"></span>
			<span>Автентичност</span>
		</div>
	</div>
</section>

<!-- VISUAL ACCORDION -->
<section class="sessions">
	<div class="sessions__inner container">
		{#each sessions as session, i}
			<article class="session" class:session--open={openIndex === i}>
				<div class="session__media">
					<div class="session__img">
					<img src="/photos/{i === 0 ? 'lichni-sreshti' : 'meditacia'}.webp" alt="" loading="lazy" />
				</div>
					<span class="session__num">0{i + 1}</span>
				</div>

				<div class="session__main">
					<button class="session__head" onclick={() => toggle(i)} aria-expanded={openIndex === i}>
						<div class="session__head-text">
							<p class="session__format">{session.format}</p>
							<h2 class="session__title">{session.title}</h2>
							<p class="session__teaser">{session.teaser}</p>
						</div>
						<span class="session__icon" class:session__icon--open={openIndex === i}>
							<svg width="20" height="20" viewBox="0 0 22 22" fill="none">
								<path
									d="M5.5 8.25L11 13.75L16.5 8.25"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</button>

					{#if openIndex === i}
						<div class="session__body" transition:slide={{ duration: 340, easing: cubicOut }}>
							{#if session.openQuote}
								<blockquote class="session__quote">{session.openQuote}</blockquote>
							{/if}
							{#each session.paras as para, pi}
								<p class="session__desc" class:session__desc--first={pi === 0}>{para}</p>
							{/each}
							{#if session.closeQuote}
								<blockquote class="session__close-quote">{session.closeQuote}</blockquote>
							{/if}
							<ul class="session__points">
								{#each session.points as point}
									<li>{point}</li>
								{/each}
							</ul>
							<a href="/kontakti" class="btn btn-primary">Запиши своята среща</a>
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- BOTTOM CTA -->
<section class="cta-band">
	<div class="cta-band__inner container">
		<p class="section-tag">Първа стъпка</p>
		<h2>Готов/а си да<br /><em>започнем?</em></h2>
		<p>Готов/а да направиш следващата стъпка? Свържи се с Кристина и запиши своята сесия.</p>
		<a href="/kontakti" class="btn btn-primary">Свържи се с Кристина</a>
	</div>
</section>

<style>
	/* PAGE HERO — centered, no image */
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
		font-size: clamp(3.8rem, 8vw, 7rem);
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
		font-size: clamp(1.1rem, 2vw, 1.45rem);
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

	/* VISUAL ACCORDION */
	.sessions {
		padding: 64px 0 90px;
	}

	.sessions__inner {
		max-width: 1060px;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	.session {
		display: grid;
		grid-template-columns: 300px 1fr;
		background: var(--card-bg);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
		transition: box-shadow 0.35s ease;
	}

	.session--open {
		box-shadow: 0 18px 50px rgba(92, 60, 70, 0.13);
	}

	.session__media {
		position: relative;
		overflow: hidden;
		min-height: 240px;
	}

	.session__img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transition: transform 0.6s ease;
		overflow: hidden;
	}

	.session__img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.session:hover .session__img {
		transform: scale(1.05);
	}

	.session__num {
		position: absolute;
		top: 18px;
		left: 20px;
		font-family: var(--heading-font);
		font-size: 1.5rem;
		font-style: italic;
		color: #fff;
		opacity: 0.85;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
	}

	.session__main {
		display: flex;
		flex-direction: column;
		padding: 0 44px;
	}

	.session__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: 100%;
		padding: 36px 0 32px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.session__head-text {
		flex: 1;
	}

	.session__format {
		font-size: 0.7rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 10px;
	}

	.session__title {
		font-family: var(--heading-font);
		font-size: clamp(1.7rem, 2.6vw, 2.4rem);
		font-weight: 400;
		line-height: 1.1;
		color: var(--text);
		transition: color 0.22s;
		margin-bottom: 10px;
	}

	.session__head:hover .session__title {
		color: var(--secondary);
	}

	.session__teaser {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.6;
		max-width: 440px;
	}

	.session__icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--secondary);
		transition:
			transform 0.3s ease,
			background 0.25s ease,
			color 0.25s ease;
	}

	.session__head:hover .session__icon {
		background: var(--secondary);
		color: #fff;
	}

	.session__icon--open {
		transform: rotate(180deg);
	}

	.session__body {
		overflow: hidden;
	}

	.session__quote {
		font-family: var(--heading-font);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--secondary);
		border-left: 2px solid var(--secondary);
		padding: 4px 0 4px 20px;
		margin: 0 0 22px;
		max-width: 500px;
		line-height: 1.55;
	}

	.session__close-quote {
		font-family: var(--heading-font);
		font-size: 1.05rem;
		font-style: italic;
		color: var(--text);
		border-left: 2px solid var(--secondary);
		padding: 4px 0 4px 20px;
		margin: 20px 0 24px;
		max-width: 500px;
		line-height: 1.55;
		opacity: 0.8;
	}

	.session__desc {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.95;
		max-width: 560px;
		margin-bottom: 14px;
	}

	.session__desc--first {
		padding-top: 4px;
	}

	.session__desc:last-of-type {
		margin-bottom: 0;
	}

	.session__points {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin: 24px 0 32px;
		padding: 0;
	}

	.session__points li {
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--secondary);
		padding: 7px 16px;
		border: 1px solid var(--border);
		border-radius: 100px;
	}

	.session__body .btn {
		margin-bottom: 38px;
	}

	/* BOTTOM CTA */
	.cta-band {
		background: #e3ddd6;
		padding: 100px 0;
		text-align: center;
	}

	.cta-band__inner {
		max-width: 580px;
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
	}

	.cta-band p {
		font-size: 0.95rem;
		color: var(--text-muted);
		max-width: 400px;
		line-height: 1.8;
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.page-hero {
			padding: calc(var(--nav-h) + 48px) 0 64px;
		}
	}

	@media (max-width: 768px) {
		.session {
			grid-template-columns: 1fr;
		}

		.session__media {
			min-height: 200px;
			height: 56vw;
		}

		.session__main {
			padding: 0 28px;
		}

		.session__head {
			padding: 28px 0 26px;
		}

		.session__body .btn {
			margin-bottom: 30px;
		}
	}
</style>
