import useMagnetic from '../hooks/useMagnetic'

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'solid',
  className = '',
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.3)

  const base =
    'relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-secondary text-sm font-medium tracking-wide transition-colors duration-300 ease-out'
  const variants = {
    solid: 'bg-white text-black hover:bg-mist-200',
    outline: 'border border-white/25 text-white hover:border-white/70',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${variants[variant]} ${className}`}
      style={{ transitionProperty: 'transform, background-color, border-color', transitionDuration: '0.3s' }}
    >
      {children}
    </Tag>
  )
}
