import { useState } from 'react';
import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

} from 'firebase/auth';
import './App.css';
import {auth} from './firebase-config';


function App() {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  const register = async  () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async  () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async  () => {
    await signOut(auth);
  }

  return (
    <div className="App">
      <div>
        <h4>Register</h4>
        <input placeholder='email' 
        onChange={(event) => {
          setRegisterEmail(event.target.value)
        }}></input>

        <input placeholder='password'
        onChange={(event) => {
          setRegisterPassword(event.target.value)
        }}
        ></input>

        <button onClick={register}>Create user</button>
      </div>

      <div>
        <h4>Login</h4>
        <input placeholder='email'
        onChange={(event) => {
          setLoginEmail(event.target.value)
        }}
        ></input>

        <input placeholder='password'
        onChange={(event) => {
          setLoginPassword(event.target.value)
        }}
        ></input>

        <button onClick={login}>Login</button>
      </div>

      <div>
        <h3>User logged in: </h3>
        {user?.email}
      </div>

      <div>
        <button onClick={logout}>Sign Out: </button>
      </div>
    </div>
  );
}

export default App;
