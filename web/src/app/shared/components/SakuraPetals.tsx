import { FallingLeaves } from 'falling-leaves/react'

function createPetal(width: number, light: string, pink: string) {
  const sprite = document.createElement('canvas')
  sprite.width = sprite.height = 96
  const context = sprite.getContext('2d')
  if (!context) return sprite

  context.translate(48, 0)
  context.scale(width, 1)
  context.beginPath()
  context.moveTo(-3, 87)
  context.bezierCurveTo(-11, 77, -35, 59, -34, 34)
  context.bezierCurveTo(-34, 13, -14, 5, -2, 23)
  context.bezierCurveTo(10, 2, 33, 10, 35, 30)
  context.bezierCurveTo(39, 54, 13, 78, -3, 87)
  context.closePath()

  const fill = context.createLinearGradient(-15, 14, 9, 84)
  fill.addColorStop(0, light)
  fill.addColorStop(1, pink)
  context.fillStyle = fill
  context.fill()
  return sprite
}

const petals =
  typeof document === 'undefined'
    ? []
    : [
        createPetal(1.1, '#fff0f7', '#ee70a8'),
        createPetal(0.95, '#ffcde2', '#d9498b'),
        createPetal(0.75, '#fcaacf', '#e65d9d'),
      ]

export default function SakuraPetals({
  count = 34,
  opacity = 0.9,
}: {
  count?: number
  opacity?: number
}) {
  return (
    <FallingLeaves
      images={petals}
      count={count}
      opacity={opacity}
      size={[20, 40]}
      speed={[0.45, 1.05]}
      wind={[-0.25, 0.55]}
      sway={[0.35, 0.85]}
      rotationSpeed={[-0.7, 0.7]}
      zIndex={-1}
    />
  )
}
