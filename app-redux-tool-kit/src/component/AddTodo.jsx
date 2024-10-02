import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return (

        <form onSubmit={addTodoHandler}>
            <div className='flex gap-5'>
                <input
                    type='text'
                    className=' w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 outline-none text-white'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className='py-2 px-4 bg-indigo-500'>add</button>
            </div>
        </form>

    )
}

export default AddTodo