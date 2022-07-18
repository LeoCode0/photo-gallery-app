import React from 'react'
import styles from "./styles.module.css"
import { MdDeleteForever, MdFavorite } from "react-icons/md";

export const Photo = ({ url, name, date, tags}) => {
  const photoDate = new Date(date)
  const addToFav = () => {
    console.log("Added to favorites")
  }

  const deletePhoto = () => {
    console.log("Photo deleted")
  }

  return (
    <div className={styles.container} >
      <img src={url} alt={name} />
      <p>{name}</p>
      <p>{photoDate.getFullYear()}</p>
      <div>
        <button onClick={deletePhoto} ><MdDeleteForever /></button>
        <button onClick={addToFav} ><MdFavorite /></button>
      </div>
      <ul>
        {tags.map(tag => <span>{tag}</span> )}
      </ul>
    </div>
  )
}
