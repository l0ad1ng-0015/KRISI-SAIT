<!-- HERO -->
<section class="hero">
	<div class="hero__img" aria-hidden="true"></div>
	<div class="hero__content">
		<div class="hero__text">
			<p class="hero__tag section-tag">Психотерапевт</p>
			<h1 class="hero__heading">
				Кристина<br /><em>Дойчинова</em>
			</h1>
			<div class="hero__actions">
				<a href="/kontakti" class="btn btn-primary">Запиши сесия</a>
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>
	</div>
</section>

<!-- ЛИЧНИ СЕСИИ -->
<section class="split" id="lichni-sesii">
	<div class="split__text split__text--left">
		<h2>Лични<br /><em>сесии</em></h2>
		<p class="split__body">
			Индивидуалната сесия е пространство само за теб. Място, където можеш да говориш открито, да
			изследваш преживяванията си и да намериш нови пътища напред — в темпото, което е удобно за
			теб.
		</p>
		<a href="/lichni-sesii" class="btn btn-outline">Научи повече</a>
	</div>
	<div class="split__image" aria-hidden="true">
		<div
			class="img-ph"
			style="background: linear-gradient(150deg, #d4bfc3 0%, #b8989f 50%, #9e7a84 100%);"
		></div>
	</div>
</section>

<!-- ОБУЧЕНИЯ -->
<section class="split split--alt" id="obucheniya">
	<div class="split__image" aria-hidden="true">
		<div
			class="img-ph"
			style="background: linear-gradient(150deg, #cec8c0 0%, #b0a89e 50%, #958d83 100%);"
		></div>
	</div>
	<div class="split__text split__text--right">
		<h2>Обучения &<br /><em>семинари</em></h2>
		<p class="split__body">
			Специализирани обучения за специалисти и всички, желаещи да задълбочат познанията си в
			областта на психологията, себепознанието и личностното развитие.
		</p>
		<a href="/obucheniya" class="btn btn-outline">Виж обученията</a>
	</div>
</section>

<!-- СЪБИТИЯ -->
<section class="split" id="sabitiya">
	<div class="split__text split__text--left">
		<h2>Групи &<br /><em>уъркшопи</em></h2>
		<p class="split__body">
			Групови срещи, открити лекции и уъркшопи — присъедини се към общност от хора, вървящи по
			пътя на себепознанието и личностното израстване.
		</p>
		<a href="/sabitiya" class="btn btn-outline">Виж събитията</a>
	</div>
	<div class="split__image" aria-hidden="true">
		<div
			class="img-ph"
			style="background: linear-gradient(150deg, #bcc8d8 0%, #9aabbc 50%, #7d90a8 100%);"
		></div>
	</div>
</section>

<!-- ЗА КРИСТИНА -->
<section class="about" id="za-kristina">
	<div class="about__image" aria-hidden="true">
		<div
			class="img-ph"
			style="background: linear-gradient(150deg, #d0c0c4 0%, #b89098 50%, #a07880 100%);"
		></div>
	</div>
	<div class="about__text">
		<h2>Кристина<br /><em>Дойчинова</em></h2>
		<p class="about__body">
			Кристина Дойчинова е лицензиран психотерапевт с дългогодишна практика в индивидуална терапия,
			обучения и групова работа. Нейният подход е топъл, внимателен и ориентиран към реалните нужди
			на всеки човек — независимо дали търсиш подкрепа в труден момент или искаш да разбереш себе си
			по-добре.
		</p>
		<a href="/za-kristina" class="btn btn-outline">Прочети повече</a>
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

	.hero__desc {
		font-size: 1rem;
		color: var(--text-muted);
		max-width: 400px;
		margin-bottom: 44px;
		line-height: 1.85;
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

	/* ======= SPLIT SECTIONS ======= */
	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 72vh;
	}

	.split--alt {
		background: #e8e3dc;
	}

	.split__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--section-v) 72px;
		width: 100%;
	}

	.split__text--left {
		max-width: 620px;
		justify-self: end;
		padding-right: 80px;
	}

	.split__text--right {
		max-width: 620px;
		justify-self: start;
		padding-left: 80px;
	}

	.split__text h2 {
		font-size: clamp(2.2rem, 3.8vw, 3.6rem);
		margin-bottom: 22px;
		line-height: 1.1;
	}

	.split__text h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.split__body {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.9;
		margin-bottom: 38px;
		max-width: 420px;
	}

	.split__image {
		overflow: hidden;
	}

	.split__image .img-ph {
		width: 100%;
		height: 100%;
		min-height: 500px;
	}

	/* ======= ABOUT ======= */
	.about {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 80vh;
		background: #e3ddd6;
	}

	.about__image {
		overflow: hidden;
	}

	.about__image .img-ph {
		width: 100%;
		height: 100%;
		min-height: 540px;
	}

	.about__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--section-v) 80px;
		max-width: 640px;
		width: 100%;
	}

	.about__text h2 {
		font-size: clamp(2.2rem, 3.8vw, 3.6rem);
		margin-bottom: 22px;
		line-height: 1.1;
	}

	.about__text h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.about__body {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.9;
		margin-bottom: 38px;
		max-width: 440px;
	}

	/* ======= RESPONSIVE ======= */
	@media (max-width: 900px) {
		/* Hero — stacked on mobile */
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

		.quote-section {
			padding: 56px 0;
		}

		.quote-section__mark {
			font-size: 4rem;
		}

		.split,
		.about {
			grid-template-columns: 1fr;
		}

		.split__image .img-ph,
		.about__image .img-ph {
			min-height: 280px;
			height: 70vw;
		}

		.split__text,
		.split__text--left,
		.split__text--right {
			padding: 52px 24px;
			max-width: 100%;
			justify-self: stretch;
		}

		.about__text {
			padding: 52px 24px;
			max-width: 100%;
		}

		.split__image {
			order: -1;
		}

		.about__image {
			order: -1;
		}
	}
</style>
