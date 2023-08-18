import { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BookingPage } from '../pages/Reservation/BookingPage';
import { Booking } from '../pages/Reservation/Booking';
import { HomePage } from "../pages/Home/HomePage";
import { SuccessfulPage } from "../pages/Successful Page/SuccessfulPage";

export const Main = () => {

  const navigate = useNavigate()



  const [formData, setFormData] = useState(
    {
        lastName: {
          value: "",
          error: "",
        },
        firstName: {
          value: "",
          error: "",
        },
        email: {
          value: "",
          error: "",
        },
        date:{ 
          value: "",
          error: ""
        },
        time: {
          value: "",
          error: "",
        },
        numberOfGuests : {
          value: 1,
          error: "",
        },
        occasion: "",
    }
);
   
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  // const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; 

  const updateTimes =  (availableTimes, action) => {
    if(action.type === "17:00") return ["18:00", "19:00", "20:00", "21:00", "22:00"];
    if(action.type === "18:00") return ["17:00", "19:00", "20:00", "21:00", "22:00"];
    if(action.type === "19:00") return ["17:00", "18:00", "20:00", "21:00", "22:00"];
    if(action.type === "20:00") return ["17:00", "18:00", "19:00", "21:00", "22:00"];
    if(action.type === "21:00") return ["17:00", "18:00", "19:00", "20:00", "22:00"];
    if(action.type === "22:00") return ["17:00", "18:00", "19:00", "20:00", "21:00"];
   
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  

  // if(action.type === availableTimes[0]){
  //   return availableTimes.filter((availableTime)=> availableTime !== action.payload)
  // }
  

return (

    <main>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            {/* <Route path='/menu' element={<Menu />} />  */}
            <Route path='/reservation' element={<BookingPage formData={formData} setFormData={setFormData} availableTimes={availableTimes} dispatch={dispatch} />} />
            <Route path="/successful" element={<SuccessfulPage navigate={navigate}/>} />
            <Route path='/bookingdetails' element={<Booking formData={formData} />} /> 
            {/* <Route path='/order-online' element={<OrderOnline />} />
            <Route path='/login' element={<Login />} /> 
            <Route path='/successful' element={<SuccessfulPage />} /> */}
          </Routes>
      </main>
)

}

