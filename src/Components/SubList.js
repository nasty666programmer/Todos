import '../App.css';

function SubList(props) {
    return (
        <div>
            {[props.todo].map(todos => 
                <ul>{todos.sublist}</ul>
                
            )}
        </div>
    )
}

export default SubList;