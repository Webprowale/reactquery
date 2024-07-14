import Link from 'next/link'
import React from 'react'
import { Pencil,Trash } from 'lucide-react'
const ButtonAction = () => {
  return (
    <div className='mb-5'>
    <Link href='/edit/1' className='mr-3 btn btn-success'><Pencil /> Edit</Link>
    <button className='btn btn-error '><Trash /> Delete</button>
    </div>
  )
}

export default ButtonAction