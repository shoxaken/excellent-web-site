import React from 'react'

function Filter() {
  return (
    <div>
        <select name="" id="">
            <option value={0}>Filter by Region</option>
            <option value={"english"}>English</option>
            <option value={"rus"}>Rus tili</option>
            <option value={"arab"}>Arab tili</option>
            <option value={"metal"}>Metal</option>
        </select>
    </div>
  )
}

export default Filter