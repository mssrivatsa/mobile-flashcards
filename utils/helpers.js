import { fetchAllDecks, setData, addDeck, addCard, flush } from './api';
import { AsyncStorage } from 'react-native';

export function getDummyData() {
  const data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  setData(data);
  return data;
}

export function getDecks() {
  return fetchAllDecks().then((decks) => {
    if (decks !== null) {
      return decks;
    }

    return getDummyData();
  });
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {
  return addDeck(title);
}

export function addCardToDeck(title, card) {
  return addCard(title, card);
}
