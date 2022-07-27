import './App.css'
import Tile from './Tile'
import { useState } from 'react'
import { projects } from '../public/projects.js'
import Masonry from 'react-masonry-css'

function App() {
  const breakpointConfig = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const [isProjectVisible, setProjectVisible] = useState(true)
  const [isAdventureVisible, setAdventureVisible] = useState(true)
  const [isLearningVisible, setLearningVisible] = useState(true)

  const [modelProps, setModel] = useState(null)
  // setModel('Ive set model')

  function attachState(tileType){
    switch(tileType) {
      case 'project':
        return isProjectVisible
      case 'learning':
        return isLearningVisible
      case 'adventure':
        return isAdventureVisible
    }
  }

  function toggleVisible(event){
    const tileType = event.target.value
    let newVisibility
    switch(tileType) {
      case 'project':
        newVisibility = isProjectVisible ? false : true
        setProjectVisible(newVisibility)
        break
      case 'learning':
        newVisibility = isLearningVisible ? false : true
        setLearningVisible(newVisibility)
        break
      case 'adventure':
        newVisibility = isAdventureVisible ? false : true
        setAdventureVisible(newVisibility)
        break
    }
  }

  const tiles = projects.map((project, index) => 
    <>
      {attachState(project.group) && <Tile project={project} setModel={setModel} key={index}/>}
    </>)

  return (

    <div className="App">

      <div id="search-button" className="button-toggle">
        <button value="project" style={{backgroundColor: !isProjectVisible ? "gray" : null}} className="project search-button" onClick={(event)=>toggleVisible(event)}>Projects</button>
        <button value="adventure" style={{backgroundColor: !isAdventureVisible ? "gray" : null}} className="adventure search-button" onClick={(event)=>toggleVisible(event)}>Adventure</button>
        <button value="learning" style={{backgroundColor: !isLearningVisible ? "gray" : null}} className="learning search-button" onClick={(event)=>toggleVisible(event)}>Learning</button>
      </div>

      <Masonry
        breakpointCols={breakpointConfig}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {tiles}
      </Masonry>

      {modelProps && <Modal props={modelProps} setModel={setModel}/>}
      
    </div>
  )
}

function Modal(props) {
  const { title, group, description, url, imageSrc, src2 } = props.props
  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={()=>props.setModel(null)} className="close">&times;</span>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <img src={imageSrc}></img>
      </div>
    </div>
  )
}

export default App
