import styles from "./cart.module.scss";

export const Cart = () => {
    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cart}>
                <div className={styles.cartTop}>
                    <h2>Cart:</h2>
                    <button className={styles.cartRemove}>
                        <img width={32} height={32} src="./react-sneakers/img/remove.svg" alt="Remove"/>
                    </button>
                </div>

                <ul className={styles.cartItems}>
                    <li className={styles.cartItem}>
                        <div className={styles.cartImg} style={{backgroundImage: "url(./react-sneakers/img/sneakers/1.jpg)"}}></div>
                        <div>
                            <p>Nike Blazer Mid Suede Men's sneakers</p>
                            <b>500 $</b>
                        </div>
                        <button className={styles.cartRemove}>
                            <img width={32} height={32} src="./react-sneakers/img/remove.svg" alt="Remove"/>
                        </button>
                    </li>

                    <li className={styles.cartItem}>
                        <div className={styles.cartImg} style={{backgroundImage: "url(./react-sneakers/img/sneakers/1.jpg)"}}></div>
                        <div>
                            <p>Nike Blazer Mid Suede Men's sneakers</p>
                            <b>500 $</b>
                        </div>
                        <button className={styles.cartRemove}>
                            <img width={32} height={32} src="./react-sneakers/img/remove.svg" alt="Remove"/>
                        </button>
                    </li>

                    <li className={styles.cartItem}>
                        <div className={styles.cartImg} style={{backgroundImage: "url(./react-sneakers/img/sneakers/1.jpg)"}}></div>
                        <div>
                            <p>Nike Blazer Mid Suede Men's sneakers</p>
                            <b>500 $</b>
                        </div>
                        <button className={styles.cartRemove}>
                            <img width={32} height={32} src="./react-sneakers/img/remove.svg" alt="Remove"/>
                        </button>
                    </li>

                    <li className={styles.cartItem}>
                        <div className={styles.cartImg} style={{backgroundImage: "url(./react-sneakers/img/sneakers/1.jpg)"}}></div>
                        <div>
                            <p>Nike Blazer Mid Suede Men's sneakers</p>
                            <b>500 $</b>
                        </div>
                        <button className={styles.cartRemove}>
                            <img width={32} height={32} src="./react-sneakers/img/remove.svg" alt="Remove"/>
                        </button>
                    </li>
                </ul>

                <div className={styles.cartTotal}>
                    <ul>
                        <li>
                            <p>Total</p>
                            <div></div>
                            <b>20500 $</b>
                        </li>
                        <li>
                            <p>Tax 5%:</p>
                            <div></div>
                            <b>500 $</b>
                        </li>
                    </ul>
                    <button className="green-button">
                        Checkout
                        <img width={16} height={14} src="./react-sneakers/img/arrow-right.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}