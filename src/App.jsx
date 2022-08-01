import './App.css'
import { useState } from 'react'
import { projects } from '../public/projects.js'

import Masonry from 'react-masonry-css'
import Modal from './Modal'
import Tile from './Tile'

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

      <div >
        <button value="project" style={{backgroundColor: !isProjectVisible ? "gray" : null}} className="project search-button" onClick={(event)=>toggleVisible(event)}>Projects</button>
        <button value="adventure" style={{backgroundColor: !isAdventureVisible ? "gray" : null}} className="adventure search-button" onClick={(event)=>toggleVisible(event)}>Adventure</button>
        <button value="learning" style={{backgroundColor: !isLearningVisible ? "gray" : null}} className="learning search-button" onClick={(event)=>toggleVisible(event)}>Learning</button>
        
        <a className="search-button" href="https://ljsimpkin.github.io/resume/" style={{position:'absolute', right: '10px', textDecoration: 'none', backgroundColor: 'rgb(223, 225, 226)', color:'black', fontSize: '13px'}}>Resume</a>
      </div>

        


      <Masonry
        breakpointCols={breakpointConfig}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {tiles}
      </Masonry>

      {modelProps && <Modal project={modelProps} setModel={setModel}/>}
      
    </div>
  )
}

export default App
