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
    const {register, control, handleSubmit, formState} = form
    const {errors} = formState

    const onSubmit = (data: FormValues) => {
      console.log('Form submitted', data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' {...register('username', {
              required: 'Put username!'
            })} className='bg-slate-600'/>
            <p className='text-red-400'>{errors.username?.message}</p>

            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register('email', {
              pattern: {
                value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'This is not an email'
              },
              validate: {
                notBlackListed: (val) => {
                  return (
                    !val.endsWith('badmail.com') ||
                    "This domain is not supported"
                  )
                  },
                notAdmin: (val) => {
                return (
                  val === 'admin@gmail.com' ||
                  "Only admin email allow"
                )
                },
              
              }
              // admin@gmail.com
          
            })}  className='bg-slate-600'/>
             <p className='text-red-400'>{errors.email?.message}</p>

            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' {...register('channel')} className='bg-slate-600'/>

            <button className='rounded-md bg-sky-600 px-3 py-2 mt-2'>Submit</button>
        </form>
        {/* <DevTool control={control}/> */}
    </div>
  )
}
