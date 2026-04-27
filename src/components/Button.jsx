export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = 'btn-glow font-semibold rounded-lg transition-all duration-300 flex items-center justify-center'

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:shadow-primary-600/50',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
