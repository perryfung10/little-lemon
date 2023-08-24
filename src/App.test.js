import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe("test the app.", ()=> {

  test('renders Header component', () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );
    
  });

})

