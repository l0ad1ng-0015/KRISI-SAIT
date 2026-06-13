<svelte:head>
	<title>Лична сесия — Кристина Дойчинова</title>
</svelte:head>

<!-- PAGE HERO -->
<section class="detail-hero">
	<div class="detail-hero__image" aria-hidden="true"></div>
	<div class="detail-hero__text">
		<nav class="breadcrumb">
			<a href="/">Начало</a>
			<span>·</span>
			<a href="/lichni-sesii-alt">Лични сесии</a>
			<span>·</span>
			<span>Лична сесия</span>
		</nav>
		<p class="section-tag">01 — Присъствено</p>
		<h1>Лична<br /><em>сесия</em></h1>
	</div>
</section>

<!-- CONTENT -->
<section class="detail-body">
	<div class="detail-body__inner container">
		<div class="detail-body__lead">
			<p>
				Индивидуалната лична сесия е основата на терапевтичната работа — пространство само за теб,
				изградено върху доверие, поверителност и искрено присъствие.
			</p>
		</div>

		<div class="detail-body__grid">
			<div class="detail-body__main">
				<h2>Как протича<br /><em>сесията?</em></h2>
				<p>
					Всяка сесия трае 50 минути и се провежда присъствено в уютен и поверителен кабинет.
					Темпото и посоката на работа се определят от теб — аз само следвам и подкрепям.
				</p>
				<p>
					Можем да работим с конкретен проблем или трудност, да изследваме повтарящи се модели на
					поведение, да се справяме с тревожност, загуба, промяна или просто с усещането, че нещо
					не е наред — дори и да не знаеш точно какво.
				</p>

				<h2>За кого е<br /><em>подходяща?</em></h2>
				<p>
					Личната сесия е подходяща за всеки, който търси пространство за себе си. Не трябва да си
					в криза, за да потърсиш помощ — понякога просто имаш нужда от някой, който да те чуе.
				</p>

				<div class="detail-body__info-row">
					<div class="info-chip">
						<span class="info-chip__label">Продължителност</span>
						<span class="info-chip__val">50 минути</span>
					</div>
					<div class="info-chip">
						<span class="info-chip__label">Формат</span>
						<span class="info-chip__val">Присъствено</span>
					</div>
					<div class="info-chip">
						<span class="info-chip__label">Честота</span>
						<span class="info-chip__val">Веднъж седмично</span>
					</div>
				</div>

				<a href="/kontakti" class="btn btn-primary">Запиши сесия</a>
			</div>

			<aside class="detail-body__side">
				<div
					class="detail-body__img"
					style="background: linear-gradient(150deg, #d4bfc3 0%, #b8989f 50%, #9e7a84 100%);"
				></div>
				<div class="detail-body__quote">
					<p>"Терапията не е за слаби. Тя е за смелите."</p>
				</div>
			</aside>
		</div>
	</div>
</section>

<!-- OTHER SESSIONS -->
<section class="other-sessions">
	<div class="other-sessions__inner container">
		<p class="section-tag">Виж също</p>
		<h2>Други <em>формати</em></h2>
		<div class="other-sessions__cards">
			<a href="/lichni-sesii-alt/online-sesiya" class="other-card">
				<div
					class="other-card__img"
					style="background: linear-gradient(150deg, #cec8c0 0%, #b0a89e 50%, #958d83 100%);"
				></div>
				<div class="other-card__text">
					<p class="section-tag">02 — Видеовръзка</p>
					<h3>Онлайн сесия</h3>
					<span class="other-card__link">Виж повече →</span>
				</div>
			</a>
			<a href="/lichni-sesii-alt/integrativna-sesiya" class="other-card">
				<div
					class="other-card__img"
					style="background: linear-gradient(150deg, #bcc8d8 0%, #9aabbc 50%, #7d90a8 100%);"
				></div>
				<div class="other-card__text">
					<p class="section-tag">03 — Комбиниран подход</p>
					<h3>Интегративна сесия</h3>
					<span class="other-card__link">Виж повече →</span>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	/* HERO */
	.detail-hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 80vh;
	}

	.detail-hero__image {
		background: linear-gradient(160deg, #d8c8cb 0%, #c4a8b0 35%, #a88894 65%, #8e6a76 100%);
		min-height: 80vh;
	}

	.detail-hero__text {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: calc(var(--nav-h) + 40px) 80px 80px 80px;
		max-width: 580px;
		width: 100%;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.76rem;
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

	.detail-hero h1 {
		font-size: clamp(3.2rem, 5.5vw, 5.5rem);
		line-height: 1.08;
		margin-top: 16px;
	}

	.detail-hero h1 em {
		color: var(--secondary);
		font-style: italic;
	}

	/* CONTENT BODY */
	.detail-body {
		padding: 100px 0;
	}

	.detail-body__lead {
		max-width: 720px;
		margin-bottom: 72px;
		padding-bottom: 56px;
		border-bottom: 1px solid var(--border);
	}

	.detail-body__lead p {
		font-family: var(--heading-font);
		font-size: clamp(1.3rem, 2.5vw, 1.8rem);
		font-style: italic;
		font-weight: 300;
		color: var(--text-muted);
		line-height: 1.55;
	}

	.detail-body__grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: 80px;
		align-items: start;
	}

	.detail-body__main h2 {
		font-size: clamp(1.8rem, 3vw, 2.8rem);
		margin-bottom: 20px;
		margin-top: 52px;
		line-height: 1.1;
	}

	.detail-body__main h2:first-child {
		margin-top: 0;
	}

	.detail-body__main h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.detail-body__main p {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.95;
		margin-bottom: 20px;
		max-width: 560px;
	}

	.detail-body__info-row {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		margin: 40px 0;
	}

	.info-chip {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px 20px;
		border: 1px solid var(--border);
		min-width: 140px;
	}

	.info-chip__label {
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.info-chip__val {
		font-family: var(--heading-font);
		font-size: 1.05rem;
		color: var(--text);
	}

	.detail-body__side {
		position: sticky;
		top: calc(var(--nav-h) + 40px);
	}

	.detail-body__img {
		width: 100%;
		aspect-ratio: 3/4;
		border-radius: 1px;
		margin-bottom: 28px;
	}

	.detail-body__quote {
		padding: 24px 28px;
		border-left: 2px solid var(--secondary);
	}

	.detail-body__quote p {
		font-family: var(--heading-font);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--text-muted);
		line-height: 1.5;
	}

	/* OTHER SESSIONS */
	.other-sessions {
		background: #e8e3dc;
		padding: 90px 0;
		border-top: 1px solid var(--border);
	}

	.other-sessions__inner {
		max-width: 1000px;
	}

	.other-sessions h2 {
		font-size: clamp(2rem, 3.5vw, 3rem);
		margin-bottom: 48px;
		line-height: 1.1;
	}

	.other-sessions h2 em {
		color: var(--secondary);
		font-style: italic;
	}

	.other-sessions__cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}

	.other-card {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		background: var(--bg);
	}

	.other-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.other-card__img {
		width: 100%;
		aspect-ratio: 16/9;
		transition: transform 0.5s ease;
	}

	.other-card:hover .other-card__img {
		transform: scale(1.04);
	}

	.other-card__text {
		padding: 28px 32px 32px;
	}

	.other-card__text h3 {
		font-family: var(--heading-font);
		font-size: 1.6rem;
		margin: 8px 0 16px;
	}

	.other-card__link {
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary);
	}

	/* MOBILE */
	@media (max-width: 900px) {
		.detail-hero {
			grid-template-columns: 1fr;
		}

		.detail-hero__image {
			min-height: 55vw;
			height: 55vw;
		}

		.detail-hero__text {
			padding: 48px 24px 56px;
			max-width: 100%;
			justify-content: flex-start;
		}

		.detail-body__grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}

		.detail-body__side {
			position: static;
			order: -1;
		}

		.other-sessions__cards {
			grid-template-columns: 1fr;
		}
	}
</style>
