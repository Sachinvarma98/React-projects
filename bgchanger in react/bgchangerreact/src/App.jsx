import { useState } from "react";

function App() {
  const [color, setColor] = useState("orange");
  return (
    < >
    <div> 
      <h1 className="text-4xl bg-slate-500 justify-center text-center font-bold m-2 p-2 rounded-xl"> Change your background colour according to your mood </h1>
    </div>
      <div className="w-full h-screen "
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl"> 
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            > Red </button>
             <button onClick={() => setColor("lime")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "lime"}}
            > Lime </button>
             <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            > Green </button>
             <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "orange"}}
            > Orange </button>
             <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}
            > Yellow </button>
             </div>
            </div>
      </div>
    </>
  );
}

export default App;
