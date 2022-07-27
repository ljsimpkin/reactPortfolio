function Tile(props) {
  const { title, group, description, url, imageSrc, src2 } = props.project
  // const { setModel } = props.setModel
  // console.log(props.setModel)
  return (
    <div className={group} onClick={()=>props.setModel(props.project)}>
      <h1 className="masonry-title">{title}</h1>
      <h2 className="masonry-description">{description}</h2>
      <img src={imageSrc}></img>
    </div>
  )
}

export default Tile
