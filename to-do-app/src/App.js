import React, { useContext } from "react";
import { MainScreen } from './screens/MainScreen/MainScreen';
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeContext } from "./context/ThemeContext";
import './App.css'


function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <div className={`App ${darkTheme ? "dark-theme" : "light-theme"}`}>
        <MainScreen />
      </div>
    </Provider>
  );
}

export default App;
