export type User = {
  email: string
  name: string
}

export type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}