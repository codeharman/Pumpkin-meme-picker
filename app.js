import { catsData } from "./data.js";

const data = catsData;
const form = document.getElementById('form');
const button = document.getElementById('button');
const container = document.getElementById('container');

function render() {
  
  for (let i = 0; i < data.length; i++) {
    form.innerHTML += `
    <div>
      <input
        type='radio'
        name='cat'
        id='${data[i].category}'
      >
      <label for='${data[i].category}'>${data[i].category}</label>
    </div>
    `
  }

}

render()