import EmailCharacterFrequency from '../components/EmailCharacterFrequency'
import { connect } from 'react-redux'

const getEmailCharacterFrequencyFromPeople = (people)=>{
  // initialize empty frequency array
  let frequencies = {};
  // transform object with id keys into array
  people = Object.keys(people).map(i=>people[i])
  // create continuous string of all email characters
  people = people.reduce((acc,val)=> acc.email + val.email)
  // split string into characters
  people = people.split('')
  // count each character in string
  people.map(c=> frequencies[c] == undefined ? frequencies[c] = 0 : frequencies[c]++);
  // format frequencies object into array of objects each with character and frequency attributes
  return Object.keys(frequencies).map(k=> ({ character: k, frequency: frequencies[k] }))
}

const mapStateToProps = state => ({
  data: getEmailCharacterFrequencyFromPeople(state.people),
  columns: [
    {
      Header: 'Character',
      accessor: 'character'
    },
    {
      Header: 'Count',
      accessor: 'frequency'
    }
  ]
});

export const EmailCharacterFrequencyContainer = connect(
  mapStateToProps
)(EmailCharacterFrequency);

export default EmailCharacterFrequencyContainer

