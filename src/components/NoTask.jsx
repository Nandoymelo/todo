import styles from './NoTask.module.css';

import buttonCircle from '../assets/Checked.svg';
import clipBorder from '../assets/Clipboard.svg';



export function NoTasks() {

    return (
        <div className={styles.container}>
            <div className={styles.taskList}>
                <div className={styles.taskContent}>
                    <img src={clipBorder} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                    
                </div>
            </div>


           
        </div>
    )
}