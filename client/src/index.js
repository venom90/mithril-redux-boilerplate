import m from 'mithril';
import { Provider } from 'mithril-redux';
import store from './store';
import App from './features/App';

// Provider.init(store, m, <App />)

m.render(document.body,  Provider.init(store, m, <App />));