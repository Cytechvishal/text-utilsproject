
import { useState } from 'react';
import './App.css';
import BasicExample from './comonents/about';
import NavScrollExample from './comonents/navabar';
import TextForm from './comonents/TextForm';

import AlertComponent from './comonents/alert';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light')
  const [alertMsg, setAlertMsg] = useState(null)

  const showMassage =(massage, variant)=>{
    setAlertMsg({
      massage:massage,
      variant:variant
    })
      setTimeout(()=>{
        setAlertMsg(null)
      }, 1500)

  }

  const handleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0b0c44'
      showMassage('Dark Mode is Enable ', "primary")
      document.title='TextUtils-Dark Mode'

    }else{
      setMode('light')
       document.body.style.backgroundColor = 'white'
       showMassage('Light Mode is Enable ', "success")
       document.title='TextUtils-Light Mode'
    }
  }

  
  return (
    <div className="App">
      
      

      <BrowserRouter>
      
      <NavScrollExample brand="TextUtils" mode={mode} toggleMode={handleMode}  />
      <AlertComponent alertMassage={alertMsg} />
      <Routes>
        <Route path="/" element={<TextForm showMassage={showMassage} mode={mode}  heading="Enter Text here" />}  />{/* 👈 Renders at /app/ */}
        <Route path='/about' element={ <BasicExample />}/>
      </Routes>
     
      
    </BrowserRouter>

      
     
    </div>
  );
}

export default App;
