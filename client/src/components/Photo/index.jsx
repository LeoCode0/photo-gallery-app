import React from 'react'

import { MdDeleteForever, MdFavorite } from "react-icons/md";

export const Photo = ({ url, name, date = "Mon Jul 11 2022 12:33:03 GMT-0500"}, tags) => {
  const photoDate = new Date(date)
  const addToFav = () => {
    console.log("Added to favorites")
  }

  const deletePhoto = () => {
    console.log("Photo deleted")
  }
  console.log(tags)

  return (
    <div>
      <img src={url} alt={name} />
      <p>{name}</p>
      <p>{photoDate.getFullYear()}</p>
      <div>
        <button onClick={deletePhoto} ><MdDeleteForever /></button>
        <button onClick={addToFav} ><MdFavorite /></button>
      </div>
      {/* <ul>
        {tags.map(tag => <span>{tag}</span> )}
      </ul> */}
    </div>
  )
}
