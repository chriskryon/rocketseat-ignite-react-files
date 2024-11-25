import { Header } from "./components/Header";
import Post from "./Post";

import "./global.css";
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
	  <div className={styles.wrapper}>
		<aside>
			sidebar
		</aside>
		<main>
			<Post author="John Doe" content="Hello, world!" />
			<Post author="Jane Smith" content="Hi there!" />
		</main>
	  </div>
    </div>
  );
}

export default App;
