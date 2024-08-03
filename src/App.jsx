import NavBar from "./components/Navbar.jsx";
import Home from "./Home/Home.jsx";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shows" component={Shows}/>
        <Route path="/music" component={Music}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
