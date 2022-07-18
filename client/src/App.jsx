import React from 'react'
import { SearchBar } from "./components/SearchBar";
import { ListOfPhotos } from "./components/ListOfPhotos";
import { UploadPhoto } from "./components/UploadPhoto";

import "./globalStyles.css"

export const App = () => {
  return (
    <>
      <SearchBar />
      <ListOfPhotos />
      <UploadPhoto />
    </>
  )
}
