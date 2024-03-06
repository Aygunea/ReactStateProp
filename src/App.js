import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [info, setInfo] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <Form
        name={name}
        surname={surname}
        info={info}
        age={age}
        gender={gender}
        onNameChange={handleNameChange}
        onSurnameChange={handleSurnameChange}
        onInfoChange={handleInfoChange}
        onAgeChange={handleAgeChange}
        onGenderChange={handleGenderChange}
      />
      <div>
        <p>Ad: {name}</p>
        <p>Soyad: {surname}</p>
        <p>Məlumat: {info}</p>
        <p>Yaş: {age}</p>
        <p>Cins: {gender}</p>
      </div>
    </div>
  );
}

export default App;
