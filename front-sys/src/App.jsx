import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Layouts/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Main/>
    </section>
  )
}

export default App
