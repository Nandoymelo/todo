import styles from './TaskInfo.module.css';

export function TaskInfo(props) {

    return (
        <div className={styles.sideBar}>
            <div className={styles.taskInfo}>
                <div className={styles.taskComplete}>
                    <strong>Tarefas Criadas</strong>
                    <p>{props.cont}</p>
                </div>

                <div className={styles.taskMiss}>
                    <strong>Concluídas</strong>
                    <p>{props.contTasks}de {props.cont}</p>
                </div>
            </div>
        </div>
    )
}