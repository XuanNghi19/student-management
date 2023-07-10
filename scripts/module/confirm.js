import * as index from '../index.js';

export {
  data_confirm,
  showConfirm,
  cancelConfirm,
  confirm
}

var data_confirm = {
  confirmOpen: false,
  nameOfData: '', 
  currentSelection: null, 
  id: null
}

function showConfirm(nameOfData, currentSelection, id) {
  data_confirm.confirmOpen = true;
  data_confirm.nameOfData = nameOfData;
  data_confirm.currentSelection = currentSelection;
  data_confirm.id = id;
}

function confirm() {
  if(data_confirm.nameOfData === 'students') index.delete_data_Student(data_confirm.currentSelection, data_confirm.id);
  else if(data_confirm.nameOfData === 'type') index.delete_data_Type(data_confirm.currentSelection, data_confirm.id);
  cancelConfirm();
}

function cancelConfirm() {
  data_confirm.confirmOpen = false;
  data_confirm.nameOfData = '';
  data_confirm.currentSelection = null;
  data_confirm.id = null;
}