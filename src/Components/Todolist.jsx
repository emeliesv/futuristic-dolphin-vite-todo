import Task from "./Task"
import { useState, useEffect } from "react";
import animation from "../assets/Animation.gif"


const Todolist = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        if(tasks) {
            setTasks(tasks)
        }
    },[tasks])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    const toggleCompleted = (taskId) => {
        setTasks(previousTasks => {
            return previousTasks.map(task => {
            if(task.id===taskId) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        });
    });
    }

    const removeCompleted = () => {
        return setTasks(tasks.filter(task => task.completed !== true))
    }

    return <>
    <ul className="todo-list">
        {tasks.map(userItem => (
            <div className="task-container" key={userItem.id}>
            <li className={userItem.completed ? "completed-task":"todo-task"}>{userItem.task}</li>
            <input type="checkbox" onChange={() => toggleCompleted(userItem.id)}/>
            </div>
        ))}
        {tasks.length > 0 ? <button className="btn" type="button" onClick={() => removeCompleted()}>Remove finished tasks</button> : <div className="animation-box"><img className="animation" src={animation}/><p>Nothing to do here</p></div>} {/* Genom att specificera typen button som "button" hindras  */}
    </ul>
    <Task tasks={tasks} setTasks={setTasks}/>
    </>
}


export default Todolist