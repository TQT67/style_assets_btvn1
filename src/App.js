import logo from "./logo.svg";
import "./App.css";
import styles from "./style.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1>Sidebar</h1>
        <p>Nội dung phần sidebar</p>
      </div>
      <div className={styles.content}>
        <h1>Nội dung</h1>
        <p>Nội dung là không có nội dung</p>
      </div>
    </div>
  );
};

export default Layout;
