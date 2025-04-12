import React, {useState} from "react";
import "./TaskFile.css";
import Tagcompo from './Tagcompo';
const TaskFile = ({setTasks,title}) => {
  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
    tags:[],
    
  });
  const checkTag=(tagsUsed)=>{
    return taskData.tags.some(item=>item===tagsUsed)
    }
  
  const selectTag=(tagsUsed)=>{
    if(taskData.tags.some(item=> item === tagsUsed)){
      const filterTags= taskData.tags.filter(item =>item !== tagsUsed)
      setTaskData(prev=>{
        return {...prev,tags:filterTags}
      })

    }
    else{
      setTaskData(prev =>{
        return {...prev,tags:[...prev.tags,tagsUsed]};
        
      })
    }
  };

  const handleChange=(e)=> {
     const {name,value}=e.target;
     setTaskData(prev=>{
      return {...prev,[name]:value}
     });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(taskData);
    setTasks(prev=>{
      return[...prev,taskData];
    });
    setTaskData({
      task:"",
      status:"todo",
      tags:[],
    });

  };
  
 /* const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo")
  const handleTaskChange=(e) =>{
    setTask(e.target.value);
  };
  const handleStatusChange=(e) =>{
    setStatus(e.target.value);
  };*/
 
  return (
    <section>
      <h2>{title}</h2>
    <header className='appHeader'>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={taskData.task}
            className="input_value" placeholder='Enter your Task here'
           name="task"
           onChange={handleChange}/>
            <div className='bottomTags'>
                <div>
                  <Tagcompo tagName="Peak" selectTag={selectTag} selected={checkTag("Peak")}/>
                  <Tagcompo tagName="Steady" selectTag={selectTag} selected={checkTag("Steady")}/>
                  <Tagcompo tagName="Slow" selectTag={selectTag} selected={checkTag("Slow")}/>
                </div>
                <div>
                 <select
                 name="status"
                  className='status'
                  value={taskData.status}  onChange={handleChange}>
                 
                    <option value="todo"> To Do</option>
                    <option value="onprocess"> On Process</option>
                    <option value="completed"> Completed</option>
                    </select>
                    <button type="submit" className='task-submit'> +Add Task</button>  
            </div></div>
        </form>
    </header>
    </section>

  )
}

export default TaskFile