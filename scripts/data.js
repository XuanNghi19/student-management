export { 
  students, 
  types, 
  renID_student, 
  renID_type, 
  setStudents, 
  setTypes, 
  setRenID_student, 
  setRenID_type 
}

var students = [];

var types = [];

function setStudents(updateStudents) {
  students = updateStudents.slice();
}

var renID_student = { id: students.length };

function setRenID_student () {
  renID_student.id++;
}

var renID_type = { id: types.length };

function setRenID_type () {
  renID_type.id++;
}

if (localStorage.getItem('renID_student')) {
  renID_student = angular.fromJson(localStorage.getItem('renID_student'));
}

if (localStorage.getItem('renID_type')) {
  renID_type = angular.fromJson(localStorage.getItem('renID_type'));
}

function setTypes(updateTypes) {
  types = updateTypes.slice();
}

if (localStorage.getItem('students_List')) {
  setStudents(angular.fromJson(localStorage.getItem('students_List')));
}

if (localStorage.getItem('types_list')) {
  setTypes(angular.fromJson(localStorage.getItem('types_list')));
}