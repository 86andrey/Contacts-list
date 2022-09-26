import {
  
  Container,
  ContactsList,
  Filter,
  ResponsiveAppBar,
  NavBarButton,
  Modal,
} from 'components';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { useToggle } from 'hooks/useToggle';

export const App = () => {
  const [filteredContacts, filter, setFilter] = useFilteredContacts();
  const { isOpenUpdateForm } = useToggle();

  return (
    <Container>
      <ResponsiveAppBar/>
      {/* <NavBar /> */}
      {/* {isOpenAddForm && <AddContactsForm type={'add'} />} */}
      {/* {isOpenUpdateForm && <AddContactsForm type={'update'} />} */}
      {isOpenUpdateForm && <Modal/>}

      <Filter value={filter} onSearch={e => setFilter(e.target.value)} />
      <ContactsList contacts={filteredContacts} />
      <NavBarButton/>
    </Container>
  );
};
