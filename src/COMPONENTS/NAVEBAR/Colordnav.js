import React from 'react'

export default function Colordnav() {
  return (
    <>
    <nav className='navbar navbar-expand-lg fixed-top navbar-bg'>
        <div className="container-fluid">
          <label className="navbar-brand logo">K</label>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center"  id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Fav">
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cart">
                  Shopping bag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
