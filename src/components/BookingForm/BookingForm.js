
import "./BookingForm.css"

export const BookingForm = ({formData, handleBlur, handleChange, availableTimes, availableOccasions, isTimeDropdownOpen, isOccasionDropdownOpen, handleTimeDropdown, handleOccasionDropdown, handleSubmit, handleChosenTimeBtn, handleChosenOccasionBtn, formValidation}) => {


    return (
        <form name="booking-form" onSubmit={handleSubmit} className="booking-form" autoComplete="">
                <div className="form-label-input">
                    <label htmlFor="userLastName" aria-label="on Click">Last Name : <sup>*</sup></label>
                    <div className="userInput">
                        <input id="userLastName" name="lastName" value={formData.lastName.value} type="text"  onBlur={e => handleBlur("lastName" ,e.target.value, e.target.name, e.target.value.length > 3, "It must have at least 4 characters")} onChange={e => handleChange("lastName", e.target.value)} aria-describedby={formData.lastName.error? "last Name Error" : "Please Enter Your Last Name"} required/>
                        {formData.lastName.error && <div className="inputErrorMessage">{formData.lastName.error}</div>}
                    </div>
                    
                </div>
                <div className="form-label-input">
                    <label htmlFor="userFirstName">First Name : </label>
                    <div className="userInput">
                        <input id="userFirstName" type="text" name="firstName" value={formData.firstName.value}  onChange={e => handleChange("firstName", e.target.value)} aria-describedby={formData.firstName.error? "First Name Error" : "Please Enter Your First Name"} />
                    </div>
                </div>
                <div className="form-label-input">
                    <label htmlFor="userEmail">Email : <sup>*</sup></label>
                    <div className="userInput">
                        <input data-testid="userEmail" id="userEmail" type="email" name="email" value={formData.email.value} onBlur={e => handleBlur("email" ,e.target.value, e.target.name, e.target.value.length >10, "It must have at least 11 characters")} onChange={e => handleChange("email", e.target.value)} aria-describedby={formData.email.error? "Email Error" : "Please Enter Your Email"}  required/>
                        {formData.email.error && <div className="inputErrorMessage">{formData.email.error}</div>}
                    </div>

                </div>
                <div className="form-label-input">
                    <label htmlFor="bookingDate">Date : <sup>*</sup></label>
                    <div className="userInput">
                        <input id="bookingDate" type="date" name="bookingDate" value={formData.date.value} onBlur={e => handleBlur("date" ,e.target.value, e.target.name, e.target.value, "Must pick a date")} onChange={e => handleChange("date", e.target.value)} aria-describedby="dateError" required/>
                        {formData.date.error && <div className="inputErrorMessage">Must pick a date</div>}
                    </div>
                </div>
                <div className="form-label-input">
                    <label htmlFor="bookedTime">Time : <sup>*</sup></label>
                    <select id="bookedTime" value={formData.time.value} onChange={handleChosenTimeBtn}>
                        <option disabled>choose time</option>
                        {Array.isArray(availableTimes) && availableTimes.map((availableTime, index) =>    
                                <option key={index} value={availableTime}>{availableTime}</option>
                        )}
                    </select>   
                    
                </div>   
                {/* <div className="form-label-input">
                    <label htmlFor="bookedTime">Time : <sup>*</sup></label>
                    <div className="dropdown-menu">
                        <button className={`dropdown-btn ${isTimeDropdownOpen && `clicked`}`} onClick={handleTimeDropdown} aria-haspopup="true" aria-expanded={isTimeDropdownOpen ? "true" : "false"} aria-controls="bookedTime" aria-label={formData.time.value ? formData.time.value : "choose time"}>{formData.time.value ? formData.time.value : "choose time"}</button>        
                        <div id="bookedTime" className="dropdown-content"  aria-hidden={isTimeDropdownOpen ? "true" : "false"}>
        
                            {isTimeDropdownOpen &&  availableTimes.map((time, index) => {
                                return <button className="time-option" key={index} value={time} onClick={handleChosenTimeBtn}>{time}</button>
                            })} 
                        </div> 
            
                    </div>
                </div> */}
                <div className="form-label-input">
                    <label htmlFor="numberOfGuests">Number of Guests : <sup>*</sup></label>
                    <div className="userInput">
                        <input id="numberOfGuests" type="number" name="numberOfGuests" value={formData.numberOfGuests.value} min={1} max={20} onBlur={e => handleBlur("numberOfGuests" ,e.target.value, e.target.name, e.target.value >0 && e.target.value < 21, " maximum booking seats : 20")} onChange={e => handleChange("numberOfGuests", e.target.value)} aria-describedby={formData.numberOfGuests.error? "Number Error" : "Please type a number between 1 to 20 for booking seats"} required/>
                        {formData.numberOfGuests.error && <div className="inputErrorMessage">{formData.numberOfGuests.error}</div>}
                    </div>
                </div>
                <div className="form-label-input">
                    <label htmlFor="bookedOccasion">Occasion :</label>
                    <select id="bookedOccasion" value={formData.occasion} onChange={handleChosenOccasionBtn}>
                        <option disabled >Occasion</option>
                        {Array.isArray(availableOccasions) && availableOccasions.map((availableOccasion, index) =>    
                                <option key={index} value={availableOccasion}>{availableOccasion}</option>
                        )}
                    </select>   
                    
                </div>   
                {/* <div className="form-label-input">
                    <label htmlFor="bookedOccasion">Occasion : </label>
                    <div className="dropdown-menu">
                        <button className={`dropdown-btn ${isOccasionDropdownOpen && "clicked"}`} onClick={handleOccasionDropdown} aria-haspopup="true" aria-expanded={isOccasionDropdownOpen ? "true" : "false"} aria-controls="bookedOccasion" aria-label={formData.occasion ? formData.occasion : "Choose An Occasion"}>{formData.occasion ? formData.occasion : "occasion"}</button>
                        <div id="bookedOccasion" className="dropdown-content"  >
                        {isOccasionDropdownOpen &&  availableOccasion.map((occasion, index) => {
                                return <button className="occasion-option" key={index} value={occasion} onClick={handleChosenOccasionBtn
                                }>{occasion}</button>
                                 
                            })}
                            </div>
                    </div>
                </div> */}
                <div className="submit-btn">
                    <button type="submit" aria-label="on Click" onClick={() => window.scrollTo({top: 0, left: 0})} disabled={!formValidation}>Submit</button>
                </div>
                
            </form>
    )
}