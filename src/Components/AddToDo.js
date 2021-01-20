import {useState} from 'react';
import '../App.css';

function AddToDo({onCreate}) {
  const [state,setState] = useState('')

  

  const handleSubmit = event => {
    onCreate(state)
    event.preventDefault();
  }

  return (
    <div className='AddItemsForm'>
      <form onSubmit={handleSubmit}>
        <label>Введите задачу</label>
        <input className='inputToDo' type='text' value={state} onChange={(event) => setState(event.target.value)} name='items'  />
        <button className='btnAddToDo'>Добавить</button>
      </form>
    </div>
  );
}

export default AddToDo;