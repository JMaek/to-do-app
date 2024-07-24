import './App.css';
import { MainScreen } from './screens/MainScreen/MainScreen';
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainScreen />
      </div>
    </Provider>
  );
}

export default App;
