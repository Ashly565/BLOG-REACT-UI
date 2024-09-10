import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div  className="sidebar">
        <div className="sidebaritems">
          <span className="title" >ABOUT ME</span>
          <img  className="img2"
          src="https://imgs.search.brave.com/rrMrLehy4EgpEjp8EhYNU8bxXpRR3x3-N-Cpx6eWn_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU5/NzQwNjU3OC9waG90/by9oYXBweS13b21h/bi1zaWdodHNlZWlu/Zy1pbi1sb25kb24u/d2VicD9iPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dG5yS1Ju/WXdfa2o0OFU0SF95/MjZlbEdpcDlsMXZh/OVhvMk41NXVEM3Vt/VT0"
            alt=""
          />
          <p style={{width:"250px",textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab a vitae! Aliquam, nulla minima eum praesentium alias asperiores ab officia dolores 
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATOGORIES</span>
          <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>

          </ul>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial ">
            <i class="sidebarIcon fa-brands fa-facebook"></i>
            <i class=" sidebarIcon fa-brands fa-square-twitter"></i>
            <i class="sidebarIcon fa-brands fa-instagram"></i>
            <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>

      </div>
  )
}

export default Sidebar