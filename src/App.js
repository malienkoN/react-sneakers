import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";

const cardsData = [
    {
        img: "./react-sneakers/img/sneakers/1.jpg",
        title: "Nike Blazer Mid Suede Men's sneakers",
        price: 500,
    },
    {
        img: "./react-sneakers/img/sneakers/2.jpg",
        title: "Nike Air Max 270 Men's sneakers",
        price: 450,
    },
    {
        img: "./react-sneakers/img/sneakers/3.jpg",
        title: "Nike Blazer Mid Suede Men's sneakers",
        price: 475,
    },
    {
        img: "./react-sneakers/img/sneakers/4.jpg",
        title: "Puma X Aka Boku Future Rider sneakers ",
        price: 499,
    },
];

console.log('this changes from test branch')

function App() {
  return (
    <div className="wrapper">
        <Cart />
        <Header />
        <main>
            <div className="search-block">
                <h1>All sneakers:</h1>
                <div>
                    <button>
                        <img width={16} height={16} src="./react-sneakers/img/search.svg" alt="Search"/>
                    </button>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="cards">
                {cardsData.map(e => <Card key={e.title} img={e.img} title={e.title} price={e.price} /> )}
            </div>
        </main>
    </div>
  );
}

export default App;
