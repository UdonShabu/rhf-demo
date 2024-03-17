'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type FormValues = {
  username: string
  email: string
  channel: string
}

export const YoutubeForm = () => {
    const form = useForm<FormValues>()
    const {register, control, handleSubmit} = form

    const onSubmit = (data: FormValues) => {
      console.log('Form submitted', data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' {...register('username')} className='bg-slate-600'/>

            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register('email')}  className='bg-slate-600'/>

            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' {...register('channel')} className='bg-slate-600'/>

            <button className='rounded-md bg-sky-600 px-3 py-2 mt-2'>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
