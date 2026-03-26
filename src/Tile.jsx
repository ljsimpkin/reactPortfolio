import { useRef } from 'react'

function Tile(props) {
  const { title, group, subHeading, url, images } = props.project
  const tileRef = useRef(null)
  const rotRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  function applyTilt(rx, ry) {
    const tile = tileRef.current
    tile.style.transform = `perspective(600px) rotateY(${ry}deg) rotateX(${rx}deg)`
    tile.style.boxShadow = `${-ry * 0.8}px ${-rx * 0.8 + 8}px 30px rgba(0,0,0,0.3)`
  }

  function handleMouseMove(e) {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const rect = tileRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotRef.current = { x: -y * 12, y: x * 12 }
    applyTilt(rotRef.current.x, rotRef.current.y)
  }

  function handleMouseLeave() {
    const vel = { x: 0, y: 0 }
    const stiffness = 0.12
    const damping = 0.65

    function spring() {
      const rot = rotRef.current
      vel.x += -stiffness * rot.x
      vel.y += -stiffness * rot.y
      vel.x *= damping
      vel.y *= damping
      rot.x += vel.x
      rot.y += vel.y

      if (Math.abs(rot.x) < 0.05 && Math.abs(rot.y) < 0.05) {
        tileRef.current.style.transform = ''
        tileRef.current.style.boxShadow = ''
        return
      }

      applyTilt(rot.x, rot.y)
      animRef.current = requestAnimationFrame(spring)
    }

    animRef.current = requestAnimationFrame(spring)
  }

  return (
    <div
      ref={tileRef}
      className={`${group} tilt-tile`}
      onClick={() => props.setModel(props.project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="masonry-title">{title}</h1>
      <h2 className="masonry-description">{subHeading}</h2>
      <img src={images[0]}></img>
    </div>
  )
}

export default Tile
