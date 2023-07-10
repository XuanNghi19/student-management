import * as index from '../index.js';

export { 
  control,
  person,
  type,
  showPopup,
}

var control = {
  popupOpen: false,
  id: null,
  currentSelection: null
}

var person = {
  name: '',
  year_of_birth: null,
  type: null
}

var type = {
  name: '',
  pType: null
}

function showPopup(nameOfData, currentSelection, id) {
  control.popupOpen = true;
  control.id = id;
  control.currentSelection = currentSelection;
  index.single_data_search(nameOfData, id);
}