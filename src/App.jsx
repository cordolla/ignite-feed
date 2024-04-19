import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from "./App.module.css";

export function App() {
  return (
    <>
       <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post author="Marcelo" content="Texto aqui" />
            <Post author="Vitoria" content="texto 2 aqui" />
            <Post author="Maria" content="Texto 3 aqui" />
          </main>
        </div>
    </>
  )
}