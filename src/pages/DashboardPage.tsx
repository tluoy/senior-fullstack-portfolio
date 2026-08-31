import { useAuth } from '../features/auth/useAuth'

function DashboardPage() {
  const { user } = useAuth()

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-950">
        Dashboard
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Welcome back, {user?.name}.
      </p>

      <p className="mt-2 text-slate-500">
        This is a protected demonstration area.
      </p>
    </main>
  )
}

export default DashboardPage