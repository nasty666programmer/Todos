import '../App.css';
import ListItems from './ListItems';

function ToDoList(props) {
    const {listItems,toggleToDo,removeToDo,itemsUp,itemsDown,onCreateSublist,removeSublist,onChange} = props;
    return (
        <div>
            {listItems.map((todo,index) => 
                <ListItems 
                todo={todo}
                key={todo.id}
                index={index}
                onChange={toggleToDo}
                removeToDo={removeToDo}
                itemsUp={itemsUp} 
                itemsDown={itemsDown}
                onCreateSublist={onCreateSublist} 
                removeSublist={removeSublist}
                todos={listItems}
                />
            )}
            {listItems.length == 0 && <h1 id='NotItems'>Not todo items</h1>}
        </div>
    )
}

export default ToDoList;