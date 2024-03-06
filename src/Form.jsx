import React from "react";
import Input from "./Input";

const Form = ({
  name,
  surname,
  info,
  age,
  gender,
  onNameChange,
  onSurnameChange,
  onInfoChange,
  onAgeChange,
  onGenderChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Ad"
        value={name}
        onChange={onNameChange}
      />
      <Input
        name="surname"
        placeholder="Soyad"
        value={surname}
        onChange={onSurnameChange}
      />
      <Input
        name="info"
        placeholder="Məlumat"
        value={info}
        onChange={onInfoChange}
      />
      <Input name="age" placeholder="Yaş" value={age} onChange={onAgeChange} />
      <label htmlFor="female">Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "Male"}
        onChange={onGenderChange}
      />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "Female"}
        onChange={onGenderChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
