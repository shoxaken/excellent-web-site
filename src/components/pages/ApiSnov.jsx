import React from 'react'
import { useFetch } from './useFetch'

function ApiSnov() {
    const url = "https://excellentlc.uz/Vip/"
    const {data , error , isPending} = useFetch(url)
    console.log(data);
  return (
    <div>ApiSnov</div>
  )
}

export default ApiSnov