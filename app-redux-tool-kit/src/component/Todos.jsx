import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from '../component/AddTodo'
import { removeTodo } from '../features/Todo/todoSlice'

function Todos() {
    const [todoListReversed, setTodoListReversed] = useState([])
    const dispatch = useDispatch()

    const todoList = useSelector((state) => state.todos.todo);
    useEffect(() => {
        setTodoListReversed([...todoList].reverse())
    }, [todoList])


    return (
        <div className='max-w-[400px] w-full flex justify-center items-center min-h-[100vh] m-auto'>
            <div className='inbox'>
                <AddTodo />
                <ul className='mt-3'>
                    {todoListReversed && todoListReversed?.map((todo, index) =>
                    (<li key={index}
                        className=' bg-indigo-400 mb-2 py-1 px-2 flex justify-between items-center'
                    >{todo.text}
                        <button className='text-red-600'
                            onClick={() => { dispatch(removeTodo(todo.id)) }}
                        >delete</button>
                    </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Todos