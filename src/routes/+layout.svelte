<script>
	import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	let subEmail = $state('');
	let subStatus = $state(''); // '' | 'loading' | 'success' | 'error'
	let subError = $state('');

	const subscribe = async (e) => {
		e.preventDefault();
		if (!subEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail)) {
			subStatus = 'error';
			subError = 'Въведи валиден имейл.';
			return;
		}
		subStatus = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: subEmail })
			});
			const data = await res.json();
			if (data.success) {
				subStatus = 'success';
				subEmail = '';
			} else {
				subStatus = 'error';
				subError = data.error || 'Грешка. Опитай отново.';
			}
		} catch {
			subStatus = 'error';
			subError = 'Грешка. Опитай отново.';
		}
	};

	const links = [
		{ href: '/', label: 'Начало' },
		{ href: '/lichni-sesii', label: 'Лични сесии' },
		{ href: '/obucheniya', label: 'Обучения' },
		{ href: '/sabitiya', label: 'Събития' },
		{ href: '/za-kristina', label: 'За Кристина' },
		{ href: '/kontakti', label: 'Контакти' }
	];

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Кристина Дойчинова — Психотерапевт</title>
	<meta
		name="description"
		content="Индивидуална психотерапия, обучения и групова работа с Кристина Дойчинова."
	/>
</svelte:head>

<header class="nav" class:nav--scrolled={scrolled}>
	<div class="nav__inner container">
		<a href="/" class="nav__logo">КД</a>

		<nav class="nav__links" class:nav__links--open={mobileOpen}>
			{#each links as { href, label }}
				<a
					{href}
					class="nav__link"
					class:nav__link--active={page.url.pathname === href}
					onclick={() => (mobileOpen = false)}>{label}</a
				>
			{/each}
		</nav>

		<button
			class="nav__burger"
			class:nav__burger--open={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Меню"
		>
			<span></span><span></span><span></span>
		</button>
	</div>
</header>

<main>{@render children()}</main>

<footer class="footer">
	<div class="footer__inner container">
		<div class="footer__top">
			<div class="footer__brand">
				<span class="footer__logo">КД</span>
				<p class="footer__tagline">
					Кристина Дойчинова<br /><em>Психотерапевт</em>
				</p>
			</div>

			<nav class="footer__nav">
				{#each links as { href, label }}
					<a {href} class="footer__link">{label}</a>
				{/each}
			</nav>

			<div class="footer__newsletter">
				<p class="section-tag" style="color: rgba(237,234,229,0.5);">Бюлетин</p>
				<p class="footer__newsletter-text">Абонирай се за новини, статии и предстоящи събития.</p>
				{#if subStatus === 'success'}
					<p class="footer__sub-ok">Благодаря! Провери имейла си за потвърждение.</p>
				{:else}
					<form class="footer__form" onsubmit={subscribe}>
						<input
							type="email"
							placeholder="твоят@имейл.com"
							class="footer__input"
							bind:value={subEmail}
							oninput={() => (subStatus = '')}
							disabled={subStatus === 'loading'}
						/>
						<button type="submit" class="btn btn-primary" disabled={subStatus === 'loading'}>
							{subStatus === 'loading' ? '...' : 'Абонирай се'}
						</button>
					</form>
					{#if subStatus === 'error'}
						<p class="footer__sub-err">{subError}</p>
					{/if}
				{/if}
			</div>
		</div>

		<div class="footer__bottom">
			<p>© {new Date().getFullYear()} Кристина Дойчинова. Всички права запазени.</p>
			<div class="footer__legal">
				<a href="/privacy">Поверителност</a>
				<a href="/terms">Условия за ползване</a>
			</div>
		</div>
	</div>
</footer>

<style>
	/* ======= NAVBAR ======= */
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: var(--nav-h);
		background: var(--bg);
		border-bottom: 1px solid transparent;
		transition: border-color 0.3s ease;
	}

	.nav--scrolled {
		border-bottom-color: var(--border);
	}

	.nav__inner {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav__logo {
		font-family: var(--heading-font);
		font-size: 1.7rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		color: var(--secondary);
		flex-shrink: 0;
	}

	.nav__links {
		display: flex;
		align-items: center;
		gap: 38px;
	}

	.nav__link {
		font-family: var(--body-font);
		font-size: 0.76rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text);
		position: relative;
		padding-bottom: 3px;
		transition: color 0.2s;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 0;
		height: 1px;
		background: var(--secondary);
		transition: width 0.25s ease;
	}

	.nav__link:hover::after,
	.nav__link--active::after {
		width: 100%;
	}

	.nav__link--active {
		color: var(--secondary);
	}

	/* Hamburger */
	.nav__burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 6px;
	}

	.nav__burger span {
		display: block;
		width: 24px;
		height: 1px;
		background: var(--text);
		transition: all 0.3s;
		transform-origin: center;
	}

	.nav__burger--open span:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}
	.nav__burger--open span:nth-child(2) {
		opacity: 0;
	}
	.nav__burger--open span:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	/* ======= FOOTER ======= */
	.footer {
		background: #201a19;
		color: rgba(237, 234, 229, 0.75);
		padding-top: 80px;
		padding-bottom: 40px;
	}

	.footer__top {
		display: grid;
		grid-template-columns: 1fr 1fr 1.3fr;
		gap: 60px;
		padding-bottom: 56px;
		border-bottom: 1px solid rgba(237, 234, 229, 0.1);
		margin-bottom: 32px;
	}

	.footer__logo {
		font-family: var(--heading-font);
		font-size: 2rem;
		font-weight: 500;
		color: var(--bg);
		letter-spacing: 0.06em;
		display: block;
		margin-bottom: 12px;
	}

	.footer__tagline {
		font-size: 0.85rem;
		line-height: 1.7;
		color: rgba(237, 234, 229, 0.5);
	}

	.footer__tagline em {
		font-family: var(--heading-font);
		font-size: 0.95rem;
		font-style: italic;
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
		gap: 13px;
		padding-top: 4px;
	}

	.footer__link {
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(237, 234, 229, 0.5);
		transition: color 0.2s;
	}
	.footer__link:hover {
		color: var(--bg);
	}

	.footer__newsletter-text {
		font-size: 0.875rem;
		color: rgba(237, 234, 229, 0.5);
		margin-bottom: 20px;
		margin-top: 8px;
		line-height: 1.7;
	}

	.footer__sub-ok {
		font-size: 0.85rem;
		color: rgba(237, 234, 229, 0.75);
		line-height: 1.6;
		padding: 14px 0;
	}

	.footer__sub-err {
		font-size: 0.78rem;
		color: #e8a09a;
		margin-top: 8px;
	}

	.footer__form {
		display: flex;
	}

	.footer__input {
		flex: 1;
		min-width: 0;
		padding: 12px 16px;
		background: rgba(237, 234, 229, 0.06);
		border: 1px solid rgba(237, 234, 229, 0.14);
		border-right: none;
		color: var(--bg);
		font-family: var(--body-font);
		font-size: 0.875rem;
		font-weight: 300;
		outline: none;
		transition: border-color 0.2s;
	}

	.footer__input:focus {
		border-color: rgba(237, 234, 229, 0.3);
	}

	.footer__input::placeholder {
		color: rgba(237, 234, 229, 0.3);
	}

	.footer__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.76rem;
		color: rgba(237, 234, 229, 0.3);
		letter-spacing: 0.04em;
	}

	.footer__legal {
		display: flex;
		gap: 28px;
	}

	.footer__legal a {
		color: rgba(237, 234, 229, 0.3);
		transition: color 0.2s;
	}
	.footer__legal a:hover {
		color: rgba(237, 234, 229, 0.7);
	}

	/* ======= MOBILE ======= */
	@media (max-width: 900px) {
		.nav__burger {
			display: flex;
		}

		.nav__links {
			position: fixed;
			top: var(--nav-h);
			left: 0;
			right: 0;
			background: var(--bg);
			flex-direction: column;
			align-items: center;
			gap: 28px;
			padding: 40px 24px;
			transform: translateY(-110%);
			opacity: 0;
			pointer-events: none;
			transition:
				transform 0.35s ease,
				opacity 0.35s ease;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
			border-bottom: 1px solid var(--border);
		}

		.nav__links--open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}

		.footer__top {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.footer__bottom {
			flex-direction: column;
			gap: 14px;
			text-align: center;
		}
	}
</style>
