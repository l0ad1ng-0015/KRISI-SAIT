import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
	const { email } = await request.json();
	const MAILERLITE_API_KEY = env.MAILERLITE_API_KEY;

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: 'Невалиден имейл адрес.' }, { status: 400 });
	}

	if (!MAILERLITE_API_KEY) {
		return json({ error: 'Услугата за абониране не е конфигурирана.' }, { status: 500 });
	}

	const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${MAILERLITE_API_KEY}`,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ email })
	});

	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		return json({ error: data.message || 'Грешка при абониране.' }, { status: res.status });
	}

	return json({ success: true });
}
