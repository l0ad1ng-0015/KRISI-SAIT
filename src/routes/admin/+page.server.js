import { fail, redirect } from '@sveltejs/kit';
import { checkPassword, makeToken, sessionCookie, clearCookie, getToken, verifyToken } from '$lib/auth.server.js';

export function load({ cookies }) {
	// Already logged in → go to dashboard
	if (verifyToken(getToken(cookies))) {
		throw redirect(303, '/admin/sabitiya');
	}
}

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const pw = data.get('password');

		if (!checkPassword(pw)) {
			return fail(401, { error: 'Грешна парола.' });
		}

		const token = makeToken();
		cookies.set('admin_session', token, {
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 8,
			path: '/'
		});
		throw redirect(303, '/admin/sabitiya');
	},

	logout: async ({ cookies }) => {
		cookies.set('admin_session', '', {
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 0,
			path: '/'
		});
		throw redirect(303, '/admin');
	}
};
