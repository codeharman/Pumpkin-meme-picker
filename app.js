import { catsData } from './data.js';
const header = document.querySelector('.header');

let preview = ''

for(let i of catsData) {
  console.log(i)
  for(let emotion of i.emotionTags)
    if(!preview.includes(emotion)){
      preview += `
      <div class='radio'>
        <input
          type='radio'
          value='${emotion}'
          id='${emotion}'
          name='choice'
        >
        <label for='choice'>${emotion}</label>
      </div>
        `
    }
}

header.innerHTML = preview

console.log(header)