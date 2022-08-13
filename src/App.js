import { Header } from "./components/header";
import { Card } from "./components/card";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <main>
            <h1>Все кроссовки</h1>

            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    </div>
  );
}

export default App;
