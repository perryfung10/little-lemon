import "../../CSS/BookingPage.css"
import {useState} from "react"
import { BookingForm } from "../../components/BookingForm";
import { useNavigate } from "react-router-dom";


export const BookingPage = ({formData, setFormData, availableTimes, dispatch}) => {

    
    const availableOccasion = ["Birthday", "Engagement", "Anniversary"]


    const formValidation = formData.lastName.value.length > 4 && formData.email.value.length > 10 &&  formData.date.value  && formData.time.value && formData.numberOfGuests.value > 0 && formData.numberOfGuests.value < 21 && formData.occasion !== "occasion"

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
    }

    const handleBlur = (fieldName, value, name, typeOfvalidation, message) => {

        if(!value){
            formData[fieldName].error = "Field cannot be empty";
        }else if(fieldName === name && !typeOfvalidation){
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
        navigate("/successful")
        console.log(formData)
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
        dispatch({type: e.target.value})
        setIsTimeDropdownOpen(!isTimeDropdownOpen);
        
    }
    const handleChosenOccasionBtn = e => {
        setFormData({...formData, occasion: e.target.value})
        setIsOccasionDropdownOpen(!isOccasionDropdownOpen)
        
    }

    return (

        <div className="booking">
            <h1 className="booking-section">Bookings</h1>
            <BookingForm formData={formData} setFormData={setFormData} handleBlur={handleBlur} handleChange={handleChange} availableTimes={availableTimes} availableOccasion={availableOccasion} isTimeDropdownOpen={isTimeDropdownOpen} isOccasionDropdownOpen={isOccasionDropdownOpen} handleTimeDropdown={handleTimeDropdown} handleOccasionDropdown={handleOccasionDropdown}  handleSubmit={handleSubmit} handleTimeDropdown={handleTimeDropdown} handleOccasionDropdown={handleOccasionDropdown} handleChosenTimeBtn={handleChosenTimeBtn} handleChosenOccasionBtn={handleChosenOccasionBtn} formValidation={formValidation} />


        </div>
    )
}