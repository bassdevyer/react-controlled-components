import { useState } from 'react'
import './App.css';

function App() {

  const [state, setState] = useState({ value: 'coconut' })

  const handleChange = (event) => {
    setState({ value: event.target.value })
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + state.value);
    event.preventDefault();
  }


  /*
  React uses a value attribute on the root select tag.
  This is more convenient in a controlled component because you only need to update it in one place.
   */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={state.value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default App;
