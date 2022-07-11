import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

import styles from "./styles.module.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.input.value
    setSearch(value)
  }

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles.form} >
        <input type="text" placeholder='Search some photos...' name='input' />  
        <button type='submit' ><FaSearch /></button>
      </form> 
    </header>
  )
}
