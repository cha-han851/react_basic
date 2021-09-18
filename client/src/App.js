import Navigation from './components/Navigation.jsx';
import './App.css';
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Navigation/>
        </Provider>
    </div>
  );
}

export default App;
