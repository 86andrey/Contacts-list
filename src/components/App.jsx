import {
  
  Container,
  ContactsList,
  Filter,
  ResponsiveAppBar,
  NavBarButton,
} from 'components';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
// import { useToggle } from 'hooks/useToggle';

export const App = () => {
  const [filteredContacts, filter, setFilter] = useFilteredContacts();
  // const { isOpenFilter, isOpenAddForm, isOpenUpdateForm } = useToggle();

  return (
    <Container>
      <ResponsiveAppBar/>
      {/* <NavBar /> */}
      {/* {isOpenAddForm && <AddContactsForm type={'add'} />} */}
      {/* {isOpenUpdateForm && <AddContactsForm type={'update'} />} */}
      
        <Filter value={filter} onSearch={e => setFilter(e.target.value)} />
      

      <ContactsList contacts={filteredContacts} />
      <NavBarButton/>
    </Container>
  );
};
