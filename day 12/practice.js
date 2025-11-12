// const str ='I love JavaScript'
// const pattern =/love/
// const result =pattern.test(str)
// console.log(result);

// const Str = 'I love JavaScript'
// const Pattern = /love/g
// const Result = str.match(Pattern)
// console.log(Result)

// const STr = 'I love JavaScript'
// const PAttern = /love/g
// const REsult = str.search(PAttern)
// console.log(REsult)

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced)

// const Txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// // matche = Txt.replace(/%/g, ' ')
// // console.log(matche)  

// const PatTern = '[Aa]pple'
// const txet = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matche = txet.match(PatTern)
// console.log(matche) 

// const pat = /\d/g  
// const TEXT = 'This regular expression example was made in January 12,  2020.'
// const matches = TEXT. match(pat)

// console.log(matches)

// const pat = /\d+/g  
// const text = 'This regular expression example was made in January 12,  2020.'
// const matches = text. match(pat)
// console.log(matches)  

// const patttern = /[a]./g  
// const tExt = 'Apple and banana are fruits'
// const mAtches = tExt.match(patttern)

// console.log(mAtches) 

// const pattern = /[a].+/g  
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  

// const txte = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const PATtern = /[Ee]-?mail/g 
// matchess = txte.match(PATtern)

// console.log(matchess)

//  const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ 
// const matches = txt.match(pattern)
// console.log(matches) 

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  
// const matches = txt.match(pattern)
// console.log(matches) 

let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) 

