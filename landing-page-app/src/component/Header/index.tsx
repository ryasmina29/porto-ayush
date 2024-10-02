import { FC } from "react"
import './style.css';


const Header : FC = () => {
  return (
      <header className='nav-container'>
        <nav>
            <div>@Ayush Barnwal</div>
            <div className='nav-list'>
              <a href="/public">About</a>
              <a href="#work">Work</a>
            <a href="/contact-us">Contact</a>
            </div>
        </nav>
      </header>
  )
}

export default Header;
