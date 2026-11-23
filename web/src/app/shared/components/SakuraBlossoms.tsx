import { FallingLeaves } from 'falling-leaves/react'

function createBlossom(light: string, pink: string) {
  const sprite = document.createElement('canvas')
  sprite.width = sprite.height = 96
  const context = sprite.getContext('2d')
  if (!context) return sprite

  context.translate(48, 48)
  const petalCount = 5
  const angle = (2 * Math.PI) / petalCount

  const petal = new Path2D()
  petal.moveTo(0, 2)
  petal.bezierCurveTo(-8, -8, -22, -24, -17, -36)
  petal.quadraticCurveTo(-12, -47, -4, -43)
  petal.lineTo(0, -39)
  petal.lineTo(4, -43)
  petal.quadraticCurveTo(12, -47, 17, -36)
  petal.bezierCurveTo(22, -24, 8, -8, 0, 2)
  petal.closePath()

  const fill = context.createRadialGradient(0, 0, 5, 0, 0, 43)
  fill.addColorStop(0, pink)
  fill.addColorStop(1, light)
  context.fillStyle = fill
  for (let index = 0; index < petalCount; index++) {
    context.fill(petal)
    context.rotate(angle)
  }

  context.strokeStyle = '#ad3868'
  context.lineWidth = 1.75
  context.fillStyle = '#ad3868'
  for (let index = 0; index < petalCount; index++) {
    context.beginPath()
    context.moveTo(0, -4)
    context.lineTo(0, -12)
    context.stroke()
    context.beginPath()
    context.arc(0, -13, 2.6, 0, 2 * Math.PI)
    context.fill()
    context.rotate(angle)
  }

  context.beginPath()
  context.arc(0, 0, 4.5, 0, 2 * Math.PI)
  context.fillStyle = '#fff1bc'
  context.fill()

  return sprite
}

const blossoms =
  typeof document === 'undefined'
    ? []
    : [
        createBlossom('#fff0f7', '#ee70a8'),
        createBlossom('#ffcde2', '#d9498b'),
        createBlossom('#fcaacf', '#e65d9d'),
      ]

export default function SakuraBlossoms({
  count = 34,
  opacity = 0.9,
}: {
  count?: number
  opacity?: number
}) {
  return (
    <FallingLeaves
      images={blossoms}
      count={count}
      opacity={opacity}
      size={[14, 28]}
      speed={[0.45, 1.05]}
      wind={[-0.25, 0.55]}
      sway={[0.35, 0.85]}
      rotationSpeed={[-0.7, 0.7]}
      zIndex={-1}
    />
  )
}
