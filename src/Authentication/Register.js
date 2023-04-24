import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Register() {
  const Navigatereg = useNavigate()
  useEffect(() => {
   if(localStorage.getItem('user-info'))
   {
    Navigatereg("/add")
   }
  }, [])
  

  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const Navigate = useNavigate();

  async function Signup() 
  {
    let item = {Name,Password,Email}
    console.log(item); 

    let result = await fetch("https://jsonplaceholder.typicode.com/users",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    result = await result.json()
    console.log(result);
    localStorage.setItem("user-info",JSON.stringify(result))
    //history.push("/add")
    Navigate("/add")
   
  }

  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
      <h1>Register Page</h1>
      <input type='text' value={Name}  onChange={(e) => setName(e.target.value)} className='form-control' placeholder='name'/>
      <br/>
      <input type='password'value={Password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password'/>
      <br/>
      <input type='email' value={Email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='email'/>
      <br/>
      <button onClick={Signup} className='btn btn-primary'>Sign up</button>
      
    </div>
    </>
  )
}

export default Register