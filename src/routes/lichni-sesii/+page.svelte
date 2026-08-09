<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let openIndex = $state(0);

	const toggle = (i) => {
		openIndex = openIndex === i ? null : i;
	};

	const sessions = [
		{
			title: 'Лична сесия',
			format: 'Присъствено · 50 мин',
			teaser: 'Сесии в уютното терапевтично пространство на Център InnerSelf.++',
			desc: 'Присъствените срещи дават възможност за личен контакт в среда, изградена специално за целите на личните процеси. Пространство с много уют, където човек може да изостави за момент външния свят и да се отдаде напълно на себе си във възстановителна почивка, себеизследване и душевно лечение.',
			points: ['Поверителна среда', 'Лице в лице', 'Гъвкаво темпо'],
			gradient: 'linear-gradient(150deg, #d4bfc3 0%, #b8989f 50%, #9e7a84 100%)'
		},
		{
			title: 'Онлайн сесия',
			format: 'Видеовръзка · 50 мин',
			teaser: 'Пълноценна терапевтична работа независимо от разстоянието.',
			desc: 'Най-важната стъпка към промяната е човек да направи време за себе си. Онлайн сесиите са възможност да получите професионална подкрепа в спокойствието и комфорта на вашето пространство. Те предлагат същото внимание и ефективност, както срещите на живо, но ви осигуряват гъвкавост и удобство.',
			points: ['От всяко място', 'Защитена връзка', 'Същото качество'],
			gradient: 'linear-gradient(150deg, #cec8c0 0%, #b0a89e 50%, #958d83 100%)'
		},
		{
			title: 'Медитативна сесия',
			format: 'Осъзнатост · 50 мин',
			teaser: 'Онлайн сесии, в които основен фокус е вътрешният мир, любов и щастие.',
			desc: 'Сесиите включват разговор и водена медитация. В тях изследваме вътрешното пространство и връзката с дълбоката същност на нашето същество. Те предлагат една напълно нова житейска парадигма, която преминава границите на обусловеността.',
			points: ['Осъзнатост', 'Работа с тялото', 'Вътрешен покой'],
			gradient: 'linear-gradient(150deg, #bcc8d8 0%, #9aabbc 50%, #7d90a8 100%)'
		}
	];
</script>

<svelte:head>
	<title>Лични сесии — Кристина Дойчинова</title>
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<h1>Лични<br /><em>сесии</em></h1>
		<div class="page-hero__divider" aria-hidden="true"></div>
		<p class="page-hero__quote">"Пространство, в което можеш да бъдеш себе си."</p>
		<div class="page-hero__meta">
			<span>03 формата</span>
			<span class="page-hero__dot"></span>
			<span>50 мин</span>
			<span class="page-hero__dot"></span>
			<span>Поверително</span>
		</div>
	</div>
</section>

<!-- VISUAL ACCORDION -->
<section class="sessions">
	<div class="sessions__inner container">
		{#each sessions as session, i}
			<article class="session" class:session--open={openIndex === i}>
				<div class="session__media">
					<div class="session__img" style="background: {session.gradient};"></div>
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
							<p class="session__desc">{session.desc}</p>
							<ul class="session__points">
								{#each session.points as point}
									<li>{point}</li>
								{/each}
							</ul>
							<a href="/kontakti" class="btn btn-primary">Запиши своята сесия</a>
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
		<p>Свържи се с Кристина — първият разговор е безплатен и без ангажимент.</p>
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
		background: var(--bg);
		border: 1px solid var(--border);
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

	.session__desc {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.95;
		max-width: 560px;
		padding-top: 4px;
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
