import React from "react";
import { IoLogoVenmo } from "react-icons/io5";


import '../Header.css';


export function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <IoLogoVenmo/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
               PATIENT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CALENDER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  USERS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  BILLING
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
       
         
          
          </div>

      
        
       
      
   
  );
}
