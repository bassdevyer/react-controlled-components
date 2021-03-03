import { useState } from 'react'
import './App.css';

function App() {

  const [state, setState] = useState({
    isGoing: true,
    numberOfGuests: 2
  })


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  /*
  React uses a value attribute on the root select tag.
  This is more convenient in a controlled component because you only need to update it in one place.
   */

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={state.isGoing}
          onChange={handleInputChange}/>
      </label>
      <br/>
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={state.numberOfGuests}
          onChange={handleInputChange}/>
      </label>
    </form>
  );
}

export default App;
