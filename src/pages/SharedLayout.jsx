import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
            <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={ ( {isActive} ) => isActive? "active" : "" }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={ ( {isActive} ) => isActive? "active" : "" }>About</NavLink>   
                            </li>
                            <li>
                                <NavLink to="/starwarsCharacter" className={ ( {isActive} ) => isActive? "active" : "" }>May the force be with you!</NavLink>
                            </li>
                        </ul>
                        
                    </nav>
            </header>

            <Outlet />

            <footer>Footer</footer>
    </>
  )
}
