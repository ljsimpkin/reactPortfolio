import Masonry from 'react-masonry-css'
import { useRef, useState } from 'react'

function NewlineText(props) {
  return <div className="modalDescription">{props.text.split('\n').map(str => <p>{str}</p>)}</div>;
}

function Modal(props) {
  const { title, group, subHeading, description, url, images } = props.project
  const imagesRef = useRef(null)
  const [chevronVisible, setChevronVisible] = useState(true)

  function handleScroll() {
    if (imagesRef.current.scrollTop > 30) setChevronVisible(false)
  }

  return (
    <div className="modal" onClick={()=>props.setModel(null)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-images" ref={imagesRef} onScroll={handleScroll}>
          {images.map((image, i) =>
            <img key={i} src={image}></img>
          )}
          {images.length > 1 &&
            <div className="scroll-hint" style={{opacity: chevronVisible ? 1 : 0}}>&#8964;</div>
          }
        </div>
        <div className="modal-text">
          <span onClick={()=>props.setModel(null)} className="close">&times;</span>
          <h1>{title}</h1>
          <h2>{subHeading}</h2>
          {description && <NewlineText text={description}/>}
          {url && <a href={url} target="_blank" className="project search-button">See more</a>}
        </div>
      </div>
    </div>
  )
}

export default Modal