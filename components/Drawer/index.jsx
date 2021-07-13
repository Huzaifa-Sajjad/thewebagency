import styles from "./styles.module.scss";

function Drawer({ isOpen, onClose }) {
  return (
    <div className={`${styles.root} ${isOpen ? styles.open : ""}`}>
      <h1>I'm a drawer</h1>
      <h3 onClick={() => onClose(false)}>close</h3>
    </div>
  );
}

export default Drawer;
