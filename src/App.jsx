import { Header } from './components/Header';
import { Input } from './components/Input';


import styles from './App.module.css';
import './global.css';
import { TaskList } from './components/TaskList';
import { TaskInfo } from './components/TaskInfo';
import { useEffect, useState } from 'react';

// {description: '', isComplete: false}

export function App() {
  const [tasks, setTasks] = useState([])

  const [isChecked, setIsChecked] = useState([])
  
  
  
  
  function handleAddTask({description, isComplete}) {
    setTasks([...tasks, {description, isComplete}])
  }

  function deleteTask(indexToDelete) {
    const tasksWithoutDeleteOne = tasks.filter((item, index) => {
      return index !==  indexToDelete;   
    })
    setTasks(tasksWithoutDeleteOne);
  }

  function toggleIsCompleteTask(indexToToggle) {
    const newTasks = tasks.map((item, index) => {
      if(index === indexToToggle) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    setTasks(newTasks);
  }

  useEffect(() => {
    const tasksCompleted = tasks.filter((item, index) => item.isComplete)
    setIsChecked(tasksCompleted)
  }, [tasks])
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Input handleAddTask={handleAddTask} />
        
        <TaskInfo cont={tasks.length} contTasks={isChecked.length}/>
        

        <main> 
          {tasks.map((task, index) => (
            <TaskList 
              key={index} 
              description={task.description} 
              deleteTask={deleteTask} 
              id={index} 
              complete={task.isComplete}
              toggleIsCompleteTask={toggleIsCompleteTask}
              
            />
          ))}
        </main>

      </div>
    </div>
  )
}