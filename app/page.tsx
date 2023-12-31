"use client";

import TopForm from '@/components/TopForm'
import { IItem } from '@/interface';
import React, { useState } from 'react'

const page = () => {


  const [items, setItems] = useState<IItem[]>([])
  const [filter, setFilter] = useState<string>("")


  return (

    <div className='flex flex-col items-center h-screen bg-slate-400 p-8 justify-center' >
      <div className='bg-slate-500 px-6 py-8 w-[400px]  rounded-xl gap-4'>
        <TopForm items={items} setItems={setItems} filter={filter} setFilter={setFilter} />
      </div>

    </div>
  )
}

export default page
