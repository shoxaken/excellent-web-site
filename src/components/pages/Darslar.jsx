import React from 'react'
import { Link } from 'react-router-dom'

function Darslar() {
  return (
    <div className='container2'>
      <div className="toq_kunlar">
      <Link to='/toqkunlar'>Dushanba/Chorsanba/Juma</Link><br /><br />
      <Link to='/juftkunlar'>Seshanba/Payshanba/Shanba</Link>
      </div>
    </div>
  )
}

export default Darslar