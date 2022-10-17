import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Theme} from './Theme/Theme';
import {CartProvider} from 'react-use-cart';


// const store = configureStore({
//     reducer: {
//         products: productsReducer,
//         cart: cartReducer,
//         [productsApi.reducerPath]: productsApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(productsApi.middleware),
// });
//
// store.dispatch(productsFetch());
// store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Theme>
          <CartProvider>
              <App />
          </CartProvider>
      </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
