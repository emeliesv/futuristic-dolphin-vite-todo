import Todolist from "../Components/Todolist";

const Todopage = () => {
    return <section>
        <div className="todo-container">
        <h2 className="todo-heading">Your Todos</h2>
            <Todolist/>
        </div>
        </section>
}

export default Todopage;