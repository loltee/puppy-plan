import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppyList)
import './App.css'






function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  

function handleClick(puppyId) {
  setFeatPupId(puppyId)
}


  return(
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>;
           })
       }
       <p>{featPupId}</p>
    </div>
  );
}




export default App
