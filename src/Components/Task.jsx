/* eslint-disable react/prop-types */

import { useState } from "react"

 const Task = ({tasks, setTasks}) => {
    const [userInput, setUserInput] = useState("");

   const handleChange = (event) => {
        setUserInput(event.target.value)
    };
    
    const handleSubmit = (event) => {
        if(userInput) {
            setTasks([...tasks, {id: Date.now(), task: userInput, completed: false}]);
        }
        setUserInput("");
        event.preventDefault();
    }; 


    return (
    <>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input value={userInput} onChange={handleChange}/>
            <button className="btn" type="submit">Add new task</button>
        </form>
    </>
)} 

export default Task;