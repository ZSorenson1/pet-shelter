import Main from './views/Main'
import './App.css';
import { Router, navigate } from '@reach/router'
import PetInfo from './components/PetInfo'
import Update from './views/Update'
import Add from './views/Add'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <PetInfo path="/pets/:id"  />
        <Update path="/pets/:id/edit" successCallback={ () => navigate("/")}/>
        <Add path="/pets/add" successCallback={ () => navigate("/")}/>
      </Router>
    </div>
  );
}

export default App;
