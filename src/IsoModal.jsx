import { useState, useEffect, useRef } from 'react'

const BASE_X = -15
const BASE_Y = 20

function IsoModal({ project, setModel }) {
  const { title, subHeading, description, url, images } = project
  const [open, setOpen] = useState(false)
  const [rotation, setRotation] = useState({ x: BASE_X, y: BASE_Y })
  const boxRef = useRef(null)

  useEffect(() => {
    requestAnimationFrame(() => setOpen(true))
  }, [])

  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window
    // Map mouse position to ±15deg around the base angles
    const offsetY = ((e.clientY / innerHeight) - 0.5) * 30
    const offsetX = ((e.clientX / innerWidth) - 0.5) * 30
    setRotation({ x: BASE_X - offsetY, y: BASE_Y + offsetX })
  }

  function handleClose() {
    setOpen(false)
    setTimeout(() => setModel(null), 450)
  }

  return (
    <div className="iso-overlay" onClick={handleClose} onMouseMove={handleMouseMove}>
      <div className="iso-scene" onClick={e => e.stopPropagation()}>
        <div
          ref={boxRef}
          className={`iso-box ${open ? 'open' : ''}`}
          style={open ? { transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` } : undefined}
        >

          <div className="iso-face iso-left">
            <img src={images[0]} alt={title} />
          </div>

          <div className="iso-face iso-right">
            <div className="iso-right-inner">
              <h1>{title}</h1>
              <h2>{subHeading}</h2>
              {description && description.split('\n').map((str, i) => <p key={i}>{str}</p>)}
            </div>
          </div>

          <div className="iso-face iso-floor">
            {url
              ? <iframe src={url} title={title} className="iso-iframe" />
              : <div className="iso-floor-inner"><span className="iso-no-url">Coming soon</span></div>
            }
            <button className="iso-close-btn" onClick={handleClose}>✕ Close</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default IsoModal
