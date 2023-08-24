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
    

    test('test submit button disable function', async () => { 

        


        render (<BookingForm formData={mockData}/>)

        
        await fireEvent.click(screen.getByRole("button", {name: /submit/i}))
        expect(screen.getByRole("button", {name: /submit/i})).toBeDisabled()


     })
     
     



      
       


       
            
        



       

 })