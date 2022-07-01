import { Header } from './components/Header/Header';
import { TextField } from './components/Input/Input';
import { List } from './components/List/List';
import { PageContainer } from './shared/components/PageContainer';
import { useActions } from './shared/store/Store';

function App() {

  const {
    getDoneItems,
    getUndoneItems,
    add
  } = useActions();

  const addedItems = getDoneItems();
  const notAddedItems = getUndoneItems();

  return (
    <>
      <Header>
        <PageContainer className='d-flex justify-content-center'>
          <h3>Don't Forget!</h3>
        </PageContainer>
      </Header>

      <PageContainer>
        <div className='mt-3'>
          <TextField placeholder='Something you cannot forget' btnLabel='add' onChange={add}></TextField>
        </div>

        <List items={notAddedItems} className='mt-3' />

        {Boolean(notAddedItems.length) && <hr />}

        <List items={addedItems} className='mt-3' />
      </PageContainer>
    </>
  );
}

export default App;
