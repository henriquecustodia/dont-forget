import { TextField } from './components/Input/Input';
import { List } from './components/List/List';
import { Item } from './models/Item';
import { InCart } from './shared/contexts/InCart';

function App() {
  return (
    <InCart>
      <div className='container'>

        <InCart.Actions>
          {({ add }) => (
            <div className='mt-3'>
              <TextField placeholder='Item to add' onChange={add}></TextField>
            </div>
          )}
        </InCart.Actions>

        <InCart.NotAddedItems>
          {(items: Item[]) => (
            <>
              <List items={items} className='mt-3' />
            </>
          )}
        </InCart.NotAddedItems>
        <InCart.AddedItems>
          {(items: Item[]) => (
            <>
              {Boolean(items.length) && <hr />}
              <List items={items} className='mt-3' />
            </>
          )}
        </InCart.AddedItems>
      </div>
    </InCart>
  );
}

export default App;
