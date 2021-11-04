import React, { Component } from 'react';
import data from './data/data';
import { mapper } from './js/mapper';
import { FilmsList } from './components/FilmsList/FilmsList';
import { Modal } from './components/Modal/Modal';

export default class App extends Component {
  state = {
    films: [...mapper(data.results)],
    text: '',
  };

  onText = text => {
    this.setState({ text: text });
  };

  onCloseModal = () => {
    this.setState({ text: '' });
  };

  render() {
    const { films, text } = this.state;
    return (
      <>
        <FilmsList data={films} onText={this.onText} />
        {text && <Modal text={text} />}
      </>
    );
  }
}
