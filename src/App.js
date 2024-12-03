import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import store from './utils/store';


function App() {
  return (
    
    <div className="App">
    <Provider store={store}>
      <Header/>
      <MainContainer/>
      </Provider>
    </div>
    
  );
}

export default App;
