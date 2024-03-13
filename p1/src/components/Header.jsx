import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';

export default function Header() {
  return (
    <nav>
        <h1>Techstar.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/Contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
    </nav>
  )
}
