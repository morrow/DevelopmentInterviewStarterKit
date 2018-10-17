export const merge = (...obj) => Object.assign({}, ...obj);

export const getEmailCharacterFrequency = (people)=>{
  let frequencies = {};
  let character_array = []
  let ids = Object.keys(people)
  // get character array from people data
  if(ids.length > 1){
    character_array = ids.map(i=> people[i] )                       /* Transform object with id keys for each person into array of people */
                        .reduce((acc,val)=> acc.email + val.email ) /* Reduce array of objects into continuous string of all email characters */
                        .split('')                                  /* Split combined email string into array of individual characters */
  }
  else if(ids.length == 1){
    // fetch first email value and split
    character_array = people[ids[0]].email.split('') /* split email value of first object in array */
  }
  // Iterate through array of characters, increase frequency count for that character
  character_array.map(c=> frequencies[c] == undefined ? frequencies[c] = 1 : frequencies[c]++);
  return Object.keys(frequencies)
          .map(k=> ({ character: k, frequency: frequencies[k] }))   /* map frequency count into object with character and frequency attributes */
          .sort((a,b)=> a.frequency < b.frequency ? 1 : -1)         /* sort values by frequency, descending */
}