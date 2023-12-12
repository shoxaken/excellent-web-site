import React from 'react'
import { useFetch } from './useFetch'
import './bor.css'
import { Link } from 'react-router-dom'

function BorToq({setDavomat}) {
  const url = "https://excellentlc.uz/toqapi/"
  const { data, isPending, error } = useFetch(url)
  const handleClick = (ism)=>{
    setDavomat(ism)
  }
  console.log(data);
  return (
    <div className='container2'>

      <div className='recipe-list'>
        {isPending && <div>Loding....</div>}
        {error && <div>{error}</div>}
        {data && data.map(item => {
          return (
            <div className='card' key={item.id}><br />
              <h3>Gurux nomi: <br /> {item.ism}</h3>
              <p>Gurux vaqti: {item.gurux_vaqti}</p>
              <p>Qaysi ustoz: {item.qaysi_ustoz}</p>
              <p>Qaysi ustoz: {item.qaysi_fan}</p>
              <Link to={`/${item.ism}`} onClick={()=>handleClick(`${item.ism}`)}>Davomat toq kunlar uchun</Link>
              <Link to={"/DavomatniKorishToq"}>Davomatni Korish</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BorToq