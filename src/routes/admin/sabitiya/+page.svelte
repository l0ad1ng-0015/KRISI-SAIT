<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();

	let editing = $state(null); // null = list, {} = new, {id,...} = edit existing
	let confirmDelete = $state(null);

	function startNew() {
		editing = {
			id: '',
			num: '',
			type: '',
			title: '',
			date: '',
			form_url: '',
			gradient: 'linear-gradient(150deg,#d4bfc3 0%,#9e7a84 100%)',
			paras: '',
			details: '',
			is_active: true,
			sort_order: 0
		};
	}

	function startEdit(ev) {
		editing = {
			...ev,
			paras: (ev.paras ?? []).join('\n'),
			details: (ev.details ?? []).join('\n')
		};
	}

	function cancel() {
		editing = null;
	}
</script>

<svelte:head><title>Събития — Admin</title></svelte:head>

<div class="page-head">
	<div>
		<h1>Събития</h1>
		<p class="subtitle">{data.events.length} записа в базата</p>
	</div>
	{#if !editing}
		<button class="btn-add" onclick={startNew}>+ Ново събитие</button>
	{/if}
</div>

{#if form?.error}
	<div class="alert-error">{form.error}</div>
{/if}

{#if editing}
	<!-- FORM -->
	<div class="card">
		<h2 class="card-title">{editing.id ? 'Редактирай събитие' : 'Ново събитие'}</h2>

		<form method="POST" action="?/save" use:enhance={() => { return ({ update }) => { update(); editing = null; }; }}>
			{#if editing.id}
				<input type="hidden" name="id" value={editing.id} />
			{/if}

			<div class="form-row">
				<label class="field">
					<span>Номер <small>(напр. 01)</small></span>
					<input type="text" name="num" value={editing.num} placeholder="01" />
				</label>
				<label class="field">
					<span>Тип</span>
					<input type="text" name="type" value={editing.type} placeholder="Семинар · 3 дни" />
				</label>
				<label class="field field--sm">
					<span>Поредност</span>
					<input type="number" name="sort_order" value={editing.sort_order} min="0" />
				</label>
			</div>

			<label class="field">
				<span>Заглавие</span>
				<input type="text" name="title" value={editing.title} required placeholder="Заглавие на събитието" />
			</label>

			<label class="field">
				<span>Дата / Място</span>
				<input type="text" name="date" value={editing.date} placeholder="15–17 ноември 2025 · София" />
			</label>

			<label class="field">
				<span>Google Form URL за регистрация</span>
				<input type="url" name="form_url" value={editing.form_url} placeholder="https://forms.gle/..." />
			</label>

			<label class="field">
				<span>CSS градиент (за фон)</span>
				<input type="text" name="gradient" value={editing.gradient} placeholder="linear-gradient(...)" />
			</label>

			<label class="field">
				<span>Параграфи <small>(всеки на нов ред)</small></span>
				<textarea name="paras" rows="5" placeholder="Ред 1&#10;Ред 2&#10;Ред 3">{editing.paras}</textarea>
			</label>

			<label class="field">
				<span>Детайли / точки <small>(всяка на нов ред)</small></span>
				<textarea name="details" rows="4" placeholder="3 дни интензивна работа&#10;Малка група">{editing.details}</textarea>
			</label>

			<label class="field field--check">
				<input type="checkbox" name="is_active" checked={editing.is_active} />
				<span>Активно (видимо на сайта)</span>
			</label>

			<div class="form-actions">
				<button type="submit" class="btn-save">Запази</button>
				<button type="button" class="btn-cancel" onclick={cancel}>Откажи</button>
			</div>
		</form>
	</div>
{:else}
	<!-- LIST -->
	{#if data.events.length === 0}
		<div class="empty">Няма добавени събития. Създай първото!</div>
	{:else}
		<div class="event-list">
			{#each data.events as ev}
				<div class="event-row" class:inactive={!ev.is_active}>
					<div class="event-swatch" style="background: {ev.gradient};"></div>
					<div class="event-info">
						<span class="event-num">{ev.num ?? ''}</span>
						<strong>{ev.title}</strong>
						{#if ev.date}<small>{ev.date}</small>{/if}
					</div>
					<div class="event-badges">
						{#if !ev.is_active}<span class="badge badge--off">Скрито</span>{/if}
						{#if ev.type}<span class="badge">{ev.type}</span>{/if}
					</div>
					<div class="event-actions">
						<button class="btn-edit" onclick={() => startEdit(ev)}>Редактирай</button>

						{#if confirmDelete === ev.id}
							<form method="POST" action="?/delete" use:enhance>
								<input type="hidden" name="id" value={ev.id} />
								<button type="submit" class="btn-del-confirm">Изтрий!</button>
							</form>
							<button class="btn-cancel-sm" onclick={() => (confirmDelete = null)}>Не</button>
						{:else}
							<button class="btn-del" onclick={() => (confirmDelete = ev.id)}>Изтрий</button>
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
	.subtitle {
		font-size: 0.8rem;
		color: #8a7f7c;
		margin-top: 4px;
	}
	.btn-add {
		padding: 10px 22px;
		background: #4d2727;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 0.8rem;
		cursor: pointer;
		white-space: nowrap;
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

	/* FORM CARD */
	.card {
		background: #faf7f3;
		border: 1px solid rgba(77,39,39,0.13);
		border-radius: 14px;
		padding: 36px 40px;
		max-width: 720px;
	}
	.card-title {
		font-family: var(--heading-font);
		font-size: 1.4rem;
		font-weight: 400;
		margin-bottom: 28px;
		color: #2a2524;
	}
	.form-row {
		display: flex;
		gap: 16px;
	}
	.form-row .field { flex: 1; }
	.field--sm { flex: 0 0 90px !important; }
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
	.field input:focus,
	.field textarea:focus { border-color: #4d2727; }
	.field--check {
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
	.field--check input { width: auto; }
	.field--check span {
		text-transform: none;
		letter-spacing: 0;
		font-size: 0.88rem;
		color: #2a2524;
	}
	.form-actions {
		display: flex;
		gap: 12px;
		margin-top: 8px;
	}
	.btn-save {
		padding: 11px 28px;
		background: #4d2727;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 0.82rem;
		cursor: pointer;
		transition: background 0.2s;
	}
	.btn-save:hover { background: #3d1f1f; }
	.btn-cancel {
		padding: 11px 20px;
		background: none;
		border: 1px solid rgba(77,39,39,0.2);
		border-radius: 8px;
		font-size: 0.82rem;
		cursor: pointer;
		color: #8a7f7c;
		transition: all 0.2s;
	}
	.btn-cancel:hover { border-color: #4d2727; color: #4d2727; }

	/* LIST */
	.empty {
		background: #faf7f3;
		border: 1px dashed rgba(77,39,39,0.2);
		border-radius: 12px;
		padding: 48px;
		text-align: center;
		color: #8a7f7c;
		font-size: 0.92rem;
	}
	.event-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.event-row {
		display: flex;
		align-items: center;
		gap: 16px;
		background: #faf7f3;
		border: 1px solid rgba(77,39,39,0.11);
		border-radius: 10px;
		padding: 14px 18px;
		transition: box-shadow 0.2s;
	}
	.event-row:hover { box-shadow: 0 2px 14px rgba(77,39,39,0.07); }
	.event-row.inactive { opacity: 0.55; }
	.event-swatch {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		flex-shrink: 0;
	}
	.event-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}
	.event-num {
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #8a7f7c;
	}
	.event-info strong {
		font-size: 0.95rem;
		color: #2a2524;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.event-info small {
		font-size: 0.78rem;
		color: #8a7f7c;
	}
	.event-badges {
		display: flex;
		gap: 8px;
	}
	.badge {
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 4px 10px;
		border: 1px solid rgba(77,39,39,0.18);
		border-radius: 100px;
		color: #8a7f7c;
		white-space: nowrap;
	}
	.badge--off {
		border-color: #e8c5c5;
		color: #a33;
		background: #fdf0f0;
	}
	.event-actions {
		display: flex;
		gap: 8px;
		flex-shrink: 0;
	}
	.btn-edit {
		padding: 7px 16px;
		background: none;
		border: 1px solid rgba(77,39,39,0.2);
		border-radius: 7px;
		font-size: 0.75rem;
		cursor: pointer;
		color: #4d2727;
		transition: all 0.2s;
	}
	.btn-edit:hover { background: #4d2727; color: #fff; }
	.btn-del {
		padding: 7px 14px;
		background: none;
		border: 1px solid rgba(180,40,40,0.2);
		border-radius: 7px;
		font-size: 0.75rem;
		cursor: pointer;
		color: #a33;
		transition: all 0.2s;
	}
	.btn-del:hover { background: #fce8e8; }
	.btn-del-confirm {
		padding: 7px 14px;
		background: #a33;
		color: #fff;
		border: none;
		border-radius: 7px;
		font-size: 0.75rem;
		cursor: pointer;
	}
	.btn-cancel-sm {
		padding: 7px 12px;
		background: none;
		border: 1px solid rgba(77,39,39,0.15);
		border-radius: 7px;
		font-size: 0.75rem;
		cursor: pointer;
		color: #8a7f7c;
	}
</style>
