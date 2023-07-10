import * as index from '../index.js';

export { 
  pagination_student, 
  pagination_type, 
  reset_pagination_student, 
  reset_pagination_type 
}

var pagination_student = { 
  arryPage: [], 
  numberArryPage: [], 
  totalPage: 0, 
  pageSelect: 0, 
  start: 0, 
  end: 0 
}

function reset_pagination_student() {
  pagination_student.arryPage = []; 
  pagination_student.numberArryPage = [];
  pagination_student.totalPage = 0;
  pagination_student.pageSelect = 0;
  pagination_student.start = 0;
  pagination_student.end = 0;
}

var pagination_type = { 
  arryPage: [], 
  numberArryPage: [], 
  totalPage: 0, 
  pageSelect: 0, 
  start: 0, 
  end: 0 
}

function reset_pagination_type() {
  pagination_type.arryPage = [];
  pagination_type.numberArryPage = [];
  pagination_type.totalPage = 0;
  pagination_type.pageSelect = 0;
  pagination_type.start = 0;
  pagination_type.end = 0;
}

index.paginationInitialization('students');
index.paginationInitialization('type');