import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Trabalho</Link>
                </li>
                <li>
                    <Link to="/UseState">Propriedade 1</Link>
                </li>
                <li>
                    <Link to="/UseEffect">Propriedade 2</Link>
                </li>
                <li>
                    <Link to="/UseContext">Propriedade 3</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu