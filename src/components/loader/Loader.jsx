import React from "react";
import style from  './loader.module.css'

export default function Loader() {
  return (
    <div className={` my-5 position-relative ${style.loading} d-flex justify-content-center align-items-center` }>
      <div className={`${style.load} `} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    
  );
}
