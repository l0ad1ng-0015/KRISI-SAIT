import { supabase } from '$lib/db.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
	const { data: pubs, error } = await supabase
		.from('publications')
		.select('*')
		.order('sort_order', { ascending: true });

	if (error) console.error('Load publications error:', error);
	return { pubs: pubs ?? [] };
}

export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') || null;

		const payload = {
			title: data.get('title') || '',
			author: data.get('author') || 'Кристина Дойчинова',
			cover_color: data.get('cover_color') || '#c4a8b0',
			href: data.get('href') || '',
			excerpt: data.get('excerpt') || '',
			is_active: data.get('is_active') === 'on',
			sort_order: Number(data.get('sort_order') || 0)
		};

		let error;
		if (id) {
			({ error } = await supabase.from('publications').update(payload).eq('id', id));
		} else {
			({ error } = await supabase.from('publications').insert(payload));
		}

		if (error) return fail(500, { error: error.message });
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		if (!id) return fail(400, { error: 'No id' });

		const { error } = await supabase.from('publications').delete().eq('id', id);
		if (error) return fail(500, { error: error.message });
	}
};
