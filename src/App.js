import { useState } from 'react'
import './App.css';

function App() {

  const [state, setState] = useState({ value: 'Please write an essay about your favorite DOM element.' })

  const handleChange = (event) => {
    setState({value: event.target.value})
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + state.value);
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default App;
