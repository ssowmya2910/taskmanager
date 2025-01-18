import React,{useState,useEffect} from 'react'
import "./App.css"
import TaskFile from './components/TaskFile'
import Status from './components/Status'
const oldTask=localStorage.getItem("tasks")
console.log(oldTask);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) ||[]);
  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
 const handleDelete=(taskIndex)=>{
  const newTasks=tasks.filter((task,index)=> index!==taskIndex)
  setTasks(newTasks)
 }
  return (
    <div className='app'>
      <TaskFile setTasks={setTasks}/>
    <main className='mainMethod'>
    <Status title='To Do' tasks={tasks} status="todo" handleDelete={handleDelete}/>
    <Status title='On Process' tasks={tasks} status="onprocess" handleDelete={handleDelete} />
    <Status title='Completed' tasks={tasks} status="completed" handleDelete={handleDelete}/>
    

    
    </main>
    </div>
   
  )
}

export default App