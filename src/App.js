import Header from './comps/header/header.js';
import Body from './comps/body/body.js';
import { store } from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
	<Provider store={store}>
		<div className="App">
			 <Header />
			 <Body />
		</div>
    </Provider>
  );
}

export default App;




