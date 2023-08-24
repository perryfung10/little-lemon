import { render } from "@testing-library/react";
import { Main, initializeTimes, updateTimes } from "./Main";
import { MemoryRouter, useAsyncValue } from "react-router-dom";
import { fetchAPI } from "../../utils/Api";



  test("test initializeTimes function & updateTimes function", () => {

    

    // test whether the initialiseTimes function works 
    // its result returned depends on each date (this date is 2023-08-24)
    expect(initializeTimes([])).toEqual(
      ["17:00", "17:30", "18:00", "19:00", "19:30", "20:30", "22:30"]
    ); 

    
      // test the updateTimes function based on the date : 2023-08-27
    expect(updateTimes(initializeTimes, "2023-08-27")).toEqual(
      ["17:00", "17:30", "18:00", "19:30", "21:30", "22:30"]
    )

  
  });
