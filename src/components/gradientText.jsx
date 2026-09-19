import './gradientText.css'

function GradientText({
  children,
  colors = [
    '#965E5E',
    '#FF1362',
    '#FFC9A3',
    '#D98691',
    '#9B5258'
  ],
  animationSpeed = 10,
  className = ''
}) {
  const gradient = `linear-gradient(
    90deg,
    ${colors.join(', ')}
  )`

  return (
    <span
      className={`gradient-text ${className}`}
      style={{
        backgroundImage: gradient,
        animationDuration: `${animationSpeed}s`
      }}
    >
      {children}
    </span>
  )
}

export default GradientText