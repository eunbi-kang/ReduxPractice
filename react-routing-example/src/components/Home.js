/* 홈 페이지 */
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>🏠 Home page</h1>
        <p> Welcome to our website! Navigate using the links below:</p>
        <nav>
            <Link to="/about">About Us</Link><br/>
            <Link to="/products">Products</Link>
        </nav>
    </div>
  )
}

export default Home