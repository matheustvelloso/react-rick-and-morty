import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import GlobalStyles from './Styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <GlobalStyles />
  </>,
);
