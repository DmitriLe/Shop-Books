import React, { useState } from 'react'

export default function Registration() {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <div className='registration'>
        <form className='form'>
          <h1 className='form_title'>Регистрация</h1>
          <div className='form_group'>
          <input className='form_input' name='email' type='text' placeholder='email' />
          </div>
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='логин' />
          </div>
          <div className='form_group'>
          <input className='form_input' name='password' type='text' placeholder='пароль' />
          </div>
          <button className='form_button' type='submit'>Регистрация</button>
        </form>
      </div>
    )
}

