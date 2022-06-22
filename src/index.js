import App from './App';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//ReactDOM.render(<App/>, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);