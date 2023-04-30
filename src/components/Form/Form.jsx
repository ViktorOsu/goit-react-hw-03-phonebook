import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm, SubmitBtn, FormTitle, FormItem } from './Form.styled';

export class Form extends Component {
  state = {
    number: '',
    name: '',
  };

  // onInputChangeName = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };

  // onInputChangeNumber = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.nameDublicate(contact.name)
      ? alert(`${contact.name} is already in your contacts.`)
      : this.props.addContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // console.log('name', this.state.name);
    // console.log('number', this.state.number);
    return (
      <PhonebookForm>
        <form onSubmit={this.onFormSubmit}>
          <FormTitle>Phonebook</FormTitle>
          <FormItem>Name</FormItem>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormItem>Number</FormItem>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </form>
      </PhonebookForm>
    );
  }
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
