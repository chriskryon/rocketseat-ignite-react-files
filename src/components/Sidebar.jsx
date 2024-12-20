import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1649451844889-0110c54695f9?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User Cover"
      />

      <div className={styles.profile}>

        <img className={styles.avatar} src="https://github.com/chriskryon.png" alt="Profile" />

        <strong>Christopher Costa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
