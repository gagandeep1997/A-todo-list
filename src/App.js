import React,{useState} from "react";
import "./App.css";

function Todo({todo,index,completed,removed})
{
return(<div className="todo" style={{textDecoration:todo.iscompleted?"line-through":""}}>{todo.text}
<button onClick={ () => completed(index)}>complete</button>
<button onClick={ () => removed(index)}>x</button>
</div>
);
}
function Todoform({addtodo})
{
  const[value,setValue] = useState("");
  
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value)return;
    addtodo(value);
    setValue("");
    };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="add Todo" value={value} onChange={e =>setValue(e.target.value)}>
      </input>
    </form>
  )
}
function App()
{
  const[todos,setTodos] = useState([
    {
      text:"hello gagan",
      iscompleted:false
    },
    {
      text:"hii",
      iscompleted:false
    },
    {
      text:"gg",
      iscompleted:false
    }
  ]
  );

  const addtodo = text =>{
    const newtodos=[...todos,{text}];
    setTodos(newtodos);
    };
  const completed = index =>
  {
    const newtodo=[...todos];
    newtodo[index].iscompleted=true;
    setTodos(newtodo);
  };
  const removed = index =>
  {
    const newtodor=[...todos];
    newtodor.splice(index,1);
    setTodos(newtodor);
  };
  return(
    <div className="app">
      <div className="todo-app">
        {
          todos.map((todo,index) => 
          (<Todo key={index} index={index} todo={todo} completed={completed} removed={removed}/>)
          )
        }
         <Todoform addtodo={addtodo} /> 
      </div>
    </div>
  );
}
export default App;