import PropTypes from 'prop-types';
import { FilterCont, FilterTitle } from './Filter.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <FilterCont>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        onChange={e => onChangeFilter(e.currentTarget.value)}
      />
    </FilterCont>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
