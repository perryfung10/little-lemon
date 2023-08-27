import { fireEvent, render,screen, } from "@testing-library/react";
import { BookingForm } from "./BookingForm";



describe('render BookingForm component', () => { 
    
  const mockData = {
    
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
    
   

    test('test submit button disable function', ()=> { 

        const mockHandleChosenTimeBtn = jest.fn();


        render (<BookingForm formData={mockData} handleChosenTimeBtn={mockHandleChosenTimeBtn}/>)

        const submitBtn = screen.getByText(/submit/i)

        fireEvent.click(submitBtn)
        expect(submitBtn).toBeDisabled()


     })
     
     




      })
     



      
       


       
            
        



       

 })