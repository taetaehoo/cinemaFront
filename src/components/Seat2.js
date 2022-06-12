import axios from "axios";
import React, { useState, useEffect } from "react";

const Seat2 = ({ onClick, time , seats}) => {
  
   
    const checkReserve = () => {
        const lis = document.querySelectorAll(".seat");
        for (let i = 0; i < seats.length; i++) {
            for(let j = 0; j < lis.length; j++) {
                

                if(seats[i].seat_column === lis[j].getAttribute("data-row") &&
                seats[i].seat_number === parseInt(lis[j].getAttribute("data-col"))) {
                    lis[j].classList.add("disabled");
                }
            }
        }
        
    }
    
    useEffect(() => {
        checkReserve();
    }, [seats]);
    
  return (
    <div class="seats">
      <div>
        <div class="row">
          <div class="seat_group">
            <ul id="seat">
              <span class="label">A</span>
              <li class="seat" data-row="A" data-col="1" onClick={onClick}></li>
              <li class="seat" data-row="A" data-col="2" onClick={onClick}></li>
              <li class="seat" data-row="A" data-col="3" onClick={onClick}></li>
              <li class="seat" data-row="A" data-col="4" onClick={onClick}></li>
              <li class="seat" data-row="A" data-col="5" onClick={onClick}></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="seat_group">
            <ul id="seat">
              <span class="label">B</span>
              <li class="seat" data-row="B" data-col="1" onClick={onClick}></li>
              <li class="seat" data-row="B" data-col="2" onClick={onClick}></li>
              <li class="seat" data-row="B" data-col="3" onClick={onClick}></li>
              <li class="seat" data-row="B" data-col="4" onClick={onClick}></li>
              <li class="seat" data-row="B" data-col="5" onClick={onClick}></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="seat_group">
            <ul id="seat">
              <span class="label">C</span>
              <li class="seat" data-row="C" data-col="1" onClick={onClick}></li>
              <li class="seat" data-row="C" data-col="2" onClick={onClick}></li>
              <li class="seat" data-row="C" data-col="3" onClick={onClick}></li>
              <li class="seat" data-row="C" data-col="4" onClick={onClick}></li>
              <li class="seat" data-row="C" data-col="5" onClick={onClick}></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="seat_group">
            <ul id="seat">
              <span class="label">D</span>
              <li class="seat" data-row="D" data-col="1" onClick={onClick}></li>
              <li class="seat" data-row="D" data-col="2" onClick={onClick}></li>
              <li class="seat" data-row="D" data-col="3" onClick={onClick}></li>
              <li class="seat" data-row="D" data-col="4" onClick={onClick}></li>
              <li class="seat" data-row="D" data-col="5" onClick={onClick}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat2;
