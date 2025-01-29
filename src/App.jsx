import { useState } from 'react'
import Input from './components/input/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Input inputType = "text"/>
      <Input inputType = "date"/>
    </div>
  )
}

export default App
