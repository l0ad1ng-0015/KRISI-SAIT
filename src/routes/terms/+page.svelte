<svelte:head>
	<title>Условия за ползване — Кристина Дойчинова</title>
</svelte:head>

<section class="policy-hero">
	<div class="container">
		<h1>Условия за<br /><em>ползване</em></h1>
	</div>
</section>

<section class="policy-body">
	<div class="policy-inner container">
		<div class="policy-content">
			<p class="policy-updated">Последна актуализация: 2026 г.</p>

			<h2>1. Приемане на условията</h2>
			<p>
				С използването на този уебсайт вие се съгласявате с настоящите Условия за ползване. Ако не
				сте съгласни с тях, моля, не използвайте сайта.
			</p>

			<h2>2. Съдържание на сайта</h2>
			<p>
				Цялото съдържание на сайта — текстове, изображения и структура — е собственост на Кристина
				Дойчинова и е защитено от авторско право. Не се разрешава копирането или разпространението
				без изрично писмено разрешение.
			</p>

			<h2>3. Услуги и записвания</h2>
			<p>
				Информацията на сайта е с информативен характер и не представлява медицинска или
				психиатрична консултация. Психотерапевтичните услуги се предоставят в рамките на
				индивидуални договорености между клиента и терапевта.
			</p>

			<h2>4. Отговорност</h2>
			<p>
				Администраторът на сайта не носи отговорност за вреди, произтекли от използването или
				невъзможността за използване на сайта, включително технически прекъсвания.
			</p>

			<h2>5. Промени в условията</h2>
			<p>
				Запазваме правото да актуализираме тези условия по всяко време. Промените влизат в сила
				от момента на публикуването им на тази страница.
			</p>

			<h2>6. Контакт</h2>
			<p>За въпроси относно условията за ползване:</p>
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
