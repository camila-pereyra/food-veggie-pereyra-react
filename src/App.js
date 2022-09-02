import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <ItemListContainer greeting="Bienvenido/a a Food Veggie!" />
        </section>
      </main>
    </div>
  );
}

export default App;
