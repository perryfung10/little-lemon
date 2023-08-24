import { useState, useReducer} from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BookingPage } from '../../pages/Reservation/BookingPage/BookingPage';
import { HomePage } from "../../pages/Home/HomePage";
import { ConfirmedBooking } from "../../pages/Reservation/ComfirmedBooking/ConfirmedBooking";
import { fetchAPI, submitAPI } from "../../utils/Api";



// export const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
export const initializeTimes = (initialAvailableTimes) => 
  [...initialAvailableTimes , ...fetchAPI(new Date())]


export const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes
}


export const Main = ({chidlren}) => {

    

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

    
    

    const navigate = useNavigate();
   
  const submitForm = (formData) => {
    
    if(submitAPI(formData)){
      navigate("/successful")
    }
    
}
  
  // const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; 

  
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);



  // if(action.type === availableTimes[0]){
  //   return availableTimes.filter((availableTime)=> availableTime !== action.payload)
  // }
  

return (

    <main>
      <Routes>
            <Route path='/' element={<HomePage/>} />
            {/* <Route path='/menu' element={<Menu />} />  */}
            <Route path='/reservation' element={<BookingPage formData={formData} setFormData={setFormData} availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
            <Route path="/successful" element={<ConfirmedBooking navigate={navigate} formData={formData}/>} />
            {/* <Route path='/order-online' element={<OrderOnline />} />
            <Route path='/login' element={<Login />} />  */}
          </Routes>
    </main>
)

}

