'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


export const YoutubeForm = () => {
    const form = useForm()
    const {register, control} = form

    const onSubmit = () => {
      // TODO: How can u submit and log data out with correct a type?
      console.log('Form submitted')
    }

  return (
    <div>
        <form onSubmit={}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' {...register('username')} />

            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register('email')} />

            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' {...register('channel')}/>

            <button >Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
