import React from 'react'

export const UploadPhoto = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const img = e.target.imgToUpload.files[0]

    console.log(img)

  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="file" name='imgToUpload' />
      <button type='submit'>Enviar</button>
    </form>
  )
}
