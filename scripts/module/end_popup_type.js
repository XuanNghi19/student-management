import * as index from '../index.js';

export {
  type_cancel,
  type_save
}

function type_cancel() {
  index.control.popupOpen = false;
  index.type.name = '',
  index.type.pType = index.types[0]
}

function type_save() {
  let characterLength = index.type.name.length;
  if(characterLength >= 4 && characterLength <= 100) {
    var newtype = {
      id: index.control.id,
      name: index.type.name,
      parentId: (index.type.pType !== null) ? index.type.pType.id : null
    }
    if(index.control.id === index.renID_type.id) {
      index.add_data_Type(newtype);
      index.paginationInitialization('type');
      index.pagination_type.pageSelect = index.pagination_type.totalPage;
      index.setRenID_type();
      localStorage.setItem('renID_type', angular.toJson(index.renID_type));
    }
    else {
      index.fix_data_Type(newtype);
      index.paginationInitialization('type');
      index.pagination_type.pageSelect = index.control.currentSelection;
    }
  }
  index.type_cancel();
}