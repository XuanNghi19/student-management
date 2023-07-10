import * as index from '../index.js';

export { 
  paginationInitialization 
}

function paginationInitialization(nameOfData) {
  let pagination = [];
  if(nameOfData === 'students') {
    index.reset_pagination_student();
    for(var i = 0; i < index.studentRenders.length; i++){
      let data = {
        stt: i+1,
        data: index.studentRenders[i]
      }
      pagination.push(data);
      if(pagination.length === 9){
        index.pagination_student.arryPage.push(pagination);
        pagination = [];
      }
    }
    if(pagination.length) index.pagination_student.arryPage.push(pagination);
    index.pagination_student.totalPage = index.pagination_student.arryPage.length - 1;
    index.pagination_student.end = (index.pagination_student.totalPage + 1 > 4) ? 4 : index.pagination_student.totalPage;
    index.pagination_student.numberArryPage = Array.from({length: index.pagination_student.end + 1}, (_, i) => i);
  } else if(nameOfData === 'type') {
    index.reset_pagination_type();
    for(var i = 0; i < index.types.length; i++){
      let data = {
        stt: i+1,
        data: index.types[i]
      }
      pagination.push(data);
      if(pagination.length === 9){
        index.pagination_type.arryPage.push(pagination);
        pagination = [];
      }
    }
    if(pagination.length) index.pagination_type.arryPage.push(pagination);
    index.pagination_type.totalPage = index.pagination_type.arryPage.length - 1;
    index.pagination_type.end = (index.pagination_type.totalPage + 1 > 4) ? 4 : index.pagination_type.totalPage;
    index.pagination_type.numberArryPage = Array.from({length: index.pagination_type.end + 1}, (_, i) => i);
  }
}