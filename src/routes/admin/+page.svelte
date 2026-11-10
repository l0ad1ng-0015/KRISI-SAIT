<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Admin — Кристина Дойчинова</title>
</svelte:head>

<div class="login-wrap">
	<div class="login-box">
		<div class="login-logo">
			<span>Кристина</span>
			<small>Admin панел</small>
		</div>

		{#if form?.error}
			<p class="login-error">{form.error}</p>
		{/if}

		<form method="POST" action="?/login" class="login-form">
			<label class="login-label">
				Парола
				<input
					type="password"
					name="password"
					class="login-input"
					placeholder="••••••••"
					required
					autofocus
				/>
			</label>
			<button type="submit" class="login-btn">Влез</button>
		</form>
	</div>
</div>

<style>
	.login-wrap {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #edeae5;
		padding: 24px;
	}

	.login-box {
		background: #faf7f3;
		border: 1px solid rgba(77, 39, 39, 0.15);
		border-radius: 16px;
		padding: 48px 44px;
		width: 100%;
		max-width: 380px;
		box-shadow: 0 4px 32px rgba(77, 39, 39, 0.08);
	}

	.login-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		margin-bottom: 36px;
	}

	.login-logo span {
		font-family: var(--heading-font);
		font-size: 2rem;
		font-style: italic;
		color: #4d2727;
	}

	.login-logo small {
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #8a7f7c;
	}

	.login-error {
		background: #fce8e8;
		color: #a33;
		border-radius: 8px;
		padding: 10px 16px;
		font-size: 0.85rem;
		margin-bottom: 20px;
		text-align: center;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.login-label {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #8a7f7c;
	}

	.login-input {
		padding: 12px 16px;
		border: 1px solid rgba(77, 39, 39, 0.2);
		border-radius: 8px;
		background: #fff;
		font-size: 1rem;
		color: #2a2524;
		outline: none;
		transition: border-color 0.2s;
	}

	.login-input:focus {
		border-color: #4d2727;
	}

	.login-btn {
		padding: 13px;
		background: #4d2727;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 0.82rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
		transition: background 0.2s;
	}

	.login-btn:hover {
		background: #3d1f1f;
	}
</style>
