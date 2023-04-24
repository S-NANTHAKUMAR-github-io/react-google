import React from 'react'
import Header from './Header'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Protected() {
  const Navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('user-info'))
   {
    Navigate("/register")
   }
  }, [])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Protected