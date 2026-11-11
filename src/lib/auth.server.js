const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_SECRET = process.env.ADMIN_SECRET;

const COOKIE = 'admin_session';
const MAX_AGE = 60 * 60 * 8; // 8 hours

export function checkPassword(pw) {
	return pw === ADMIN_PASSWORD;
}

export function makeToken() {
	return Buffer.from(`${ADMIN_SECRET}:${Date.now()}`).toString('base64');
}

export function verifyToken(token) {
	if (!token) return false;
	try {
		const decoded = Buffer.from(token, 'base64').toString('utf8');
		const [secret] = decoded.split(':');
		return secret === ADMIN_SECRET;
	} catch {
		return false;
	}
}

export function sessionCookie(token) {
	return `${COOKIE}=${token}; HttpOnly; SameSite=Strict; Max-Age=${MAX_AGE}; Path=/`;
}

export function clearCookie() {
	return `${COOKIE}=; HttpOnly; SameSite=Strict; Max-Age=0; Path=/`;
}

export function getToken(cookies) {
	return cookies.get(COOKIE);
}
