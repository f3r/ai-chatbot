import { useState } from 'react'
import { ask } from './services/chatbot'

import './App.css'

function App() {
  const [ query, setQuery ] = useState('')
  const [ answer, setAnswer ] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = async () => {
    const [result] = await ask(query)
    setAnswer(result.message.content)
  }

  return (
    <>
      <h1>Chatbot</h1>
      <h3>Please insert your query</h3>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>Ask</button>

      {
        answer && 
        <h3>{answer}</h3>
      }
    </>
  )
}

export default App
