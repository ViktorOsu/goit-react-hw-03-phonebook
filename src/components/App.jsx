import React, { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, ContactsTitle, ContactsWper } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addContact = contact => {
  //   this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  // };

  addContact = data => {
    const isName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      this.setState(({ contacts }) => {
        return { contacts: [{ ...data, id: nanoid() }, ...contacts] };
      });
    } else {
      alert(`${data.name} is already in your contacts.`);
    }
  };

  // nameDublicate = value =>
  //   this.state.contacts.some(c => c.name.toLowerCase() === value.toLowerCase());

  itemDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  // itemDelete = id => {
  //   const delEl = this.state.contacts.findIndex(el => el.id === id);

  //   this.setState(({ contacts }) => ({
  //     contacts: [
  //       ...contacts.slice(0, delEl),
  //       ...contacts.slice(delEl + 1, contacts.length),
  //     ],
  //   }));
  // };

  filterName = value => {
    this.setState({ filter: value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    // const filteredContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );

    return (
      <PhoneBook>
        <Form addContact={this.addContact} />
        <ContactsWper>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onChangeFilter={this.filterName} />
          <ContactList
            contacts={this.filteredContacts()}
            itemDelete={this.itemDelete}
          />
        </ContactsWper>
      </PhoneBook>
    );
  }
}
