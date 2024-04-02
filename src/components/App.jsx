import { useState } from "react"

function App() {
  
  const numbers = [4,3,5,8,4,8,16,78,12,100,99,78,45,68,42,5,1]
  const [order, setOrder] = useState('')

  
  function Ascending(a, b) {
      return a - b;
  }

  function Descending(a, b) {
      return b - a;
  }

  function evenAndOdd( selector ) { 
    const evenNumbers = []
    const oddNumbers = []
    numbers.forEach(number => { 
      if (number % 2 === 0) {
        evenNumbers.push(number)
       }
      else { 
        oddNumbers.push(number)
      }
    })
    if (selector === 'even') {
      return evenNumbers
    }
    else { 
      return oddNumbers
    }
  }



  return (



    <div>
      <h1>Sort Numbers</h1>
      <p>Numbers = [4, 3, 5, 8, 4, 8, 16, 78, 12, 100, 99, 78, 45, 68, 42, 5, 1]</p>
      <input list="list" placeholder="please select" onChange={e => setOrder(e.target.value)}/>
      
        <datalist id="list">
        <option>Ascending</option>
        <option>Descending</option> 
        <option>Even</option> 
        <option>Odd</option> 

        
         
      </datalist>
      
      {(order === 'Ascending') && <p>{numbers.sort(Ascending).join(', ')}</p>}
      {(order === 'Descending') && <p>{numbers.sort(Descending).join(', ')}</p>}
      {(order === 'Even') && <p>{evenAndOdd('even').join(', ')}</p>}
      {(order === 'Odd') && <p>{evenAndOdd('odd').join(', ')}</p>}
    </div>
  )
}

export default App
