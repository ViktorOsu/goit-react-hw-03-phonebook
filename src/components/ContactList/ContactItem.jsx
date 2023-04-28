import PropTypes from 'prop-types';
import {
  ContItem,
  ContactName,
  ContactNbr,
  DeleteBtn,
} from './ContactList.styled';

export const ContactItem = ({ id, name, number, itemDelete }) => {
  return (
    <ContItem>
      <ContactName> {name}: </ContactName>
      <ContactNbr>{number}</ContactNbr>
      <DeleteBtn type="button" onClick={() => itemDelete(id)}>
        Delete
      </DeleteBtn>
    </ContItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemDelete: PropTypes.func.isRequired,
};
