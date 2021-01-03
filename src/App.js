import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Sales from './components/Sales';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar />
      <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/mens" component={Mens}/>
             <Route path="/womens" component={Womens}/>
            <Route path="/sales" component={Sales}/>
            <Route component={Error}/>
           </Switch>
     
    </div>
    </BrowserRouter>
  );
}





export default App;
