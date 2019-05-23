import React, { Component } from "./node_modules/react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input, FormBtn } from 
"../components/Form";
import DeleteBtn from "../components/DeleteBtn";

class Forms extends Component {
  state = {
    contacts: [],
    name: "",
    mobile: "",
    address: ""
  };

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = () => {
    API.getContacts()
      .then(res =>
        this.setState({ contacts: res.data })
      )
      .catch(err => console.log(err));
  };

  handleChange = key => {
    return event => {
      this.setState({
        [key]: event.target.value
      })
    }
  };

  handleDelete = id => () => {
    API.deleteContact(id).then(() => {
      this.setState({
        contacts: this.state.contacts.filter((item) => item._id !== id)
      });
    });
  }


  handleSubmit = event => {
    API.saveContact({
      name: this.state.name,
      mobile: this.state.mobile,
      address: this.state.address
    }).then(({data}) => {
      this.setState({
        contacts: [data, ...this.state.contacts]
      })
      event.preventDefault();
      this.setState({name: '', mobile: '', address: ''})
    })
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Input name="name" placeholder="Name" onChange={this.handleChange('name')} value={this.state.name}/>
          <Input name="mobile" placeholder="Mobile" onChange={this.handleChange('mobile')} value={this.state.mobile}/>
          <Input name="address" placeholder="Address" onChange={this.handleChange('address')} value={this.state.address}/>
          <FormBtn>Submit</FormBtn>
        </form>
        <div>
          <h1>Contacts</h1>
          {this.state.contacts.map(contact => {
            return (
              <p key={contact._id}>Name: {contact.name}<br/>
              Mobile: {contact.mobile}<br/>
              Address: {contact.address}
              <DeleteBtn onClick={this.handleDelete(contact._id)}/>
              </p>
              
            )})}
        </div>
      </Container>
    )
  }
}

export default Forms;

