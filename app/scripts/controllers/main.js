'use strict';

angular.module('speechsubmissionApp')
  .controller('MainCtrl', function ($scope, $location) {

    console.log('OK', $scope);

    $scope.awesomeThings = [
      'Each day she became a more vital part of him',
      'A other text that the user must speech',
      'Well, I am bad at making these up I said'
    ];

    $scope.saveDetails = function() {
      console.log('Saving...', $location);
      $location.path('/record/');
    };

    var onFail = function(e) {
      console.log('Rejected!', e);
    };

    var onSuccess = function(s) {
      stream = s;
    };

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    var stream;
    var audio = document.querySelector('audio');


    $scope.startRecording = function() {
      if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: true}, onSuccess, onFail);
      } else {
        console.log('navigator.getUserMedia not present');
      }
    };

    $scope.stopRecording = function() {
      audio.src = window.URL.createObjectURL(stream);
    };

  });
