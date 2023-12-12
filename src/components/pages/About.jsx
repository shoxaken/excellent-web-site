import React from 'react'
import { Typography } from 'antd'
import { useFetch } from './useFetch'
function About() {
  const url = "https://excellentlc.uz/Fanlar/"
  const {data , error , isPending} = useFetch(url)
  console.log(data);
  return (
    <div className='container2'>
      <h1>Fanlar</h1>
      {isPending && <div>Loding...</div>}
      {error && <div>{error}</div>}
      {data && data.map(item=>{
        return(
          <div key={item.id}>
            <p>{item.nomi}</p>
          </div>
        )
      })}

    </div>
  )
}

export default About