import React from 'react'
import NavBar from "./components/Navbar"
import Data from "./components/Data"
import Main from "./components/Main"

function App() {
  const cards = Data.map(items =>{
    return (
             <Main img={items.img}
             country={items.country}
             location={items.location}
             date={items.date}
             text={items.text}/>
   )
  })
  return (
    <>
    <NavBar />
    {cards}
    </>
  )
}

export default App;