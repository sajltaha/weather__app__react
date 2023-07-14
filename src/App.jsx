import './global.css'
import InputSearch from './components/InputSearch/InputSearch'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card/Card'

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    console.log(data)
    console.log('Component did mount')
  }, [data])

  return (
    <>
      <InputSearch setData={setData} />
      <Card data={data} />
    </>
  )
}

export default App