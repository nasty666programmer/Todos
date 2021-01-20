import '../App.css';
import {useState} from 'react';

function AddSubList(props) {
    const [sublist,setSublist] = useState('');

    const handleSubmitSublist = (event) => {
        props.onCreateSublist(props.id,sublist)
        event.preventDefault();
    }
    let btnAddSub = [];
    {props.todos.sublist && btnAddSub.push('BtnRemoveSubList')}
    return (
        <div>
            <form onSubmit={handleSubmitSublist}>
                <input type='text' value={sublist} onChange={(event) => setSublist(event.target.value)} />
                <button className={btnAddSub}>Add Sublist</button>
            </form>
        </div>
    )
}

export default AddSubList;