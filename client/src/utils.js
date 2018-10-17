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


export const getPossibleDuplicates = (people)=> {

// create keyboards for key distance calculation
   let keyboards = {
    downcase:
`\`1234567890-=
qwertyuiop[]\\
asdfghjkl;'
zxcvbnm,./

`,
    upcase:
`~!@#$%^&*()_+
QWERTYUIOP{}|
ASDFGHJKL:"
ZXCVBNM<>?

`
}

  // take string format keyboards and map into array of rows of array of characters, removing empty values
  Object.keys(keyboards).map(kind=>{
    keyboards[kind] = keyboards[kind].split("\n")
      .filter(r=>r!='')
      .map(r=>r.split('')
    )
  })

  let distances_cache = {} // cache distances for faster lookup
  // getDistance takes two characters on a keyboard and returns the distance between them using Pythagorean theorem
  const getDistance = (a,b)=>{
    if(distances_cache[a+b]) return distances_cache[a+b]
    let a_x, a_y, b_x, b_y; // coordinates for character a and b
    // iterate over keyboard row and columns
    keyboards.downcase.map((row, y)=> {
      row.map((char, x)=>{
        // if a match is found in either keyboard get coordinates of a
        if(char == a || keyboards.upcase[y][x] == a){
          a_x = x
          a_y = y
        }
        // if a match is found in either keyboard get coordinates of b
        if(char == b || keyboards.upcase[y][x] == b){
          b_x = x
          b_y = y
        }
      })
    })
    // get distance between a and b
    let distance = Math.sqrt(Math.pow(a_x - b_x, 2) + Math.pow(a_y - b_y, 2))
    // return a distance of 1 if comparing bottom row keys and spacebar
    let regex = /\ |z|x|c|v|b|n|m|,|\.|\/|<|>|\?/i
    if((a.match(regex) && b == ' ') || (b.match(regex)) && a == ' '){
      distance = 1
    }
    distances_cache[a+b] = distance
    return distance
  }

  // filter takes a string and calculates each characters keyboard distance to the next character and filters out consecutive key strokes with <= 1 distance
  // reasong for this is to remove possible typos IE example@salesloft.com and exzample@salesloft.com. but will leave in exlmple@salesloft.com
  const filter = (input)=>{
    return input.substr(0,input.length-1)
              .split('')
              .map((c,i)=> [c, getDistance(c, input[i+1])] )
              .filter(a=> a[1] > 1)
              .map(a=>a[0])
  }

  // compareString gets key distances for two strings and compares distances of each components
  const compareStrings = (a,b)=>{
    var distance = 0
    let max = Math.max(a.length, b.length)
    let i = 0
    a = filter(a)
    b = filter(b)
    while(i < max){
      if(a[i] != undefined && b[i] != undefined){ // check for inequal string length
        distance += Math.abs(getDistance(a[i], b[i])) // add absolute distance between characters
      } else {
        distance++
      }
      i++
    }
    return distance
  }

  // compare each person to each other person, generate scores for attributes
  let scores = {}
  people = Object.keys(people).map(id=>people[id])
  people.map(p=>{
    people.map(p2=>{
      let email_score = compareStrings(p.email, p2.email)
      let name_score = compareStrings(p.name, p2.name)
      // check for different ids and low email and name differences (meaning they are similar)
      if(p.id != p2.id && email_score <= 15 && name_score < 10){
        // generate a key from the lowest id + highest id to de-duplicate [0,1] + [1,0] scores from being added
        let key = Math.min(parseInt(p.id), parseInt(p2.id)).toString() + Math.max(parseInt(p.id), parseInt(p2.id)).toString()
        // add key to scores with combined email and name score
        scores[key] = [p, p2, email_score + name_score]
      }
    })
  })

  // return data in ReactTable compatible format
  return Object.keys(scores).map(k=>({person_a: scores[k][0], person_b: scores[k][1], score: scores[k][2]}))

}


