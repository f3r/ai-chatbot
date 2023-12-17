import { useState } from 'react'
import { ask } from './services/chatbot'

import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = async () => {
    const [result] = await ask(query)
    setAnswer(result.message.content)
  }

  return (
    <>
      <section className='header'>
        <h1>Chatbot</h1>
      </section>

      <section className='messages'>
        {
          answer &&
          <pre>{answer}</pre>
        }
      </section>

      <section className='chat'>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Ask me Anything</button>
      </section>
    </>
  )
}

export default App
