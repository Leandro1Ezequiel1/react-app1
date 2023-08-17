import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar//NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWaidget'; 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;
