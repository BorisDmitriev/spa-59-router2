import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to={"/"}>back to the Home Page..</Link>
    </>
  )
}
