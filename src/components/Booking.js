import { Link } from "react-router-dom";
import "../CSS/Booking.css"
import { useRef, useState } from "react"

export const Booking = () => {

    const inputDateRef = useRef(null);

    const [formData, setFormData] = useState(
        {
            lastName: "",
            firstName: "",
            email: "",
            date: "",
            time: "choose time",
            numberOfGuests : 1,
            occasion: "occasion",
        }
    );

    const formValidation = formData.lastName.length > 4 && formData.email.length > 10 &&  formData.date && formData.time !== "choose time" && formData.numberOfGuests > 0 && formData.numberOfGuests < 21 && formData.occasion !== "occasion"

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (

        <div className="booking">
            <h1 className="booking-section">Bookings</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-label-input">
                    <label htmlFor="userLastName">Last Name : <sup>*</sup> </label>
                    <input id="userLastName" type="text" onChange={e => setFormData({...formData, lastName: e.target.value})} required/>
                </div>
                <div className="form-label-input">
                    <label htmlFor="userFirstName">First Name : </label>
                    <input id="userFirstName" type="text" onChange={e => setFormData({...formData, firstName: e.target.value})} />
                </div>
                <div className="form-label-input">
                    <label htmlFor="userEmail">Email : <sup>*</sup> </label>
                    <input id="userEmail" type="email" onChange={e => setFormData({...formData, email: e.target.value})} required/>
                </div>
                <div className="form-label-input">
                    <label htmlFor="bookedDate">Date : <sup>*</sup> </label>
                    <input id="bookedDate" type="date" onChange={e => setFormData({...formData, date: e.target.value})} required/>
                </div>
                <div className="form-label-input">
                    <label htmlFor="bookedTime">Time : </label>
                    <select id="bookedTime" className="select-input" onChange={e => setFormData({...formData, time: e.target.value})} value={formData.time} required>
                        <option value="choose time" disabled>choose time</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                    </select>   
                </div>
                <div className="form-label-input">
                    <label htmlFor="numberOfGuests">Number of Guests : </label>
                    <input id="numberOfGuests" type="number" min={1} max={20} onChange={e => setFormData({...formData, numberOfGuests: e.target.value})} required/>
                </div>
                <div className="form-label-input">
                    <label htmlFor="occasion">Occasion : </label>
                    {/* <input /> */}
                    {/* <datalist>
                        <option value="occasion" disabled>Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </datalist> */}

                   <select id="occasion" onChange={e => setFormData({...formData, occasion: e.target.value})} className="select-input" value={formData.occasion} required>
                        <option value="occasion" disabled>Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>   
                </div>
                <Link to="/successful" className="submit"><button type="submit" disabled={!formValidation}>Submit</button></Link>
            </form>

        </div>
    )
}