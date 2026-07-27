<script>
	const programs = [
		{
			num: '01',
			title: 'Ендогенен подход',
			subtitle: 'Работа с вътрешните ресурси',
			desc: 'Методология, която активира естествените лечебни механизми на психиката. Ендогенният подход работи с вродените способности на човека за себерегулация, изследвайки как да се мобилизират ресурсите отвътре — без налагане на外ни модели.',
			gradient: 'linear-gradient(150deg, #c8bdc2 0%, #a89098 50%, #8a6e76 100%)'
		},
		{
			num: '02',
			title: 'Съзидателна хипнотерапия',
			subtitle: 'Хипноза за личностна промяна',
			desc: 'Интегративен подход, съчетаващ хипнотични техники с терапевтичен разговор. Съзидателната хипнотерапия използва естественото състояние на транс, за да достигне до по-дълбоките пластове на психиката и да инициира трайна и устойчива промяна.',
			gradient: 'linear-gradient(150deg, #bdc5cc 0%, #96a4ae 50%, #738290 100%)'
		},
		{
			num: '03',
			title: 'ТЕО',
			subtitle: 'Трансформиране на Емоционални Отпечатъци',
			desc: 'Специализирана методология за работа с емоционални следи от миналото. ТЕО идентифицира и трансформира дълбоко вкоренени емоционални отпечатъци, оставени от значими преживявания, и им помага да бъдат интегрирани по нов, ресурсен начин.',
			gradient: 'linear-gradient(150deg, #ccc0b8 0%, #b0a098 50%, #947e78 100%)'
		},
		{
			num: '04',
			title: 'ДИ-С',
			subtitle: 'Дисоциативно интегративна стратегия',
			desc: 'Терапевтична стратегия, работеща с дисоциативни процеси и тяхната интеграция. ДИ-С предлага структуриран подход за работа с части на личността, спомени и преживявания, които са отцепени или трудно достъпни за съзнанието.',
			gradient: 'linear-gradient(150deg, #c2c8bc 0%, #a0aa98 50%, #808e78 100%)'
		},
		{
			num: '05',
			title: 'Рехроновизия',
			subtitle: 'Реорганизация на времевата перспектива',
			desc: 'Иновативна техника за работа с времевата перспектива и жизнената история. Рехроновизия помага на човека да преосмисли и реорганизира отношението си към миналото, настоящето и бъдещето — създавайки нов, по-ресурсен разказ за себе си.',
			gradient: 'linear-gradient(150deg, #c4bcc8 0%, #a098b0 50%, #7e7894 100%)'
		}
	];
</script>

<svelte:head>
	<title>Обучения & Семинари — Кристина Дойчинова</title>
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<h1>Обучения &<br /><em>семинари</em></h1>
		<div class="page-hero__divider" aria-hidden="true"></div>
		<p class="page-hero__quote">"Знанието, което се превръща в умение, е истинската промяна."</p>
		<div class="page-hero__meta">
			<span>05 програми</span>
			<span class="page-hero__dot"></span>
			<span>Теория & практика</span>
			<span class="page-hero__dot"></span>
			<span>Сертифицирано</span>
		</div>
	</div>
</section>

<!-- PROGRAMS LIST -->
<section class="programs">
	<div class="programs__inner container">
		{#each programs as program, i}
			<article class="program">
				<div class="program__media">
					<div class="program__img" style="background: {program.gradient};"></div>
					<span class="program__num">{program.num}</span>
				</div>
				<div class="program__body">
					<p class="program__subtitle">{program.subtitle}</p>
					<h2 class="program__title">{program.title}</h2>
					<p class="program__desc">{program.desc}</p>
					<a href="/kontakti" class="btn btn-outline">Запитване</a>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="cta-band">
	<div class="cta-band__inner container">
		<p class="section-tag">Следваща стъпка</p>
		<h2>Интересуваш ли се от<br /><em>обучение?</em></h2>
		<p>Свържи се с Кристина за повече информация относно програмите, датите и условията за участие.</p>
		<a href="/kontakti" class="btn btn-primary">Свържи се с Кристина</a>
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
		font-size: clamp(3.6rem, 7.5vw, 6.6rem);
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
		font-size: clamp(1.05rem, 2vw, 1.4rem);
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

	/* PROGRAMS */
	.programs {
		padding: 80px 0 100px;
	}

	.programs__inner {
		max-width: 1060px;
		display: flex;
		flex-direction: column;
		gap: 1px;
		border: 1px solid var(--border);
	}

	.program {
		display: grid;
		grid-template-columns: 380px 1fr;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
		transition: box-shadow 0.3s ease;
	}

	.program:last-child {
		border-bottom: none;
	}

	.program:hover {
		box-shadow: 0 8px 40px rgba(92, 60, 70, 0.1);
		z-index: 1;
		position: relative;
	}

	.program__media {
		position: relative;
		overflow: hidden;
		min-height: 300px;
	}

	.program__img {
		position: absolute;
		inset: 0;
		transition: transform 0.6s ease;
	}

	.program:hover .program__img {
		transform: scale(1.04);
	}

	.program__num {
		position: absolute;
		top: 20px;
		left: 24px;
		font-family: var(--heading-font);
		font-size: 1.4rem;
		font-style: italic;
		color: #fff;
		opacity: 0.8;
		text-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
	}

	.program__body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 52px 64px;
	}

	.program__subtitle {
		font-size: 0.7rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 12px;
	}

	.program__title {
		font-family: var(--heading-font);
		font-size: clamp(1.9rem, 2.8vw, 2.8rem);
		font-weight: 400;
		line-height: 1.1;
		color: var(--text);
		margin-bottom: 20px;
	}

	.program__desc {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.95;
		max-width: 500px;
		margin-bottom: 36px;
	}

	/* CTA */
	.cta-band {
		background: #e3ddd6;
		padding: 100px 0;
		text-align: center;
		border-top: 1px solid var(--border);
	}

	.cta-band__inner {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.cta-band h2 {
		font-size: clamp(2rem, 3.8vw, 3.2rem);
		line-height: 1.15;
	}

	.cta-band h2 em {
		color: var(--secondary);
	}

	.cta-band p {
		font-size: 0.92rem;
		color: var(--text-muted);
		max-width: 460px;
		line-height: 1.85;
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.page-hero {
			padding: calc(var(--nav-h) + 48px) 0 64px;
		}

		.programs {
			padding: 52px 0 72px;
		}

		.programs__inner {
			border: none;
			gap: 24px;
		}

		.program {
			grid-template-columns: 1fr;
			border: 1px solid var(--border);
		}

		.program__media {
			min-height: 56vw;
			height: 56vw;
		}

		.program__body {
			padding: 36px 28px 40px;
		}
	}

	@media (max-width: 600px) {
		.program__body {
			padding: 28px 20px 32px;
		}
	}
</style>
