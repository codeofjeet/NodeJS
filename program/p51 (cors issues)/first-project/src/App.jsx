import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    getUser();
  },[]);

  async function getUser(){
    let data = await fetch("http://localhost:3200/")
    data = await data.json()
    console.log(data)
  }
  return (
    <>
      
    </>
  )
}

export default App
