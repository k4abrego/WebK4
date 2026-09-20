import './gradientText.css'

function GradientText({
  children,
  colors = [
    '#965E5E',
    '#FF1362',
    '#D98691',
    '#ffb29dff',
    '#9B5258'
  ],
  animationSpeed = 15,
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
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </span>
  )
}

export default GradientText