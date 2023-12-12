import React, { useState } from 'react'
import { useFetch } from './useFetch'
import { Navigate, useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const [ism, setIsm] = useState('')
  const [oquvchi1_davomat, setOquvchi1_davomat] = useState('')
  const [oquvchi2_davomat, setOquvchi2_davomat] = useState('')
  const [oquvchi3_davomat, setOquvchi3_davomat] = useState('')
  const [oquvchi4_davomat, setOquvchi4_davomat] = useState('')
  const [oquvchi5_davomat, setOquvchi5_davomat] = useState('')
  const [oquvchi6_davomat, setOquvchi6_davomat] = useState('')
  const [oquvchi7_davomat, setOquvchi7_davomat] = useState('')
  const [oquvchi8_davomat, setOquvchi8_davomat] = useState('')
  const [oquvchi9_davomat, setOquvchi9_davomat] = useState('')
  const [oquvchi10_davomat, setOquvchi10_davomat] = useState('')
  const [oquvchi11_davomat, setOquvchi11_davomat] = useState('')
  const [oquvchi12_davomat, setOquvchi12_davomat] = useState('')
  const [oquvchi13_davomat, setOquvchi13_davomat] = useState('')
  const [oquvchi14_davomat, setOquvchi14_davomat] = useState('')
  const [oquvchi15_davomat, setOquvchi15_davomat] = useState('')
  const [date, setDate] = useState('')
  const { data, isPending, error, postData } = useFetch("https://excellentlc.uz/keldiadd/"
    , "POST")
  console.log(data);
  const handleAdd = (e) => {
    e.preventDefault()

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ ism, oquvchi1_davomat, oquvchi2_davomat, oquvchi3_davomat, oquvchi4_davomat, oquvchi5_davomat, oquvchi6_davomat, oquvchi7_davomat, oquvchi8_davomat, oquvchi9_davomat, oquvchi10_davomat, oquvchi11_davomat, oquvchi12_davomat, oquvchi13_davomat, oquvchi14_davomat, oquvchi15_davomat, date });
  }
  return (
    <div className='create container2'>
      <div className='create '>
        <form action="" className='creat-form' onSubmit={handleSubmit}>
          <label htmlFor="ism" className='guruxNomiName'>Gurux nomi</label>
          <input type="text" id="ism" required autoFocus onChange={() => setIsm(event.target.value)} />
          <label htmlFor="">Davomat olingan sana</label>
          <input type="date" id="ism" required autoFocus onChange={() => setDate(event.target.value)} />

          <select name="" id="" onChange={() => setOquvchi1_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi2_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi3_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi4_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi5_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi6_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi7_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi8_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi9_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi10_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi11_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi12_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi13_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi14_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>
          <select name="" id="" onChange={() => setOquvchi15_davomat(event.target.value)}>
            <option value="----">-----</option>
            <option value="keldi">keldi</option>
            <option value="kelmadi">kelmadi</option>
            <option value="sababsiz">Sababsiz</option>
          </select>


          <button>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Create