import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return(
    <div className="App">
      <Header />
      <main>
      <Home />
      </main>
      <Footer />
    </div>
  )
  }

export default App;
