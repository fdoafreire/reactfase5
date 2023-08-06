import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Diseño paginas web</h1>
	<div className="card">
	    <h3>Integrantes</h3>
	    <h4>Johantan Tafur Orjuela</h4>
	    <h4>Javier Hernando Gomez</h4>
	    <h4>Edwin Garzon</h4>
	    <h4>Fernando Freire Gomez</h4>
	    <h6>Enlace proyecto</h6>
	    <a href="/index.html">Ver proyecto</a>
      </div>
    </>
  )
}

export default App
