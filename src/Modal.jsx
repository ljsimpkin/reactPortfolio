import Masonry from 'react-masonry-css'

function NewlineText(props) {
  return props.text.split('\n').map(str => <p>{str}</p>);
}

function Modal(props) {
  const { title, group, subHeading, description, url, images } = props.project

  return (
    <div className="modal" onClick={()=>props.setModel(null)}>
      <div className="modal-content">
        <span onClick={()=>props.setModel(null)} className="close">&times;</span>
        <h1>{title}</h1>
        <h2>{subHeading}</h2>
        {description && <NewlineText text={description}/>}
        {url && <a href={url} className="seeMoreButton">See more</a>}
        {images.map(image => 
          <img src={image}></img>
        )}
      </div>
    </div>
  )
}

export default Modal