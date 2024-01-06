import {useEffect} from "react"

function App() {

useEffect(() => {
  fetch("/test").then((res) => res.json()).then((data) => {
    console.log(data)
  })
},[])



  return (
    <div >
        <p>Howdy!</p>
    </div>
  );
}

export default App;
