import { DoneList } from './components/DoneList/Index';
import { Header } from './components/Header/Header';
import { NotDoneList } from './components/NotDoneList/Index';
import { RemoveAllItemsBtn } from './components/RemoveAllItems/Index';
import { PageContainer } from './shared/components/PageContainer';
import { AddItem } from './components/AddItem/Index';
import { useGetters } from './shared/store/Store';
import { NoItemsMessage } from './components/NoItemsMessage/Index';
import { AllDoneMessage } from './components/AllDoneMessage/Index';

function App() {

  const { hasItems, isAllDone } = useGetters();

  return (
    <>
      <Header>
        <PageContainer className='d-flex justify-content-center'>
            <img style={{ width: '110px' }} src="logo.png" alt="Logo" />
        </PageContainer>
      </Header>

      <PageContainer className='mt-3'>
        <div className='mt-3 d-flex justify-content-end'>
          <RemoveAllItemsBtn />
        </div>

        <AddItem className='mt-5' />

        {isAllDone() && <AllDoneMessage className='mt-3' />}

        {hasItems() && (
          <>
            <NotDoneList className='mt-3' />
            <DoneList className='mt-3' />
          </>
        )}

        {!hasItems() && <NoItemsMessage className='mt-3' />}

      </PageContainer>
    </>
  );
}

export default App;
