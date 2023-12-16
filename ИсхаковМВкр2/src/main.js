import {render, RenderPosition} from '../render.js';
import {ListComponent} from '../comps/listComponent.js';


const bodyContainer = document.querySelector('.list');


render(new ListComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);