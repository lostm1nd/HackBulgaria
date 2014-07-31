/* globals require */

require.config({
  paths: {
    'Q': 'bower_components/q/q'
  }
});

require(['Q'], function(Q) {
  'use strict';

  var uploadContainer = document.getElementById('upload');

  uploadContainer.ondragover = function() {
    this.className = 'hover';
    return false;
  };

  uploadContainer.ondragend = function() {
    this.className = '';
    return false;
  };

  uploadContainer.ondrop = function(ev) {
    ev.preventDefault();
    this.className = '';

    var files = ev.dataTransfer.files;

    uploadFiles(files);

    return false;
  };

  function uploadFiles(files) {
    var formData = new FormData();

    for (var i = 0; i < files.length; i++) {
      formData.append('filedate', files[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.onprogress = function(ev) {
      if (ev.lengthComputable) {
        var percentComplete = ev.loaded / ev.total;
      } else {
      }
    };
    xhr.open('POST', 'http://localhost:3000/fileUpload');
  }

});
