import React from 'react';
import { Modal } from './react-materialize';
import $ from "jquery";

class Modada extends React.Component {
  constructor () {
    super()
    this.showModal = this.showModal.bind(this);
    this.id = 'modal1'
  }

  showModal () {
    $(`#${this.id}`).modal('open');
  }

  render () {
    return (
      <div>
        <a onClick={this.showModal}>Register</a>
        <Modal id={this.id} modalOptions={ { dismissible: true, inDuration: 30 } }><p>sup</p></Modal>
      </div>
    )
  }
};

export default Modada;