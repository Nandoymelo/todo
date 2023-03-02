import styles from './TaskList.module.css';
import circle from '../assets/Circle.svg';
import checkedDefault from '../assets/Checked.svg';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export function TaskList(props) {
    const isChecked = false

    function handleDeleteTask() {
        props.deleteTask(props.id);    
    }

    return (
        <div className={styles.container}>
            <input className={styles.checkboxRound} type="checkbox" value={isChecked} onChange={() => 
                props.toggleIsCompleteTask(props.id)
            } />
    
            <strong className={
                props.complete ? styles.completedTask : styles.incompleteTask}>{props.description}</strong>
            <button className={styles.trashButton}  onClick={handleDeleteTask}>
                <Trash size={18}/>
            </button>
         </div>   
    )
}