import * as index from '../index.js';

export { 
  next_or_prev 
}

function next_or_prev(character, nameOfData) {
  if(character === '-') {
    if(nameOfData === 'students') {
      if(index.pagination_student.pageSelect > 0) index.pagination_student.pageSelect --;
      if(index.pagination_student.start > 0) {
        index.pagination_student.start --;
        index.pagination_student.end --;
        index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
      }
    } else if(nameOfData === 'type') {
      if(index.pagination_type.pageSelect > 0) index.pagination_type.pageSelect --;
      if(index.pagination_type.start > 0) {
        index.pagination_type.start --;
        index.pagination_type.end --;
        index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
      }
    }
  } else if(character === '+') {
    if(nameOfData === 'students') {
      if(index.pagination_student.pageSelect < index.pagination_student.totalPage) index.pagination_student.pageSelect ++;
      if(index.pagination_student.end < index.pagination_student.totalPage) {
        index.pagination_student.start ++;
        index.pagination_student.end ++;
        index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
      }
    } else if(nameOfData === 'type') {
      if(index.pagination_student.pageSelect < index.pagination_student.totalPage) index.pagination_student.pageSelect ++;
      if(index.pagination_type.end < index.pagination_type.totalPage) {
        index.pagination_type.start ++;
        index.pagination_type.end ++;
        index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
      }
    }
  }
}