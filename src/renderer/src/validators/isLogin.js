export const isLogin = (value) => {
  const admin = value.includes('admin')
  const user = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g.test(value)
  return admin || user
}
