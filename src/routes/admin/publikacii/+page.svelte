<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();

	let editing = $state(null);
	let confirmDelete = $state(null);

	function startNew() {
		editing = {
			id: '',
			title: '',
			author: 'Кристина Дойчинова',
			cover_color: '#c4a8b0',
			href: '',
			excerpt: '',
			is_active: true,
			sort_order: 0
		};
	}

	function startEdit(pub) {
		editing = { ...pub };
	}

	function cancel() {
		editing = null;
	}
</script>

<svelte:head><title>Публикации — Admin</title></svelte:head>

<div class="page-head">
	<div>
		<h1>Публикации</h1>
		<p class="subtitle">{data.pubs.length} записа в базата</p>
	</div>
	{#if !editing}
		<button class="btn-add" onclick={startNew}>+ Нова публикация</button>
	{/if}
</div>

{#if form?.error}
	<div class="alert-error">{form.error}</div>
{/if}

{#if editing}
	<div class="card">
		<h2 class="card-title">{editing.id ? 'Редактирай публикация' : 'Нова публикация'}</h2>

		<form method="POST" action="?/save" use:enhance={() => { return ({ update }) => { update(); editing = null; }; }}>
			{#if editing.id}
				<input type="hidden" name="id" value={editing.id} />
			{/if}

			<label class="field">
				<span>Заглавие</span>
				<input type="text" name="title" value={editing.title} required placeholder="Заглавие на книгата / статията" />
			</label>

			<div class="form-row">
				<label class="field">
					<span>Автор</span>
					<input type="text" name="author" value={editing.author} placeholder="Кристина Дойчинова" />
				</label>
				<label class="field field--color">
					<span>Цвят на корицата</span>
					<div class="color-row">
						<input type="color" name="cover_color" value={editing.cover_color} />
						<input type="text" name="cover_color_text" value={editing.cover_color} style="flex:1" readonly />
					</div>
				</label>
				<label class="field field--sm">
					<span>Поредност</span>
					<input type="number" name="sort_order" value={editing.sort_order} min="0" />
				</label>
			</div>

			<label class="field">
				<span>URL / Линк (Amazon, Ciela и др.)</span>
				<input type="url" name="href" value={editing.href} placeholder="https://..." />
			</label>

			<label class="field">
				<span>Кратко описание / откъс</span>
				<textarea name="excerpt" rows="4" placeholder="Кратко описание на публикацията...">{editing.excerpt}</textarea>
			</label>

			<label class="field field--check">
				<input type="checkbox" name="is_active" checked={editing.is_active} />
				<span>Активна (видима на сайта)</span>
			</label>

			<div class="form-actions">
				<button type="submit" class="btn-save">Запази</button>
				<button type="button" class="btn-cancel" onclick={cancel}>Откажи</button>
			</div>
		</form>
	</div>
{:else}
	{#if data.pubs.length === 0}
		<div class="empty">Няма добавени публикации. Добави първата!</div>
	{:else}
		<div class="pub-list">
			{#each data.pubs as pub}
				<div class="pub-row" class:inactive={!pub.is_active}>
					<div class="pub-swatch" style="background: {pub.cover_color};"></div>
					<div class="pub-info">
						<strong>{pub.title}</strong>
						<small>{pub.author}</small>
						{#if pub.href}<span class="pub-url">{pub.href}</span>{/if}
					</div>
					{#if !pub.is_active}<span class="badge badge--off">Скрита</span>{/if}
					<div class="event-actions">
						<button class="btn-edit" onclick={() => startEdit(pub)}>Редактирай</button>

						{#if confirmDelete === pub.id}
							<form method="POST" action="?/delete" use:enhance>
								<input type="hidden" name="id" value={pub.id} />
								<button type="submit" class="btn-del-confirm">Изтрий!</button>
							</form>
							<button class="btn-cancel-sm" onclick={() => (confirmDelete = null)}>Не</button>
						{:else}
							<button class="btn-del" onclick={() => (confirmDelete = pub.id)}>Изтрий</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
{/if}

<style>
	.page-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 32px;
		gap: 16px;
	}
	h1 {
		font-family: var(--heading-font);
		font-size: 2rem;
		font-weight: 400;
		color: #2a2524;
	}
	.subtitle { font-size: 0.8rem; color: #8a7f7c; margin-top: 4px; }
	.btn-add {
		padding: 10px 22px;
		background: #4d2727;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 0.8rem;
		cursor: pointer;
		transition: background 0.2s;
	}
	.btn-add:hover { background: #3d1f1f; }
	.alert-error {
		background: #fce8e8;
		color: #a33;
		border-radius: 8px;
		padding: 12px 18px;
		margin-bottom: 20px;
		font-size: 0.88rem;
	}
	.card {
		background: #faf7f3;
		border: 1px solid rgba(77,39,39,0.13);
		border-radius: 14px;
		padding: 36px 40px;
		max-width: 680px;
	}
	.card-title {
		font-family: var(--heading-font);
		font-size: 1.4rem;
		font-weight: 400;
		margin-bottom: 28px;
		color: #2a2524;
	}
	.form-row { display: flex; gap: 16px; }
	.form-row .field { flex: 1; }
	.field--sm { flex: 0 0 90px !important; }
	.field--color { flex: 0 0 180px !important; }
	.field {
		display: flex;
		flex-direction: column;
		gap: 7px;
		margin-bottom: 18px;
	}
	.field span {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #8a7f7c;
	}
	.color-row { display: flex; gap: 8px; align-items: center; }
	.color-row input[type="color"] { width: 42px; height: 38px; border: 1px solid rgba(77,39,39,0.18); border-radius: 6px; cursor: pointer; padding: 2px; }
	.field input,
	.field textarea {
		padding: 10px 14px;
		border: 1px solid rgba(77,39,39,0.18);
		border-radius: 8px;
		background: #fff;
		font-size: 0.92rem;
		color: #2a2524;
		font-family: var(--body-font);
		outline: none;
		transition: border-color 0.2s;
		resize: vertical;
	}
	.field input:focus, .field textarea:focus { border-color: #4d2727; }
	.field--check { flex-direction: row; align-items: center; gap: 10px; }
	.field--check input { width: auto; }
	.field--check span { text-transform: none; letter-spacing: 0; font-size: 0.88rem; color: #2a2524; }
	.form-actions { display: flex; gap: 12px; margin-top: 8px; }
	.btn-save { padding: 11px 28px; background: #4d2727; color: #fff; border: none; border-radius: 8px; font-size: 0.82rem; cursor: pointer; transition: background 0.2s; }
	.btn-save:hover { background: #3d1f1f; }
	.btn-cancel { padding: 11px 20px; background: none; border: 1px solid rgba(77,39,39,0.2); border-radius: 8px; font-size: 0.82rem; cursor: pointer; color: #8a7f7c; transition: all 0.2s; }
	.btn-cancel:hover { border-color: #4d2727; color: #4d2727; }

	.empty { background: #faf7f3; border: 1px dashed rgba(77,39,39,0.2); border-radius: 12px; padding: 48px; text-align: center; color: #8a7f7c; font-size: 0.92rem; }
	.pub-list { display: flex; flex-direction: column; gap: 10px; }
	.pub-row { display: flex; align-items: center; gap: 16px; background: #faf7f3; border: 1px solid rgba(77,39,39,0.11); border-radius: 10px; padding: 14px 18px; transition: box-shadow 0.2s; }
	.pub-row:hover { box-shadow: 0 2px 14px rgba(77,39,39,0.07); }
	.pub-row.inactive { opacity: 0.55; }
	.pub-swatch { width: 36px; height: 52px; border-radius: 6px; flex-shrink: 0; }
	.pub-info { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
	.pub-info strong { font-size: 0.95rem; color: #2a2524; }
	.pub-info small { font-size: 0.78rem; color: #8a7f7c; }
	.pub-url { font-size: 0.72rem; color: #8a7f7c; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.badge { font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border: 1px solid rgba(77,39,39,0.18); border-radius: 100px; color: #8a7f7c; white-space: nowrap; }
	.badge--off { border-color: #e8c5c5; color: #a33; background: #fdf0f0; }
	.event-actions { display: flex; gap: 8px; flex-shrink: 0; }
	.btn-edit { padding: 7px 16px; background: none; border: 1px solid rgba(77,39,39,0.2); border-radius: 7px; font-size: 0.75rem; cursor: pointer; color: #4d2727; transition: all 0.2s; }
	.btn-edit:hover { background: #4d2727; color: #fff; }
	.btn-del { padding: 7px 14px; background: none; border: 1px solid rgba(180,40,40,0.2); border-radius: 7px; font-size: 0.75rem; cursor: pointer; color: #a33; transition: all 0.2s; }
	.btn-del:hover { background: #fce8e8; }
	.btn-del-confirm { padding: 7px 14px; background: #a33; color: #fff; border: none; border-radius: 7px; font-size: 0.75rem; cursor: pointer; }
	.btn-cancel-sm { padding: 7px 12px; background: none; border: 1px solid rgba(77,39,39,0.15); border-radius: 7px; font-size: 0.75rem; cursor: pointer; color: #8a7f7c; }
</style>
