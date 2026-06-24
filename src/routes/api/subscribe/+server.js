import { json } from '@sveltejs/kit';
import { MAILERLITE_API_KEY } from '$env/dynamic/private';

export async function POST({ request }) {
	const { email } = await request.json();

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: 'Невалиден имейл адрес.' }, { status: 400 });
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
