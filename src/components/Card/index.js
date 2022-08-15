import styles from "./card.module.scss";

export const Card = (props) => {

    return (
        <div className={styles.card}>
            <button className={styles.cardFavorite}>
                <img width={32} height={32} src="./react-sneakers/img/like-default.svg" alt="Unliked"/>
            </button>
            <img className={styles.cardImg} src={props.img} alt="Sneakers"/>
            <p className={styles.cardName}>{props.title}</p>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span>Price</span>
                    <b>{props.price} $</b>
                </div>
                <button className={styles.cardAdd}>
                    <img width={32} height={32} src="./react-sneakers/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}