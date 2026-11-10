import { redirect } from '@sveltejs/kit';
import { verifyToken, getToken } from '$lib/auth.server.js';

export function load({ cookies, url }) {
	// Login page is always accessible
	if (url.pathname === '/admin') return {};

	const token = getToken(cookies);
	if (!verifyToken(token)) {
		throw redirect(303, '/admin');
	}
}
