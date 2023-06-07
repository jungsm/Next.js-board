'use client'

import { signOut } from 'next-auth/react'


export default function LogOut(){
    return  <button className='LoginBtn' onClick={()=>{ signOut()}}>로그아웃</button>

    
    
}