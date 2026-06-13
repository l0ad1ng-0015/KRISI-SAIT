<script>
	const sessions = [
		{
			slug: 'lichna-sesiya',
			title: 'Лична сесия',
			subtitle: 'Присъствено',
			desc: 'Индивидуална работа лице в лице в топла, поверителна обстановка. Пространство само за теб — без осъждане, без бързане.',
			gradient: 'linear-gradient(150deg, #d4bfc3 0%, #b8989f 50%, #9e7a84 100%)'
		},
		{
			slug: 'online-sesiya',
			title: 'Онлайн сесия',
			subtitle: 'Видеовръзка',
			desc: 'Пълноценна терапевтична работа от удобството на твоя дом. Гъвкавост без компромис с качеството на присъствие.',
			gradient: 'linear-gradient(150deg, #cec8c0 0%, #b0a89e 50%, #958d83 100%)'
		},
		{
			slug: 'integrativna-sesiya',
			title: 'Интегративна сесия',
			subtitle: 'Комбиниран подход',
			desc: 'Съчетание от различни терапевтични методи, адаптирани специално към твоите нужди. Не един метод — а онова, което работи за теб.',
			gradient: 'linear-gradient(150deg, #bcc8d8 0%, #9aabbc 50%, #7d90a8 100%)'
		}
	];
</script>

<svelte:head>
	<title>Лични сесии — Кристина Дойчинова</title>
</svelte:head>

<!-- CLIENT DEMO LABEL -->
<div class="demo-label" style="background: var(--secondary);">
	⬡ Версия Б — Карти с под-страници &nbsp;|&nbsp; <a
		href="/lichni-sesii-t"
		style="color:#fff; text-decoration:underline;">← Виж Версия А</a
	>
</div>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<nav class="breadcrumb">
			<a href="/">Начало</a>
			<span>·</span>
			<span>Лични сесии</span>
		</nav>
		<h1>Лични<br /><em>сесии</em></h1>
		<p class="page-hero__desc">
			Избери формата, който е най-подходящ за теб и твоите нужди в момента.
		</p>
	</div>
</section>

<!-- SESSION CARDS -->
{#each sessions as session, i}
	<article class="card" class:card--alt={i % 2 !== 0}>
		<div class="card__image" aria-hidden="true">
			<div class="card__img-ph" style="background: {session.gradient};"></div>
		</div>
		<div class="card__text">
			<p class="section-tag">{String(i + 1).padStart(2, '0')} — {session.subtitle}</p>
			<h2>{session.title}</h2>
			<p class="card__desc">{session.desc}</p>
			<a href="/lichni-sesii-alt/{session.slug}" class="btn btn-outline">Виж повече</a>
		</div>
	</article>
{/each}

<!-- BOTTOM CTA -->
<section class="cta-band">
	<div class="cta-band__inner container">
		<p class="section-tag">Първа стъпка</p>
		<h2>Готов/а си да<br /><em>започнем?</em></h2>
		<p>Свържи се с мен — първият разговор е безплатен и без ангажимент.</p>
		<a href="/kontakti" class="btn btn-primary">Свържи се с мен</a>
	</div>
</section>

<style>
	/* DEMO LABEL */
	.demo-label {
		color: #fff;
		text-align: center;
		padding: 9px 16px;
		font-family: var(--body-font);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-top: var(--nav-h);
	}

	/* PAGE HERO */
	.page-hero {
		padding: 72px 0 88px;
		border-bottom: 1px solid var(--border);
	}

	.page-hero__inner {
		max-width: 900px;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.78rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
		margin-bottom: 40px;
	}

	.breadcrumb a {
		color: var(--text-muted);
		transition: color 0.2s;
	}
	.breadcrumb a:hover {
		color: var(--secondary);
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
	}

	/* SESSION CARDS */
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 68vh;
		border-top: 1px solid var(--border);
	}

	.card--alt {
		background: #e8e3dc;
	}

	.card--alt .card__image {
		order: 1;
	}

	.card--alt .card__text {
		order: 0;
	}

	.card__image {
		overflow: hidden;
	}

	.card__img-ph {
		width: 100%;
		height: 100%;
		min-height: 420px;
		transition: transform 0.6s ease;
	}

	.card:hover .card__img-ph {
		transform: scale(1.03);
	}

	.card__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 80px 80px;
		max-width: 580px;
		width: 100%;
	}

	.card:not(.card--alt) .card__text {
		justify-self: start;
	}

	.card--alt .card__text {
		justify-self: end;
	}

	.card__text h2 {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
		margin-bottom: 20px;
		line-height: 1.1;
	}

	.card__desc {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.9;
		margin-bottom: 36px;
		max-width: 400px;
	}

	/* BOTTOM CTA */
	.cta-band {
		background: #e3ddd6;
		padding: 100px 0;
		text-align: center;
		border-top: 1px solid var(--border);
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
		font-style: italic;
	}

	.cta-band p {
		font-size: 0.95rem;
		color: var(--text-muted);
		max-width: 400px;
		line-height: 1.8;
	}

	/* MOBILE */
	@media (max-width: 900px) {
		.card {
			grid-template-columns: 1fr;
		}

		.card--alt .card__image,
		.card--alt .card__text {
			order: unset;
		}

		.card__image {
			order: -1;
		}

		.card__img-ph {
			min-height: 280px;
			height: 65vw;
		}

		.card__text,
		.card:not(.card--alt) .card__text,
		.card--alt .card__text {
			padding: 52px 24px;
			max-width: 100%;
			justify-self: stretch;
		}
	}
</style>
