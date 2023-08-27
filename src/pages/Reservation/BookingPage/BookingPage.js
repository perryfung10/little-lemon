import "./BookingPage.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { BookingForm } from "../../../components/BookingForm/BookingForm";


export const BookingPage = ({formData, setFormData, availableTimes, dispatch, submitForm}) => {

    
    const availableOccasions = ["Birthday", "Engagement", "Anniversary"]


    const formValidation = formData.lastName.value.length > 3 && formData.email.value.length > 10 &&  formData.date.value  && formData.time.value !== "choose time" && formData.numberOfGuests.value > 0 && formData.numberOfGuests.value < 21 

    const navigate = useNavigate();


    const handleChange = (fieldName, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [fieldName]: {
                ...prevFormData[fieldName],
                value: value,
                error: ""
            }
        }))

        if(fieldName === "date"){
            dispatch(value)
        }
        
    }

    const handleBlur = (fieldName, value, name, typeOfValidation, message) => {

        if(!value){
            formData[fieldName].error = "Field cannot be empty";
        }else if(fieldName === name && !typeOfValidation){
            formData[fieldName].error = message
        }

        

        setFormData(prevFormData => ({
            ...prevFormData,
            [fieldName]: {
                ...prevFormData[fieldName],
                error: formData[fieldName].error
            }
        }))
    }

    const clearFormData = ()=> {
        setFormData({
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
        })
    }

    const handleSubmit = e => {
        
        e.preventDefault();
        submitForm(formData)
       
        localStorage.setItem("storedFormData", JSON.stringify(formData));

        console.log(JSON.parse(localStorage.getItem("storedFormData")))
        clearFormData()
    }


    const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false)
    const [isOccasionDropdownOpen, setIsOccasionDropdownOpen] = useState(false)
    

    const handleTimeDropdown = e => {
        e.preventDefault();
        setIsTimeDropdownOpen(!isTimeDropdownOpen);

        
    }
    const handleOccasionDropdown = e => {
        e.preventDefault()
        setIsOccasionDropdownOpen(!isOccasionDropdownOpen)
    }

    const handleChosenTimeBtn = e => {
        handleChange("time", e.target.value)
        setIsTimeDropdownOpen(!isTimeDropdownOpen);
        
    }
    const handleChosenOccasionBtn = e => {
        setFormData({...formData, occasion: e.target.value})
        setIsOccasionDropdownOpen(!isOccasionDropdownOpen)
        
    }

    return (

        <div className="booking">
            <h1 className="booking-section">Bookings</h1>
            <BookingForm formData={formData} setFormData={setFormData} navigate={navigate} handleBlur={handleBlur} handleChange={handleChange} availableTimes={availableTimes} availableOccasions={availableOccasions} isTimeDropdownOpen={isTimeDropdownOpen} isOccasionDropdownOpen={isOccasionDropdownOpen} handleTimeDropdown={handleTimeDropdown} handleOccasionDropdown={handleOccasionDropdown}  handleSubmit={handleSubmit} handleChosenTimeBtn={handleChosenTimeBtn} handleChosenOccasionBtn={handleChosenOccasionBtn} formValidation={formValidation}/>


        </div>
    )
}