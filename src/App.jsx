import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlacesAutocomplete from './components/Mock/PlacesAutocomplete'
import JsonApiComponent from './components/JSON/JsonApi'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PlacesAutocomplete/>
     <JsonApiComponent/>
    </>
  )
}

export default App
