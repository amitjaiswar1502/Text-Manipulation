import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("");


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const onInit = ('load', function () {
    document.body.style.backgroundColor = '#FEFAE0';
    setColor('primary');
  })

  window.addEventListener('load', function () {
    onInit();
  })

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }

  const toggleColor = (cls) => {
    removeBodyClass();
    console.log(cls)
    document.body.classList.add('bg-' + cls);
    if (cls === 'primary') {
      setColor('#EB455F');
    } else if (cls === 'danger') {
      setColor('black');
    } else if (cls === 'success') {
      setColor('#472183');
    } else {
      setColor('purple');
    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#242648';
      showAlert("Dark mode has been enabled", "success");
      setColor('success');

    } else {
      setMode('light');
      document.body.style.backgroundColor = '#FEFAE0';
      showAlert("Light mode has been enabled", "success");
      setColor('primary');

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleColor={toggleColor} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my- 3">

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} >
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} color={color} heading="Try TextUtils - Word counter, Character counter, Removing extra spaces" mode={mode} />}>
            </Route>
          </Routes>


        </div>


      </Router>

    </>
  );
}

export default App;
