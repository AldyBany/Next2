import React from 'react'
import Link from 'next/link'
import {useEffect} from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {

    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
  return (
    <div>
        <h1>This page Does Not Exit , Sorry!</h1>
        <Link  href="/"><a>Goback home</a></Link>
        
    </div>
  )
}

export default NotFound