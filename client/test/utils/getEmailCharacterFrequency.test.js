import { getEmailCharacterFrequency } from '../../src/utils'

describe('getEmailCharacterFrequency', ()=> {

  it('should take an object with no data and return an empty frequency count', ()=>{
    const mock_people_data = {}
    const mock_result = []
    expect(getEmailCharacterFrequency(mock_people_data)).toEqual(mock_result)
  })

  it('should take an object with 1 person\'s data and return a frequency count of e-mail characters', ()=>{
    const mock_people_data = {
      '0': {
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
    }
    const mock_result = [
      {
        "character": "a",
        "frequency": 3
      },
      {
        "character": "l",
        "frequency": 3
      },
      {
        "character": "e",
        "frequency": 2
      },
      {
        "character": "o",
        "frequency": 2
      },
      {
        "character": "m",
        "frequency": 2
      },
      {
        "character": "s",
        "frequency": 2
      },
      {
        "character": "@",
        "frequency": 1
      },
      {
        "character": "i",
        "frequency": 1
      },
      {
        "character": "f",
        "frequency": 1
      },
      {
        "character": "t",
        "frequency": 1
      },
      {
        "character": ".",
        "frequency": 1
      },
      {
        "character": "c",
        "frequency": 1
      }
    ]
    expect(getEmailCharacterFrequency(mock_people_data)).toEqual(mock_result)
  });

  it('should take an object with people data and return a frequency count of e-mail characters', ()=>{
    const mock_people_data = {
      '0': {
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '1': {
        email: 'emailb@salesloft.com',
        name: 'Test Person B',
        title: 'Test Title B'
      },
      '2': {
        email: 'emailb@salesloft.com',
        name: 'Test Person C',
        title: 'Test Title C'
      },
    }
    const mock_result = [
     {
       'character': 'e',
       'frequency': 4,
     },
     {
       'character': 'l',
       'frequency': 3,
     },
     {
       'character': 'f',
       'frequency': 2,
     },
     {
       'character': 'i',
       'frequency': 2,
     },
     {
       'character': 'm',
       'frequency': 2,
     },
     {
       'character': 'a',
       'frequency': 2,
     },
     {
       'character': 'd',
       'frequency': 2,
     },
     {
       'character': 'o',
       'frequency': 2,
     },
     {
       'character': 's',
       'frequency': 2,
     },
     {
       'character': 'n',
       'frequency': 2,
     },
     {
       'character': '@',
       'frequency': 1,
     },
     {
       'character': 'b',
       'frequency': 1,
     },
     {
       'character': 't',
       'frequency': 1,
     },
     {
       'character': '.',
       'frequency': 1,
     },
     {
       'character': 'u',
       'frequency': 1,
     },
     {
       'character': 'c',
       'frequency': 1,
     },
   ]
    expect(getEmailCharacterFrequency(mock_people_data)).toEqual(mock_result)
  });
});