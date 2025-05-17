import React from "react";
import { Link } from "react-router-dom";
import style from  './footer.module.css'

export default function Footer() {
  return (
    // Start Footer from BootStrap
    <footer className= {`${style.footer}  pt-5`} >
      <div className= {`container  d-flex  justify-content-between align-items-center gap-5 `} >
      <div className= {` ${style.card} col-md-3`}  >
        <div className="card-body">
          
          <p className="card-text">Work by <span className={`fs-4 fw-bold ms-1`}> Moshera Saaidah</span>  </p>
          <p className="card-text">mosherasaaidah@gmail.com </p>
        </div>
      </div>
      <div className= {` ${style.card} col-md-3 `} >
        <div className="card-body">
          <h3 className="card-title">My Accounts</h3>

          <Link to={" https://www.facebook.com/"} className= {` ${style.linkStyle} rounded-pill `}>
         <i className="fa-brands fa-facebook" />

         
          </Link>
          <Link to={" "} className={` ${style.linkStyle} rounded-pill `}>
          <i className="fa-brands fa-instagram" />

          </Link>
          <Link to={"https://www.linkedin.com/in/moshera-saaidah"} className={` ${style.linkStyle} rounded-pill `}>
         <i className="fa-brands fa-linkedin" />

          </Link>
        </div>
      </div>
      </div>
    </footer>
    // End Footer from BootStrap
  );
}
