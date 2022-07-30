function Tile(props) {
  const { title, group, subHeading, url, images } = props.project
  return (
    <div className={group} onClick={()=>props.setModel(props.project)}>
      <h1 className="masonry-title">{title}</h1>
      <h2 className="masonry-description">{subHeading}</h2>
      <img src={images[0]}></img>
    </div>
  )
}

export default Tile
