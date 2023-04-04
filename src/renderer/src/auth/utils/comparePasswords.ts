export const comparePasswords = (password1: string, password2: string): boolean => {
  if (password1.trim() === password2.trim()) return true
  return false
}
