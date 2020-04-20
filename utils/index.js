export function cookieFromRequest(req, key) {
  console.log('req.headers.cookie', !req.headers.cookie)
  if (!req.headers.cookie) {
    return
  }

  const cookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`))

  if (cookie) {
    return cookie.split('=')[1]
  }
}
