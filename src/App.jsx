import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppyList)
import './App.css'


const [puppies, setPuppies] = useState(puppyList)

console.log(puppies)


function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}



export default App
