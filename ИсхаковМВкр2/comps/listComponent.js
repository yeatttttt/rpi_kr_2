import {createElement} from '../render.js';


function createListComponentTemplate() {
    return (
        `<ul id="list">
        <li>Яблочный сок</li>
        <li>Хлеб</li>
        <li>Манго</li>
        <li>Творог</li>
        <li>Сметана</li>
      </ul>`
      );
}


export class ListComponent {
  getTemplate() {
    return createListComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}
