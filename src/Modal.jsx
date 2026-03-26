import Masonry from 'react-masonry-css'

function NewlineText(props) {
  return <div className="modalDescription">{props.text.split('\n').map(str => <p>{str}</p>)}</div>;
}

function Modal(props) {
  const { title, group, subHeading, description, url, images } = props.project

  return (
    <div className="modal" onClick={()=>props.setModel(null)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-images">
          {images.map((image, i) =>
            <img key={i} src={image}></img>
          )}
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