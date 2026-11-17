<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Страницата не е намерена — Кристина Дойчинова</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="not-found">
	<div class="not-found__inner container">
		<p class="section-tag">Грешка {page.status}</p>

		{#if page.status === 404}
			<h1>Тази страница<br /><em>не съществува</em></h1>
			<p class="not-found__desc">
				Връзката, която последвахте, може да е остаряла или страницата е била преместена.
				Нищо лошо — да се върнем на позната територия.
			</p>
		{:else}
			<h1>Нещо<br /><em>се обърка</em></h1>
			<p class="not-found__desc">
				{page.error?.message || 'Възникна неочаквана грешка. Моля, опитайте отново.'}
			</p>
		{/if}

		<div class="not-found__actions">
			<a href="/" class="btn btn-primary">Към началото</a>
			<a href="/kontakti" class="btn btn-outline">Свържи се с Кристина</a>
		</div>
	</div>
</section>

<style>
	.not-found {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: calc(var(--nav-h) + 60px) 0 90px;
	}

	.not-found__inner {
		max-width: 620px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.not-found h1 {
		font-size: clamp(2.6rem, 5.5vw, 4.4rem);
		line-height: 1.1;
		margin-bottom: 26px;
	}

	.not-found h1 em {
		color: var(--secondary);
	}

	.not-found__desc {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.8;
		max-width: 460px;
		margin-bottom: 40px;
	}

	.not-found__actions {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 480px) {
		.not-found__actions {
			flex-direction: column;
			width: 100%;
		}

		.not-found__actions .btn {
			width: 100%;
		}
	}
</style>
