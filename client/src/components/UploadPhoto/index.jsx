import React, { useState} from 'react'

import { Photo } from "../Photo";

export const UploadPhoto = () => {
  const [imgData, setImgData] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    const img = e.target.imgToUpload.files[0]
    formData.append("file", img)
    formData.append("cloud_name", "leocode0")
    formData.append("upload_preset", "PlatziChallenge")
    fetch("https://api.cloudinary.com/v1_1/leocode0/image/upload", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImgData(data)
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="file" name='imgToUpload' />
        <button type='submit'>Enviar</button>
      </form>
      {imgData && <Photo url={imgData.url} date={imgData.createdAt} tags={imgData.tags} name={imgData.public_id} /> }
    </>
  )
}
