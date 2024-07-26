// Aishwarya Ashok Patil 

// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import deleteIcon from "./delete2.svg"
import editIcon from "./edit2.svg"

function App() {
  const [input , setInput]=useState();
  const [list , setList]=useState([]);
  const [uid , setUid]=useState();
  const [update , setUpdate]=useState(false);

  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  const handleTask = ()=>{
    setList([...list,input])
    setInput("")
    // setInput(e.target.value)
  }
  const handleDelete = (i)=>{
   const filterList = list.filter((elm)=>elm !== list[i])
    console.log("filterList",filterList);
    setList(filterList)
  }
  const handleEdit = (i)=>{
   const filterList = list.filter((elm)=>elm === list[i])
    setInput(filterList[0])
    setUid(i)
    setUpdate(true)
  }
  const handleUpdate = ()=>{
    list.splice(uid,1,input);
    setInput("")
    setUpdate(false)
  }
  return (
    <div className="App">
     <h1>TO-DO LIST</h1>
     <div className="container">
     <div className="inputBox">
     <input type="text" value={input} onChange={(e)=>handleInput(e)} placeholder='Enter Task'/>
     {update ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleTask}>Add Task</button>
    }
      
     </div>
      <div className="list">
        <ul>
          {list.map((item,i)=><li key={i} >{item} <img src={deleteIcon} className='dlt-icon' alt="Delete" onClick={()=>handleDelete(i)}/>
          <img src={editIcon} className='edit-icon' alt="Edit" onClick={()=>handleEdit(i)}/>
          </li>)}
        </ul>
      </div>
     </div>
    <h4> &copy; Aishwarya Ashok Patil . </h4>
    </div>
    
  );
}

export default App;
