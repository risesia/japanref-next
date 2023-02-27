import styles from "../styles/Container.module.css";

export default function Container() {
    return (
        <div className="styles.main">
        <h2 id="gojuon">gojūon</h2>
        <div className={styles.container}>
            <div className={styles.child}>
                <h2>あ</h2>
                <p>a</p>
            </div>
            <div className={styles.child}>
                <h2>い</h2>
                <p>i</p>
            </div>
            <div className={styles.child}>
                <h2>う</h2>
                <p>u</p>
            </div>
            <div className={styles.child}>
                <h2>え</h2>
                <p>e</p>
            </div>
            <div className={styles.child}>
                <h2>お</h2>
                <p>o</p>
            </div>
        </div>
        </div>
    );
}