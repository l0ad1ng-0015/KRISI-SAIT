<script>
	// Reviews — replace with real testimonials when available
	const reviews = [
		{
			text: 'Работата с Кристина промени начина, по който виждам себе си. За първи път почувствах, че нещата, които ме тревожиха, имат смисъл.',
			name: 'М. С.'
		},
		{
			text: 'Вградих нова гледна точка, която ми помогна да взема важни решения с по-голямо спокойствие и яснота.',
			name: 'Д. П.'
		},
		{
			text: 'Препоръчвам тези срещи на всеки, който иска да разбере по-дълбоко себе си и своите преживявания.',
			name: 'Г. Т.'
		}
	];

	let reviewsEl = $state(null);

	function scrollReviews() {
		if (reviewsEl) {
			reviewsEl.scrollBy({ left: 360, behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Кристина Дойчинова — Ментор в Себепознанието</title>
	<meta
		name="description"
		content="Свободата започва със себепознанието. Кристина Дойчинова — ментор в себепознанието и психо-емоционалните динамики. Индивидуални срещи и групови събития."
	/>
	<meta property="og:title" content="Кристина Дойчинова — Ментор в Себепознанието" />
	<meta
		property="og:description"
		content="Свободата започва със себепознанието. Кристина Дойчинова — ментор в себепознанието и психо-емоционалните динамики. Индивидуални срещи и групови събития."
	/>
	<meta property="og:url" content="https://kristinadoychinova.com/" />
</svelte:head>

<!-- HERO -->
<section class="hero">
	<div class="hero__img" aria-hidden="true"></div>
	<div class="hero__content">
		<div class="hero__text">
			<p class="hero__tag section-tag">Ментор</p>
			<h1 class="hero__heading">
				Кристина<br /><em>Дойчинова</em>
			</h1>
			<div class="hero__actions">
				<a href="/kontakti" class="btn btn-primary">Запиши среща</a>
				<a href="#za-kristina" class="btn btn-outline">За Кристина</a>
			</div>
		</div>
	</div>
</section>

<!-- INTRO QUOTE -->
<section class="quote-section">
	<div class="quote-section__inner container">
		<span class="quote-section__mark">"</span>
		<p class="quote-section__text">
			"Истинският мир не е липсата на конфликти, а е присъствието на абсолютната тишина в душата."
			Садгуру
		</p>
	</div>
</section>

<!-- 3 SERVICE CARDS -->
<section class="services">
	<div class="services__inner container">
		<a href="/lichni-sesii" class="svc-card">
			<div class="svc-card__img svc-card__img--sesii"></div>
			<div class="svc-card__body">
				<h3 class="svc-card__title">Лични срещи</h3>
				<p class="svc-card__desc">
					Индивидуална среща на живо или онлайн — пространство само за теб, за да изследваш онова,
					което те вълнува.
				</p>
				<span class="svc-card__link">Научи повече →</span>
			</div>
		</a>
		<a href="/sabitiya" class="svc-card">
			<div class="svc-card__img svc-card__img--sabitiya"></div>
			<div class="svc-card__body">
				<h3 class="svc-card__title">Групи & уъркшопи</h3>
				<p class="svc-card__desc">
					Групови срещи, беседи и онлайн уебинари — присъедини се към общност от хора по пътя на
					себепознанието.
				</p>
				<span class="svc-card__link">Виж събитията →</span>
			</div>
		</a>
		<a href="/za-kristina" class="svc-card" id="za-kristina">
			<div class="svc-card__img svc-card__img--about"></div>
			<div class="svc-card__body">
				<h3 class="svc-card__title">За Кристина</h3>
				<p class="svc-card__desc">
					Ментор в себепознанието с над 20 години опит — Кристина помага на хората да открият повече
					свобода и вътрешен мир.
				</p>
				<span class="svc-card__link">Прочети повече →</span>
			</div>
		</a>
	</div>
</section>

<!-- ПУБЛИКАЦИИ -->
<section class="blog-section">
	<div class="blog-section__inner container">
		<div class="blog-section__header">
			<div>
				<p class="section-tag">Публикации</p>
				<h2>Размисли и<br /><em>споделяне</em></h2>
			</div>
			<a href="/publikacii" class="blog-section__all">Виж всички →</a>
		</div>
		<div class="blog-section__empty">
			<p>Скоро тук ще намериш статии и размисли от Кристина.</p>
			<a href="/publikacii" class="btn btn-outline">Публикации</a>
		</div>
	</div>
</section>

<!-- ОТЗИВИ -->
<section class="reviews-section">
	<div class="reviews-section__inner container">
		<div class="reviews-section__header">
			<p class="section-tag">Отзиви</p>
			<h2>Какво казват<br /><em>другите</em></h2>
		</div>
		<div class="reviews-track" bind:this={reviewsEl}>
			{#each reviews as r}
				<div class="review-card">
					<span class="review-card__mark">"</span>
					<p class="review-card__text">{r.text}</p>
					<p class="review-card__name">— {r.name}</p>
				</div>
			{/each}
		</div>
		<div class="reviews-section__footer">
			<button class="reviews-arrow" onclick={scrollReviews} aria-label="Следващ отзив">
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path d="M4.5 11h13M12 5l5.5 6L12 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</div>
	</div>
</section>

<style>
	/* ======= HERO ======= */
	.hero {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
	}

	.hero__img {
		position: absolute;
		inset: 0;
		/* Replace with: background-image: url('/photos/kristina.jpg'); background-size: cover; background-position: right center; */
		background: linear-gradient(135deg, #e0d4d8 0%, #c8a8b2 28%, #a07888 58%, #6b4a57 100%);
	}

	.hero__content {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: linear-gradient(
			to right,
			rgba(237, 234, 229, 0.97) 0%,
			rgba(237, 234, 229, 0.9) 30%,
			rgba(237, 234, 229, 0.5) 55%,
			rgba(237, 234, 229, 0) 72%
		);
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		padding: calc(var(--nav-h) + 80px) 80px 80px;
		max-width: 580px;
	}

	.hero__tag {
		margin-bottom: 22px;
	}

	.hero__heading {
		font-size: clamp(3.4rem, 5.5vw, 5.8rem);
		line-height: 1.08;
		margin-bottom: 28px;
		color: var(--text);
	}

	.hero__heading em {
		color: var(--secondary);
		font-style: italic;
	}

	.hero__actions {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}

	/* ======= QUOTE ======= */
	.quote-section {
		padding: 90px 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.quote-section__inner {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		max-width: 860px;
	}

	.quote-section__mark {
		font-family: var(--heading-font);
		font-size: 6rem;
		line-height: 0.7;
		color: var(--secondary);
		opacity: 0.35;
		flex-shrink: 0;
		margin-top: 8px;
	}

	.quote-section__text {
		font-family: var(--heading-font);
		font-size: clamp(1.35rem, 2.5vw, 1.85rem);
		font-style: italic;
		font-weight: 300;
		color: var(--text-muted);
		line-height: 1.55;
	}

	/* ======= 3 SERVICE CARDS ======= */
	.services {
		padding: 90px 0 100px;
	}

	.services__inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
		max-width: 1200px;
	}

	.svc-card {
		display: flex;
		flex-direction: column;
		background: var(--card-bg);
		border-radius: var(--radius);
		overflow: hidden;
		text-decoration: none;
		transition: transform 0.35s ease, box-shadow 0.35s ease;
		box-shadow: 0 2px 16px rgba(77, 39, 39, 0.07);
	}

	.svc-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 16px 48px rgba(77, 39, 39, 0.14);
	}

	.svc-card__img {
		width: 100%;
		aspect-ratio: 3 / 2;
		flex-shrink: 0;
	}

	.svc-card__img--sesii {
		background: linear-gradient(160deg, #d4bfc3 0%, #b8989f 50%, #9e7a84 100%);
	}
	.svc-card__img--sabitiya {
		background: linear-gradient(160deg, #bcc8d8 0%, #9aabbc 50%, #7d90a8 100%);
	}
	.svc-card__img--about {
		background: linear-gradient(160deg, #d0c0c4 0%, #b89098 50%, #a07880 100%);
	}

	.svc-card__body {
		padding: 28px 32px 36px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		flex: 1;
	}

	.svc-card__title {
		font-family: var(--heading-font);
		font-size: 1.9rem;
		font-weight: 400;
		color: var(--text);
		line-height: 1.15;
	}

	.svc-card__desc {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.85;
		flex: 1;
	}

	.svc-card__link {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-top: 4px;
		transition: opacity 0.2s;
	}

	.svc-card:hover .svc-card__link {
		opacity: 0.7;
	}

	/* ======= ПУБЛИКАЦИИ ======= */
	.blog-section {
		padding: 90px 0 100px;
		border-top: 1px solid var(--border);
		background: #e8e3dc;
	}

	.blog-section__inner {
		max-width: 1200px;
	}

	.blog-section__header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 52px;
	}

	.blog-section__header h2 {
		font-size: clamp(2.2rem, 3.8vw, 3.4rem);
		line-height: 1.1;
		margin-top: 14px;
	}

	.blog-section__header h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.blog-section__all {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary);
		padding-bottom: 8px;
		transition: opacity 0.2s;
	}

	.blog-section__all:hover {
		opacity: 0.7;
	}

	.blog-section__empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 64px 24px;
		gap: 24px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: var(--radius);
	}

	.blog-section__empty p {
		font-family: var(--heading-font);
		font-size: 1.3rem;
		font-style: italic;
		color: var(--text-muted);
	}

	/* ======= ОТЗИВИ ======= */
	.reviews-section {
		padding: 90px 0 100px;
		border-top: 1px solid var(--border);
	}

	.reviews-section__inner {
		max-width: 1200px;
	}

	.reviews-section__header {
		margin-bottom: 52px;
	}

	.reviews-section__header h2 {
		font-size: clamp(2.2rem, 3.8vw, 3.4rem);
		line-height: 1.1;
		margin-top: 14px;
	}

	.reviews-section__header h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.reviews-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.reviews-track::-webkit-scrollbar {
		display: none;
	}

	.review-card {
		background: var(--card-bg);
		border-radius: var(--radius);
		padding: 36px 32px 40px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		min-width: 280px;
	}

	.review-card__mark {
		font-family: var(--heading-font);
		font-size: 3.5rem;
		line-height: 0.6;
		color: var(--secondary);
		opacity: 0.3;
	}

	.review-card__text {
		font-family: var(--heading-font);
		font-size: 1.15rem;
		font-style: italic;
		color: var(--text);
		line-height: 1.6;
		flex: 1;
	}

	.review-card__name {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.reviews-section__footer {
		margin-top: 36px;
		display: flex;
		justify-content: flex-end;
	}

	.reviews-arrow {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--secondary);
		transition: background 0.25s ease, color 0.25s ease;
	}

	.reviews-arrow:hover {
		background: var(--secondary);
		color: #fff;
	}

	/* ======= RESPONSIVE ======= */
	@media (max-width: 900px) {
		.hero {
			display: flex;
			flex-direction: column;
			min-height: 0;
		}

		.hero__img {
			position: relative;
			inset: auto;
			height: 62vw;
			min-height: 240px;
			order: -1;
			flex-shrink: 0;
		}

		.hero__content {
			min-height: 0;
			background: none;
		}

		.hero__text {
			padding: 48px 24px 64px;
			max-width: 100%;
		}

		.services__inner {
			grid-template-columns: 1fr;
			max-width: 480px;
			margin: 0 auto;
		}

		.svc-card__img {
			aspect-ratio: 16 / 9;
		}

		.blog-section__header {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.reviews-track {
			grid-template-columns: repeat(3, minmax(260px, 1fr));
		}
	}

	@media (max-width: 640px) {
		.services__inner {
			max-width: 100%;
		}
	}
</style>
