import * as index from '../index.js';

export { 
  selectPage 
}

function selectPage(selectNum, nameOfData) {
  if(nameOfData === 'students') {
    index.pagination_student.pageSelect = selectNum;
    if(index.pagination_student.numberArryPage.length === 5) {
        if(selectNum - 2 >= 0 && selectNum + 2 <= index.pagination_student.totalPage) {
          index.pagination_student.start = selectNum - 2;
          index.pagination_student.end = selectNum + 2;
          index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
        } else if(selectNum == 1) {
          index.pagination_student.start = selectNum - 1;
          index.pagination_student.end = selectNum + 3;
          index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
        } else if(selectNum == index.pagination_student.totalPage - 1) {
          index.pagination_student.end = selectNum + 1;
          index.pagination_student.start = selectNum - 3;
          index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end - index.pagination_student.start + 1 }, (_,i) => i + index.pagination_student.start);
        }
      }    
    } else if(nameOfData === 'type') {
    index.pagination_type.pageSelect = selectNum;
    if(index.pagination_type.numberArryPage.length === 5) {
      if(selectNum - 2 >= 0 && selectNum + 2 <= index.pagination_type.totalPage) {
        index.pagination_type.start = selectNum - 2;
        index.pagination_type.end = selectNum + 2;
        index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
      } else if(selectNum == 1) {
        index.pagination_type.start = selectNum - 1;
        index.pagination_type.end = selectNum + 3;
        index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
      } else if(selectNum == index.pagination_type.totalPage - 1) {
        index.pagination_type.end = selectNum + 1;
        index.pagination_type.start = selectNum - 3;
        index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end - index.pagination_type.start + 1 }, (_,i) => i + index.pagination_type.start);
      }
    } 
  }
}