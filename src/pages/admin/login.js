import React, { useState } from "react";
import Header from "../../components/header";
import { database } from "../../firebase";
import { ref, push, child, update } from "firebase/database";
import "../../components/style.css";

const Login = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = () => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div class="footer">
          <button onClick={()=>handleSubmit()} type="submit" class="btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
