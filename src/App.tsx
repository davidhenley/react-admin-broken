import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import CustomersIcon from '@material-ui/icons/LocalConvenienceStore'
import ProductsIcon from '@material-ui/icons/LocalBar';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={jsonServerProvider('http://localhost:4000')}>
        <Resource name={'customers'} list={ListGuesser} edit={EditGuesser} icon={CustomersIcon} show={ShowGuesser} />
        <Resource name={'products'} list={ListGuesser} edit={EditGuesser} icon={ProductsIcon} show={ShowGuesser} />
      </Admin>
    </div>
  );
}

export default App;
