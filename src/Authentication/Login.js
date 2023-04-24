import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Login() {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const Navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('user-info'))
   {
    Navigate("/add")
   }
  }, [])

  async function login() {
    console.log(Email,Password);
    let item = {Email,Password}
    console.log(item);
    let apiresult = await fetch("https://jsonplaceholder.typicode.com/users",{
      method:"POST",
      headers:{
      "Content-Type" : "application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(item)
    });

    apiresult = await apiresult.json();
    localStorage.setItem("user-info",JSON.stringify(apiresult))
    Navigate("/add")
  }
  
  return (
    <div>
       <Header />
      <h1>Login Page</h1>
      <div className='col-sm-6 offset-sm-3'>
      <input type='email' placeholder='email' 
      onChange={(e) => setEmail(e.target.value)} className='form-control' />
      <br/>
      <input type='password' placeholder='password' 
      onChange={(e) => setPassword(e.target.value)} className='form-control' />
      <br/>
      <button onClick={login} className='btn btn-primary'>Login</button>
      </div>
    </div>
  )
}

export default Login