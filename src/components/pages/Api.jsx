import React from 'react'
import { useFetch } from './useFetch'
import CreateToq from './CreateToq';

function Api() {
    const url = "http://muhammadali2009.onrender.com"
    const {data ,isPending,  error , }= useFetch(url)
    console.log(data);
  return (
    <div className='container2'>
        <CreateToq/>
    </div>
  )
}

export default Api