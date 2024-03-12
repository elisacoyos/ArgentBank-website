import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'

//REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers' //rootReducer est le résultat de combineReducers qui se trouve dans le fichier index.jsx.

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


