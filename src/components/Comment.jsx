import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/cordolla.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Cordolla</strong>
                            <time title="25 de abril às 16:12" dateTime='2024-05-25 16:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}