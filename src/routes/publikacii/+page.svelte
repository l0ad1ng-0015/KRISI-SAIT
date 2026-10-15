<script>
	// Add new publications here. Each gets its own cover color and title.
	// coverColor: any CSS color value for the book cover background.
	const publications = [
		// Example — replace with real article when ready:
		// {
		//   title: 'Заглавие на статията',
		//   author: 'Кристина Дойчинова',
		//   coverColor: '#c4a8b0',
		//   href: '/publikacii/zaglavie-na-statiyata'
		// }
	];
</script>

<svelte:head>
	<title>Публикации — Кристина Дойчинова | Ментор</title>
	<meta
		name="description"
		content="Статии и публикации от Кристина Дойчинова — ментор в себепознанието. Размисли за вътрешния мир, автентичността и психо-емоционалните динамики."
	/>
	<meta property="og:title" content="Публикации — Кристина Дойчинова" />
	<meta
		property="og:description"
		content="Статии и публикации от Кристина Дойчинова — ментор в себепознанието. Размисли за вътрешния мир, автентичността и психо-емоционалните динамики."
	/>
	<meta property="og:url" content="https://kristinadoychinova.com/publikacii" />
</svelte:head>

<!-- PAGE HERO -->
<section class="page-hero">
	<div class="page-hero__inner container">
		<h1>Публи<em>кации</em></h1>
		<div class="page-hero__divider" aria-hidden="true"></div>
		<p class="page-hero__desc">
			Размисли, наблюдения и знание — споделено в писмена форма.
		</p>
	</div>
</section>

<!-- GRID -->
<section class="grid-section">
	<div class="grid-section__inner container">
		{#if publications.length === 0}
			<div class="empty">
				<p class="empty__label">Скоро</p>
				<p class="empty__text">Публикациите предстоят. Абонирай се за бюлетина, за да бъдеш първи/а информиран/а.</p>
			</div>
		{:else}
			<div class="pub-grid">
				{#each publications as pub}
					<a href={pub.href} class="pub-card">
						<div class="pub-card__cover" style="background: {pub.coverColor};">
							<p class="pub-card__title">{pub.title}</p>
						</div>
						<div class="pub-card__meta">
							<span class="pub-card__author">{pub.author}</span>
						</div>
					</a>
				{/each}
			</div>
		{/if}
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
		max-width: 760px;
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
		font-style: italic;
	}

	.page-hero__divider {
		width: 52px;
		height: 1px;
		background: var(--secondary);
		opacity: 0.35;
		margin-bottom: 36px;
	}

	.page-hero__desc {
		font-family: var(--heading-font);
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		font-style: italic;
		color: var(--text-muted);
		line-height: 1.65;
		max-width: 480px;
	}

	/* GRID */
	.grid-section {
		padding: 80px 0 120px;
	}

	.grid-section__inner {
		max-width: 1060px;
	}

	/* EMPTY STATE */
	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 80px 24px;
		gap: 16px;
	}

	.empty__label {
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--secondary);
	}

	.empty__text {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.85;
		max-width: 400px;
	}

	/* PUBLICATION GRID */
	.pub-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
	}

	.pub-card {
		display: flex;
		flex-direction: column;
		gap: 0;
		text-decoration: none;
		transition: transform 0.3s ease;
	}

	.pub-card:hover {
		transform: translateY(-4px);
	}

	/* Book cover */
	.pub-card__cover {
		aspect-ratio: 3 / 4;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 36px 28px;
		position: relative;
		overflow: hidden;
	}

	.pub-card__cover::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 60%);
		pointer-events: none;
	}

	.pub-card__title {
		font-family: var(--heading-font);
		font-size: clamp(1.4rem, 2vw, 1.8rem);
		font-weight: 400;
		font-style: italic;
		color: rgba(42, 37, 36, 0.85);
		text-align: center;
		line-height: 1.35;
		position: relative;
		z-index: 1;
	}

	/* Meta below cover */
	.pub-card__meta {
		padding: 16px 4px 0;
		border-top: 1px solid var(--border);
		margin-top: 0;
	}

	.pub-card__author {
		font-size: 0.68rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.page-hero {
			padding: calc(var(--nav-h) + 48px) 0 64px;
		}

		.pub-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 24px;
		}
	}

	@media (max-width: 560px) {
		.pub-grid {
			grid-template-columns: 1fr 1fr;
			gap: 16px;
		}
	}
</style>
