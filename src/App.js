import { useEffect, useState } from 'react';
import './App.css';
import Main from './Main';

function App() {
  const[theme,setTheme]=useState("dark")
  useEffect(()=>{
   if(theme==="dark"){
    document.body.style.background="#141D2F"
  }else{
    document.body.style.background="#F2F2F2"
  }
  },[theme])
  const toggleThem =()=>{
    setTheme((curr)=>(curr==="dark"?"light": "dark"))
  }
  //console.log(theme)
  return (
    <div className={theme}>
     <Main toggle={toggleThem} theme={theme}/>
    </div>
  );
}

export default App;
