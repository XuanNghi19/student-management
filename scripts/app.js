import * as index from './index.js';

// localStorage.clear();

var myApp = angular.module('App', []).controller('myController', function($scope) {
  $scope.students = index.students;
  $scope.types = index.types;
  $scope.pagination_student = index.pagination_student;
  $scope.pagination_type = index.pagination_type;
  $scope.control = index.control;
  $scope.person = index.person;
  $scope.type = index.type;
  $scope.data_confirm = index.data_confirm;
  $scope.show_notify = index.show_notify;
  $scope.newID = index.students.length - 1;
  $scope.renID_student = index.renID_student;
  $scope.renID_type = index.renID_type;
  
  $scope.search_student = index.search_student;
  $scope.next_or_prev =  index.next_or_prev;
  $scope.min_or_max =  index.min_or_max;
  $scope.selectPage =  index.selectPage;
  $scope.showPopup =  index.showPopup;
  $scope.student_cancel =  index.student_cancel;
  $scope.student_save =  index.student_save;
  $scope.type_cancel =  index.type_cancel;
  $scope.type_save =  index.type_save;
  $scope.delete_data_Student = index.delete_data_Student;
  $scope.delete_data_Type = index.delete_data_Type;
  $scope.showConfirm = index.showConfirm;
  $scope.cancelConfirm = index.cancelConfirm;
  $scope.confirm = index.confirm;
  $scope.validate_student = index.validate_student;
  $scope.validate_type = index.validate_type;
  $scope.cancel_noitify = index.cancel_noitify;
  $scope.single_data_search = index.single_data_search;
});