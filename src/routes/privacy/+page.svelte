<svelte:head>
	<title>Поверителност — Кристина Дойчинова</title>
</svelte:head>

<section class="policy-hero">
	<div class="container">
		<h1>Политика за<br /><em>поверителност</em></h1>
	</div>
</section>

<section class="policy-body">
	<div class="policy-inner container">
		<div class="policy-content">
			<p class="policy-updated">Последна актуализация: 2026 г.</p>

			<h2>1. Кой събира данните</h2>
			<p>
				Личните данни се събират и обработват от Кристина Дойчинова (по-долу „Администратор") за
				целите на предоставяне на психотерапевтични услуги, обучения и организация на събития.
			</p>

			<h2>2. Какви данни събираме</h2>
			<p>При регистрация за събитие или изпращане на контактна форма събираме:</p>
			<ul>
				<li>Имe и фамилия</li>
				<li>Имейл адрес</li>
				<li>Телефонен номер</li>
				<li>Съобщение / допълнителна информация (по избор)</li>
			</ul>

			<h2>3. За какво използваме данните</h2>
			<p>Данните се използват единствено за:</p>
			<ul>
				<li>Потвърждаване на регистрации за събития</li>
				<li>Отговор на запитвания чрез контактната форма</li>
				<li>Изпращане на бюлетин (само при изрично съгласие)</li>
			</ul>

			<h2>4. Съхранение и сигурност</h2>
			<p>
				Данните не се споделят с трети страни без изричното ви съгласие. Съхраняваме ги за
				минималния срок, необходим за изпълнение на целта, за която са събрани.
			</p>

			<h2>5. Вашите права</h2>
			<p>Имате право на достъп, коригиране и изтриване на личните ви данни по всяко време. За
				въпроси, свързани с личните данни, се свържете с нас на:</p>
			<p><a href="mailto:contact@kristina-doychinova.bg">contact@kristina-doychinova.bg</a></p>
		</div>
	</div>
</section>

<style>
	.policy-hero {
		padding: calc(var(--nav-h) + 72px) 0 64px;
		border-bottom: 1px solid var(--border);
	}

	.policy-hero h1 {
		font-size: 5rem;
		line-height: 1.05;
	}

	.policy-hero h1 em {
		color: var(--secondary);
	}

	.policy-body {
		padding: 72px 0 100px;
	}

	.policy-inner {
		max-width: 1060px;
	}

	.policy-content {
		max-width: 680px;
	}

	.policy-updated {
		font-size: 0.78rem;
		color: var(--text-muted);
		letter-spacing: 0.06em;
		margin-bottom: 48px;
	}

	.policy-content h2 {
		font-family: var(--heading-font);
		font-size: 1.6rem;
		font-weight: 400;
		color: var(--text);
		margin-top: 44px;
		margin-bottom: 14px;
	}

	.policy-content p {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.95;
		margin-bottom: 14px;
	}

	.policy-content ul {
		padding-left: 20px;
		margin-bottom: 14px;
	}

	.policy-content li {
		font-size: 0.92rem;
		color: var(--text-muted);
		line-height: 1.95;
	}

	.policy-content a {
		color: var(--secondary);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	@media (max-width: 900px) {
		.policy-hero {
			padding: calc(var(--nav-h) + 40px) 0 48px;
		}

		.policy-hero h1 {
			font-size: 3.2rem;
		}
	}
</style>
