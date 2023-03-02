import styles from './Input.module.css';
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';


export function Input(props) {
    const [newCommentText, setNewCommentText] = useState('')

    
   
    function handleCreateNewTask(event) {
        event.preventDefault();
        props.handleAddTask({
            description: newCommentText,
            isComplete: false,
        })
        setNewCommentText('')
        
    }

    function handleNewTaskInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }




    return (
        <form  onSubmit={handleCreateNewTask} className={styles.shearch}>
            <input  
                name="comment"  
                placeholder="Adicione uma nova tarefa"
                value={newCommentText}
                onChange={(event) => {
                    setNewCommentText(event.target.value)
                    event.target.setCustomValidity('')
                }}
                onInvalid={handleNewTaskInvalid}
                required
            />

            <button 
            type="submit"
            
            >
                Criar
                <PlusCircle size={20}/>
            </button>


        </form>

        
    )
}