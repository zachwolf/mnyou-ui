import React from 'react'
import NavLink from '@atoms/NavLink'

export default function NavList ({ sm = false }) {
  return (
    <ul className={sm ? "pt-2 pb-3 space-y-1" : "hidden sm:ml-6 sm:flex sm:space-x-8"}>
      <li className="flex">
        <NavLink to="/" sm={sm}>
          About Us
        </NavLink>
      </li>
      <li className="flex">
        <NavLink to="/partners" sm={sm}>
          Partners
        </NavLink>
      </li>
      <li className="flex">
        <NavLink to="/csa" sm={sm}>
          Join our CSA
        </NavLink>
      </li>
    </ul>
  )
}
