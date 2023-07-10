import * as index from '../index.js';

export {
  show_notify,
  validate_student,
  validate_type,
  cancel_noitify
}

var show_notify = { is: false };

function validate_student() {
  if(index.person.name !== '') {
    if(index.person.name.length < 4 || index.person.name.length > 150) {
      show_notify.is = true;
    }
  } else show_notify.is = true;
  if(index.person.year_of_birth === null) show_notify.is = true;

  if(!show_notify.is) {
    index.student_save();
  }
}

function validate_type() {
  if(index.type.name !== '') {
    if(index.type.name.length < 4 || index.type.name.length > 100) show_notify.is = true;
  } else show_notify.is = true;

  if(!show_notify.is) {
    index.type_save();
  }
}

function cancel_noitify() {
  show_notify.is = false;
}