const Todo = (props) => {
    const todos= props.todos;
    return(
        <div className='todos-container' >
            {
              todos.map(todo => {
                return(
                  <li className='todo-child' key={todo.id}>
                    {todo.title}
                  </li>
                )
              })
            }
            <hr>
            </hr>
        </div>
    )
}

export default Todo; 