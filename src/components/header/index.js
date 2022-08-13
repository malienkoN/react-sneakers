import './index.module.scss';

export const Header =  () => {
    return (
        <header>
            <div>
                <img width={40} height={40} src="./img/logo.png" alt="Logo"/>
                <div>
                    <p>React sneakers</p>
                    <span>The best sneakers shop</span>
                </div>
            </div>
            <ul>
                <li>
                    <a href="/">
                        <img width={20} height={20} src="./img/cart.svg" alt="Cart"/>
                        <span>1200 $</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img width={20} height={20} src="./img/like.svg" alt="Cart"/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img width={20} height={20} src="./img/user.svg" alt="User"/>
                    </a>
                </li>
            </ul>
        </header>
    );
}