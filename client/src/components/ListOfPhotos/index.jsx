import React from 'react'
import { Photo } from "../Photo";

export const ListOfPhotos = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(pic => <Photo name={pic.name} url={pic.url} tags={["dogs", "cat", "buildings"]}  /> )}
    </ul>
  )
}
