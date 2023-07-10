import * as index from '../index.js';

export { 
  studentRenders, 
  search_student,
  single_data_search
}

var studentRenders = index.students.slice();

function search_student(pupil) {
  studentRenders = index.students.slice();
  if(pupil.name !== '')  filterName(pupil.name);
  if(pupil.age !== null) filterAge(pupil.age);
  if(pupil.type !== null) filterType(pupil.type);
  index.paginationInitialization('students');
}

function filterName(name) {
  studentRenders = studentRenders.filter(value => {
    return value.name.toUpperCase().includes(name.toUpperCase());
  });
}

function filterAge(age) {
  studentRenders = studentRenders.filter(value => {
    return value.age === age;
  });
}

function filterType(type) {
  studentRenders = studentRenders.filter(value => {
    return value.type === type;
  });
}

function single_data_search(nameOfData, id_search) {
  let id_draft;
  if(nameOfData === 'students' && id_search !== index.renID_student.id) {
    console.log(id_search);
    id_draft = index.students.findIndex((tmp => tmp.id === id_search));
    index.person.name = index.students[id_draft].name;
    index.person.year_of_birth = index.students[id_draft].year_of_birth;
    index.person.type = index.students[id_draft].type;
    console.log(index.person.type);
  } else if(nameOfData === 'type' && id_search !== index.renID_type.id) {
    id_draft = index.types.findIndex((tmp => tmp.id === id_search));
    index.type.name = index.types[id_draft].name;
    index.type.pType = index.types[index.types.findIndex((tmp => tmp.id === index.types[id_draft].parentId))];
 }
}