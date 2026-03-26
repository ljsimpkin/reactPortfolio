import { useState, useEffect } from 'react'

function IsoModal({ project, setModel }) {
  const { title, group, subHeading, description, url, images } = project
  const [open, setOpen] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setOpen(true))
  }, [])

  function handleClose() {
    setOpen(false)
    setTimeout(() => setModel(null), 450)
  }

  return (
    <div className="iso-overlay" onClick={handleClose}>
      <div className="iso-scene" onClick={e => e.stopPropagation()}>
        <div className={`iso-box ${open ? 'open' : ''}`}>

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
            <div className="iso-floor-inner">
              {url
                ? <a href={url} target="_blank" rel="noreferrer" className={`${group} search-button`}>See more</a>
                : <span className="iso-no-url">Coming soon</span>
              }
              <button className="iso-close-btn" onClick={handleClose}>✕ Close</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default IsoModal
