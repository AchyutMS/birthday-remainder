import React , { useState, useEffect } from 'react';
import './App.css';
import BirthdayList from './components/BirthdayList';
import Form from './components/Form';

function App() {

  const [name,setName] = useState('');
  const [dob,setDob] = useState('')

  const [birthdays,setBirthdays] = useState([]);

  return (
    <div>
      <header>
        <h1>Birthday Remainder</h1>
      </header>
      <Form 
        name={name} 
        setName={setName} 
        dob={dob}
        setDob={setDob}
        birthdays={birthdays}
        setBirthdays={setBirthdays}
        />
      
      <BirthdayList birthdays={birthdays} setBirthdays={setBirthdays}/>
    </div>
  );
}


export default App;