import * as index from '../index.js';

export { 
  setData_from_localStorage,
  add_data_student, 
  fix_data_Student, 
  add_data_Type, 
  fix_data_Type,
  delete_data_Student,
  delete_data_Type
}

function setData_from_localStorage (nameList , tmpStorage) {
  localStorage.setItem(nameList, angular.toJson(tmpStorage));
}

function  add_data_student (newStudent) {
  index.students.push(newStudent);
  setData_from_localStorage('students_List', index.students, 'students');
}

function fix_data_Student (studentFix) {
  index.students[index.students.findIndex(tmp => tmp.id === studentFix.id)] = studentFix;
  setData_from_localStorage('students_List', index.students, 'students');
}

function add_data_Type (newType) {
  index.types.push(newType);
  setData_from_localStorage('types_list', index.types, 'type');
}

function fix_data_Type (TypeFix) {
  index.types[index.types.findIndex(tmp => tmp.id === TypeFix.id)] = TypeFix;
  setData_from_localStorage('types_list', index.types, 'type');
}

function delete_data_Student (currentSelection, id) {
  index.students.splice(index.students.findIndex(tmp => tmp.id === id), 1);
  setData_from_localStorage('students_List', index.students);
  index.search_student({ name: '', age: null, type: null });
  index.pagination_student.pageSelect = currentSelection;
}

function delete_data_Type (currentSelection, id) {
  index.types.splice(index.types.findIndex(tmp => tmp.id === id), 1);
  setData_from_localStorage('types_list', index.types);
  index.paginationInitialization('type');
  index.pagination_type.pageSelect = currentSelection;
}