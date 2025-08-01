import React, { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    console.log('Counter mounted');
  }, [])

  // we use here dependency [counter] for updating the counter for the updatation only 
  // when we update the counter then the msg is printed ("user updated count")
  useEffect(() => {
    console.log("user updated count");
  }, [counter])

  const handleIncrement = () => {
    setCounter(counter + 1)
  };

  return (
    <>

      <div>
        <button onClick={handleIncrement}> inc</button>
        <p>counter = {counter}</p>
      </div>
    </>
  )
}

export default App