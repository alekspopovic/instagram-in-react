import "../styles/App.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
