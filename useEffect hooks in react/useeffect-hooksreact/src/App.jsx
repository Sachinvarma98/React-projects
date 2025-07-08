import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    onlyOneCall();
  }, [counter]);

  useEffect(() => {
    onecall();
  }, [data]);

  useEffect(() => {
    called();
  }, [update, data, counter]);

  function onlyOneCall() {
    console.log("Can be called only one time by clicking counter");
  }
  function onecall() {
    console.log("called by 1 time by clicking data");
  }
  function called() {
    console.log("called by clicking on data, counter and update "); //confusing topics
  }

  return (
    <div>
      <h1>useEffect Hooks of counter {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>
        {" "}
        inc Counter {counter}
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        {""}
        Dec counter {counter}
      </button>
      <h1>useEffect Hooks of data {data} </h1>
      <button onClick={() => setData(data + 1)}>Inc data {data}</button>
      <button onClick={() => setData(data - 1)}>Dec data {data}</button>
      <h1>useEffect Hooks of update {update} </h1>
      <button onClick={() => setUpdate(update + 1)}>Inc update {update}</button>
      <button onClick={() => setUpdate(update - 1)}>Dec update {update}</button>
    </div>
  );
}

export default App;
