import * as index from '../index.js';

export { 
  min_or_max 
}

function min_or_max(character, nameOfData) {
  if(character === 'min') {
    if(nameOfData === 'students') {
      index.pagination_student.pageSelect = 0;
      index.pagination_student.start = 0;
      index.pagination_student.end = index.pagination_student.numberArryPage.length - 1;
      index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.numberArryPage.length }, (_,i) => i);
    } else if(nameOfData === 'type') {
      index.pagination_type.pageSelect = 0;
      index.pagination_type.start = 0;
      index.pagination_type.end = index.pagination_type.numberArryPage.length - 1;
      index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.numberArryPage.length }, (_,i) => i);
    } 
  } else if(character === 'max') {
    if(nameOfData === 'students') { 
      index.pagination_student.pageSelect = index.pagination_student.totalPage;
      index.pagination_student.start = index.pagination_student.totalPage + 1 - index.pagination_student.numberArryPage.length;
      index.pagination_student.end = index.pagination_student.totalPage;
      index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
    } else if(nameOfData === 'type') {
      index.pagination_type.pageSelect = index.pagination_type.totalPage;
      index.pagination_type.start = index.pagination_type.totalPage + 1 - index.pagination_type.numberArryPage.length;
      index.pagination_type.end = index.pagination_type.totalPage;
      index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
    }
  }
}