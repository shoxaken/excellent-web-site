import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from './useFetch';
// import Create from './Create';
import CreateToq from './CreateToq';
import Create from './Create';
import Juft from './Jusf';

function Davomat_Toq({davomat}) {
//   const { id } = useParams()
  // console.log(id);
  const url = `https://excellentlc.uz/toqapi/${davomat}`
  const { data, isPending, error } = useFetch(url)
  console.log("salom",data);
  return (
    <div className='container2 create3'>
      {isPending && <div>Loding...</div>}
      {error && <div>{error}</div>}
      {data && <div key={data.id}>
        <h3 className='davomat-text'>Gurux nomi :{data.ism}</h3>
        <table className='davomat-tabels'>
          <tr>
            <th>O'quvchilar</th>
          </tr>
          <tr>
            <td>{data.oquvchi1}</td>
          </tr>
          <tr>

            <td>{data.oquvchi2}</td>
          </tr>
          <tr>
            <td>{data.oquvchi3}</td>
          </tr>
          <tr>

            <td>{data.oquvchi4}</td>
          </tr>
          <tr>

            <td>{data.oquvchi5}</td>
          </tr>
          <tr>

            <td>{data.oquvchi6}</td>
          </tr>
          <tr>

            <td>{data.oquvchi7}</td>
          </tr>
          <tr>

            <td>{data.oquvchi8}</td>
          </tr>
          <tr>

            <td>{data.oquvchi9}</td>
          </tr>
          <tr>

            <td>{data.oquvchi10}</td>
          </tr>
          <tr>

            <td>{data.oquvchi11}</td>
          </tr>
          <tr>

            <td>{data.oquvchi12}</td>
          </tr>
          <tr>

            <td>{data.oquvchi13}</td>
          </tr>
          <tr>

            <td>{data.oquvchi14}</td>
          </tr>
          <tr>

            <td>{data.oquvchi15}</td>
          </tr>






        </table>
      </div>}
      <div className="create2"><br /><br /><br />

      {/* <Create/> */}
      <CreateToq/>
      </div>
      {/* <Juft/> */}
      {/* <Link to={'/createkorish'}>Davomat qilish</Link> */}
    </div>
  )
}

// export default Davomat_juft
export default Davomat_Toq