import styles from "./index.module.scss";

export const Card = () => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src="./img/sneakers/1.jpg" alt=""/>
            <p className={styles.cardName}>Men's shoes Nike Blazer Mid Suede</p>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span>Price</span>
                    <b>500 $</b>
                </div>
                <button className={styles.cardAdd}>
                    <img width={12} height={12} src="./img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}