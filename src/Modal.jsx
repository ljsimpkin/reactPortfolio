function Modal(props) {
  const { title, group, description, url, imageSrc, src2 } = props.props
  return (
    <div className="modal" onClick={()=>props.setModel(null)}>
      <div className="modal-content">
        <span onClick={()=>props.setModel(null)} className="close">&times;</span>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <a href={url}>Checkout this link to see more</a>
        <img src={imageSrc}></img>
      </div>
    </div>
  )
}

export default Modal