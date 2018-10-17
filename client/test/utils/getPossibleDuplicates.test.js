import { getPossibleDuplicates } from '../../src/utils'

describe('getPossibleDuplicates', ()=> {

  it('should take an object with no data and return an empty duplicate array', ()=>{
    const mock_people_data = {}
    const mock_result = []
    expect(getPossibleDuplicates(mock_people_data)).toEqual(mock_result)
  })

  it('should take an object with 1 person\'s data and return an empty duplicate array', ()=>{
    const mock_people_data = {
      '0': {
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
    }
    const mock_result = []
    expect(getPossibleDuplicates(mock_people_data)).toEqual(mock_result)
  });

  it('should return no results for dissimilar people data', ()=>{
    const mock_people_data = {
      '0': {
        id: '0',
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '1': {
        id: '1',
        email: 'different@salesloft.com',
        name: 'Some other person',
        title: 'Test Title C'
      }
    }
    const mock_result = []
    let result = getPossibleDuplicates(mock_people_data)
    expect(result.length).toEqual(mock_result.length)
  })

  it('should detect a similar name + email but different title', ()=>{
    const mock_people_data = {
      '0': {
        id: '0',
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '1': {
        id: '1',
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Promoted Title'
      }
    }
    const mock_result = [
      [mock_people_data['0'], mock_people_data['1']]
    ]
    let result = getPossibleDuplicates(mock_people_data)
    expect(result.length).toEqual(mock_result.length)
  })

  it('should detect possible accidental additional keystrokes (typos)', ()=>{
    const mock_people_data = {
      '0': {
        id: '0',
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '1': {
        id: '1',
        email: 'emailza@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '2': {
        id: '2',
        email: 'different@salesloft.com',
        name: 'Some other person',
        title: 'Test Title C'
      }
    }
    const mock_result = [
      [mock_people_data['0'], mock_people_data['1']],
    ]
    let result = getPossibleDuplicates(mock_people_data)
    expect(result.length).toEqual(mock_result.length)
  })

  it('should take an object with some similar people data and return a possible duplicates array', ()=>{
    const mock_people_data = {
      '0': {
        id: '0',
        email: 'emaila@salesloft.com',
        name: 'Test Person A',
        title: 'Test Title A'
      },
      '1': {
        id: '1',
        email: 'emailb@salesloft.com',
        name: 'Test Person B',
        title: 'Test Title B'
      },
      '2': {
        id: '2',
        email: 'adifferentemail@example.com',
        name: 'Some other person',
        title: 'Test Title C'
      },
      '3': {
        id: '3',
        email: 'samedomain@salesloft.com',
        name: 'Still someone else',
        title: 'Test Title D'
      },
    }
    const mock_result = [
      [mock_people_data['0'], mock_people_data['1']],
    ]

    let result = getPossibleDuplicates(mock_people_data)
    expect(result.length).toEqual(mock_result.length)
  });
});