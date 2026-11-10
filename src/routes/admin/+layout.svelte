<script>
	import { page } from '$app/stores';

	let { children } = $props();

	const isLogin = $derived($page.url.pathname === '/admin');

	const navLinks = [
		{ href: '/admin/sabitiya', label: 'Събития' },
		{ href: '/admin/publikacii', label: 'Публикации' }
	];
</script>

{#if isLogin}
	{@render children()}
{:else}
	<div class="admin-shell">
		<aside class="sidebar">
			<div class="sidebar__logo">
				<span>Кристина</span>
				<small>Admin панел</small>
			</div>
			<nav class="sidebar__nav">
				{#each navLinks as link}
					<a
						href={link.href}
						class="sidebar__link"
						class:sidebar__link--active={$page.url.pathname.startsWith(link.href)}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<form method="POST" action="/admin?/logout" class="sidebar__bottom">
				<button type="submit" class="sidebar__logout">Изход</button>
			</form>
		</aside>

		<main class="admin-main">
			{@render children()}
		</main>
	</div>
{/if}

<style>
	.admin-shell {
		display: flex;
		min-height: 100vh;
		background: #f5f2ee;
		font-family: var(--body-font);
	}

	.sidebar {
		width: 220px;
		flex-shrink: 0;
		background: #2a2524;
		color: #e8e0d8;
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	.sidebar__logo {
		padding: 28px 24px 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.sidebar__logo span {
		font-family: var(--heading-font);
		font-size: 1.35rem;
		font-style: italic;
		color: #e8d9cc;
	}

	.sidebar__logo small {
		font-size: 0.65rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(232, 224, 216, 0.45);
	}

	.sidebar__nav {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 16px 12px;
	}

	.sidebar__link {
		display: block;
		padding: 10px 14px;
		border-radius: 8px;
		font-size: 0.82rem;
		color: rgba(232, 224, 216, 0.7);
		transition: background 0.2s, color 0.2s;
	}

	.sidebar__link:hover {
		background: rgba(255, 255, 255, 0.07);
		color: #e8d9cc;
	}

	.sidebar__link--active {
		background: var(--secondary, #4d2727);
		color: #fff;
	}

	.sidebar__bottom {
		padding: 16px 12px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.sidebar__logout {
		width: 100%;
		padding: 9px 14px;
		background: none;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 8px;
		color: rgba(232, 224, 216, 0.6);
		font-size: 0.78rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.sidebar__logout:hover {
		background: rgba(255, 255, 255, 0.07);
		color: #e8d9cc;
	}

	.admin-main {
		flex: 1;
		padding: 40px 48px;
		overflow-y: auto;
	}

	@media (max-width: 768px) {
		.admin-shell {
			flex-direction: column;
		}
		.sidebar {
			width: 100%;
		}
		.admin-main {
			padding: 24px 20px;
		}
	}
</style>
