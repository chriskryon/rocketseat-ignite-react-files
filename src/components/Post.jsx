import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/chriskryon.png"
            alt="Author's avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Christopher Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
        className={styles.postDate}
        title="10 de Dezembro às 14h51"
        dateTime="2024-12-10 14:51:00"
      >
        Publicado há 1 hora
      </time>
      </header>


      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉{" "}<a href="/#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="/#">#novoprojeto</a>{" "}
          <a href="/#">#nlw</a>{" "}
          <a href="/#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
