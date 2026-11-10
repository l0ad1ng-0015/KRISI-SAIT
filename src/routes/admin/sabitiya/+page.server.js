import { supabase } from '$lib/db.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
	const { data: events, error } = await supabase
		.from('events')
		.select('*, webinars(*)')
		.order('sort_order', { ascending: true });

	if (error) console.error('Load events error:', error);
	return { events: events ?? [] };
}

export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') || null;

		const payload = {
			num: data.get('num') || '',
			type: data.get('type') || '',
			title: data.get('title') || '',
			date: data.get('date') || '',
			form_url: data.get('form_url') || '',
			gradient: data.get('gradient') || 'linear-gradient(150deg,#d4bfc3,#9e7a84)',
			paras: splitLines(data.get('paras')),
			details: splitLines(data.get('details')),
			is_active: data.get('is_active') === 'on',
			sort_order: Number(data.get('sort_order') || 0)
		};

		let error;
		if (id) {
			({ error } = await supabase.from('events').update(payload).eq('id', id));
		} else {
			({ error } = await supabase.from('events').insert(payload));
		}

		if (error) return fail(500, { error: error.message });
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		if (!id) return fail(400, { error: 'No id' });

		const { error } = await supabase.from('events').delete().eq('id', id);
		if (error) return fail(500, { error: error.message });
	},

	toggle: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const is_active = data.get('is_active') === 'true';

		const { error } = await supabase.from('events').update({ is_active }).eq('id', id);
		if (error) return fail(500, { error: error.message });
	}
};

function splitLines(val) {
	if (!val) return [];
	return String(val)
		.split('\n')
		.map((l) => l.trim())
		.filter(Boolean);
}
