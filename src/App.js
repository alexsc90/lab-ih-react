//IMPORTACIONES
import './App.css';
import Feature from './components/Feature.js'
import logo from './images/ironhack-logo.svg'
import menu from './images/menu-top.svg'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

//FUNCIONES
function App() {
  return ( //JSX => Formato que mezcla js con html
  
    <div className="App">
      <nav id="nav">
        <img src={logo} />
        <img src={menu} />
      </nav>
      <header className="App-header">
        <h1>Say hello to <br /> ReactJs</h1>
        <p>
          You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      <div class="components">
        <div class="item">
          <Feature name="Declarative" img={icon1} description="React makes it painless to create interactive UIs." /> 
        </div>
        <div class="item">
          <Feature name="Components" img={icon2} description="Built encapsulated components that manage their state." />
        </div>
        <div class="item">
          <Feature name="Single-way" img={icon3} description="A set of immutable values are passed to the component's." />
        </div>
        <div class="item">
          <Feature name="JSX" img={icon4} description="Statically-typed designed to run on modern browsers." />
        </div>
      </div>
    </div>
  );
}

//EXPORTACIONES
export default App;
