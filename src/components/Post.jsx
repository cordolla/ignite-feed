import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/cordolla.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Marcelo Cordolla</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="25 de Maio as 09:43" dateTime="2025-05-25 09:43:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera</p>

        <p>Acabei de subir mais um projeto no meu portifolio</p>

        <p>
          <a href="">jane.desing/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rockseat</a>
        </p>
      </div>
    </article>
  );
};