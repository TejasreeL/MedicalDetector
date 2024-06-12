import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <Link className="navbar-brand fs-2 fst-italic text-white" to="/">
          MediPrev
        </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className="nav-link text-white" to="/">
                Home
              </Link>      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/">
                Features
              </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/">
                Predict
              </Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )
}
