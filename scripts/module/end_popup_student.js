import * as index from '../index.js';

export {
  student_cancel,
  student_save
}

function student_cancel() {
  index.control.popupOpen = false;
  index.person.name = '';
  index.person.year_of_birth = null;
  index.person.type = index.types[0];
}

function student_save() {
  let character = index.person.name;
  if(character.length >= 4 && character.length <= 150) {
    var newStudent = {
      id: index.control.id,
      name: index.person.name,
      age: new Date().getFullYear() - index.person.year_of_birth.getFullYear(),
      year_of_birth: index.person.year_of_birth,
      type: index.person.type
    }
    if(index.control.id === index.renID_student.id) {
      index.add_data_student(newStudent);
      index.search_student({ name: '', age: null, type: null });
      index.pagination_student.pageSelect = index.pagination_student.totalPage;
      index.setRenID_student();
      localStorage.setItem('renID_student', angular.toJson(index.renID_student));
    }
    else {
      index.fix_data_Student(newStudent);
      index.search_student({ name: '', age: null, type: null });
      index.pagination_student.pageSelect = index.control.currentSelection;
    }
  }
  index.student_cancel();
}