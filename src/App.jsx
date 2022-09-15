import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './Components/App/Router/Router';
import { Footer } from './Components/Partials/Footer/Footer';
import { Header } from './Components/Partials/Header/Header';
import { Navigation } from './Components/Partials/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <section>
        <AppRouter />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
