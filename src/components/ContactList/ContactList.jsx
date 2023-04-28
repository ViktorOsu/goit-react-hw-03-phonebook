import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, itemDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          itemDelete={itemDelete}
        />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
