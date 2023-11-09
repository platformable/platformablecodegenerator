import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <section className="footer-bg py-5">
    <div class="container d-flex align-items-center">
    <a class="" href="#">
      <img
        src="https://platformable.com/_next/static/media/Platformable-logo-white.3c69426c.png"
        alt="Logo"
            width={240}
      />
    </a>

 
      <ul class="navbar-nav ms-auto d-flex flex-row justify-content-between align-items-center">
      
        <li class="nav-item "> <Link href="mailto:mark@platformable.com">
                <img src="https://platformable.com/email.svg" className="text-white" alt="email" />
              </Link>
           
           </li>
        <li class="nav-item ">   <Link
                href="https://www.linkedin.com/company/platformable/"
                className="text-white"
                target="_blank"
              >
                <img src="https://platformable.com/Linkedin.svg" alt="linkedin" />
              </Link></li>
        <li class="nav-item ">   <Link
                href="https://tidal.com/browse/mix/0105d4b80651774ef38931747c080a"
                target="_blank"
              >
                <img
                  src="https://platformable.com/tidal_footer.svg"
                  className="text-white"
                  alt="tidal"
                />
              </Link></li>
      </ul>
 
  </div>
  </section>
  )
}
