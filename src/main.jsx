import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store';
//import { PersistGate } from 'redux-persist/integration/react' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>,
)
