/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Clock extends Component {
 state = {
   h: 0,
   m: 0,
   s: 0,

 };

 interval = null;

 componentDidMount= () => {
   this.setTime();
 }


 setTime = () => {
   this.interval = setInterval(() => {
     const C = new Date();

     const hours = C.getHours();
     const minutes = C.getMinutes();
     const seconds = C.getSeconds();


     this.setState({
       h: hours,
       m: minutes,
       s: seconds,
     });
   }, 1000);
 }

 render() {
   const { h, m, s } = this.state;
   const unit12 = 360 / 12; // 30
   const unit60 = 360 / 60; // 6
   const hourunit = unit12 / 60;
   const minuteunit = unit60 / 60;
   return (

     <>

       <p>clock - {this.state.h} {this.state.m} {this.state.s}  {(this.state.h > 12) ? 'PM' : 'AM' }</p>
       <div className="clock">

         <div className="hr" style={{ transform: `rotateZ(${((h % 12) * unit12 + (hourunit))}deg)` }} />
         <div className="min" style={{ transform: `rotateZ(${(m * unit60) + (minuteunit)}deg)` }} />
         <div className="sec" style={{ transform: `rotateZ(${(s * unit60) + (hourunit + minuteunit)}deg)` }} />
       </div>


     </>
   );
 }
}


export default Clock;
const countDownDate = new Date('Jan 5, 2021 15:37:25').getTime(); // Update the count down every 1 second
