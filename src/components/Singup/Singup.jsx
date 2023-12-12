import React, { useState } from 'react'
import styles from "./singup.css"
import InputControl from '../InputControl/InputControl'
import { Link , useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../../firebase';
function Singup() {
  const navigate=useNavigate()
  const [values ,  setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg , setErrorMsg] = useState("")
  const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false)
  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields")
      return;
    }
    setErrorMsg("")
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res) => {
      setSubmitButtonDisabled(false)
      const user=res.user
      await updateProfile(user,{
        displayName: values.name,
      })
      navigate("/home")
    }
  )
  .catch((err)=>{
    setSubmitButtonDisabled(false)
    setErrorMsg(err.message)
  });
  };
  return (

    <div className="container1">
      <div className="innerBox">
        <h1 className={styles.heading}>Singup</h1>
        <InputControl label="Name"  placeholder='Enter your Name' onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <InputControl label="Email"  placeholder='Enter email address' onChange={(event) => setValues((prev) => ({ ...prev, email :event.target.value }))} />
        <InputControl label="Password"  placeholder='Enter Password' onChange={(event) => setValues((prev) => ({ ...prev, pass :event.target.value }))} /> 
        <div className='footer'>
          <b className='error'>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled} className='text-sing'>Singup</button>
          <p>Already have an account? { " " } <span><Link to="/login">Login</Link></span></p>
        </div>
        
      </div>
    </div>
  )
}

export default Singup