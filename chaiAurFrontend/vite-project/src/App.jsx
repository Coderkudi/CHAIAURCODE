/// CORS(cross origin resource sharing )  policy ( for safety purpose )
// url, port same hona chahiye, but cors mein main issue yhi hai, ki esmein url alag alag hota hai 
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((Response) => {
      setJokes(Response.data)
    })

    .catch((error) => {
      console.log(error);
      
    })

  })

  return (
    <>
      <h1>Chai aur code</h1>
      <p>JOKES: {jokes.length} </p>

      {
        jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
