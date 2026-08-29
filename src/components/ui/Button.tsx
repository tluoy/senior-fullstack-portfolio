import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
}

function Button({
  children,
  to,
  href,
  variant = 'primary',
}: ButtonProps) {
  const className = [
    'inline-flex items-center justify-center rounded-lg px-5 py-3',
    'font-medium transition-colors',
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-700'
      : 'border border-slate-300 text-slate-900 hover:bg-slate-100',
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button