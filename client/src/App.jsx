import React from 'react'
import { SearchBar } from "./components/SearchBar";
import { ListOfPhotos } from "./components/ListOfPhotos";
import { UploadPhoto } from "./components/UploadPhoto";

import "./globalStyles.css"

export const App = () => {
  const imgs = [
    {
      url: "https://picsum.photos/600",
      name: "Picsum photos",
      tags: ["dogs", "cat", "buildings"]
    }
  ]
  return (
    <>
      <SearchBar />
      <ListOfPhotos pictures={imgs} />
      <UploadPhoto />
    </>
  )
}
