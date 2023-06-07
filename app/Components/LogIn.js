'use client'

import { signIn } from 'next-auth/react'


export default function LogIn(){
    return <button className='LoginBtn'  onClick={()=>{ signIn() }}>로그인</button>

    
    
}