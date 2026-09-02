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
    'font-medium transition-all duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:outline-slate-900'
      : 'border border-slate-300 text-slate-900 hover:bg-slate-50 active:bg-slate-100 focus-visible:outline-slate-900',
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