export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={()=>{
                            fetch("http://localhost:3000/completed",{
                                method:"PUT",
                                body: JSON.stringify({
                                    id:todo.id,
                                }),
                                headers:{
                                    "Content-type":"application/json"
                                }
                            }).then(async (res)=>{
                                const json=await res.json();
                                alert("Todo Completed");
                            })
                        }}>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                    </div>
                );
            })}
        </div>
    );
}
