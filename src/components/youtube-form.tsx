'use client'
import React from 'react'
import { useForm } from 'react-hook-form'


export const YoutubeForm = () => {
    const form = useForm()
    const {register} = form
    // TODO: Connect this to each field with a short way
    const {name, ref, onBlur, onChange} = register('username')

  return (
    <div>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' />

            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' />

            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' name='channel' />

            <button >Submit</button>
        </form>
    </div>
  )
}
