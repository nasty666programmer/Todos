import '../App.css';
import AddSubList from './AddSubList';
import SubList from './SubList';

function ListItems(props) {
    const {todo,todos,index,removeToDo,itemsUp,itemsDown,onCreateSublist,removeSublist,onChange} = props;
    const classes = ['ItemsData'];
    const styleBtn = [];
    const BtnUp = [],btnDown=[];
    if(todo.complete) {
        classes.push('done');
    }

    !todo.sublist && styleBtn.push('BtnRemoveSubList')

    todos.length < 2 && BtnUp.push('BtnRemoveSubList')

    return (
        <div className='wrapperItems'>
            <input type='checkbox' onClick={() => onChange(todo.id)}/>
            <span key={todo.id} className={classes.join(' ')}>{todo.items}</span>
            {<SubList todo={todo}/>}
            <button onClick={() => removeToDo(todo.id)}>delete</button>
            <button className={BtnUp} onClick={() => itemsUp(todo.id,index)}>Up</button>
            <button className={BtnUp} onClick={() => itemsDown(todo.id,index)}>Down</button>
            <AddSubList onCreateSublist={onCreateSublist} id={todo.id} todos={props.todo}/>
            <button className={styleBtn} onClick={() => removeSublist(todo.id)}>remove sublist</button>
        </div>
    )
}

export default ListItems;