/* globals require */

require.config({
  paths: {
    'Q': 'bower_components/q/q',
    'httpRequest': 'http-requester'
  }
});

require(['httpRequest', 'Q'], function(httpRequest, Q) {
  'use strict';

  var uploadContainer = document.getElementById('upload'),
      status = document.getElementById('status');

  uploadContainer.ondragover = function() {
    this.className = 'hover';
    return false;
  };

  uploadContainer.ondragleave = function() {
    this.className = '';
    return false;
  };

  uploadContainer.ondrop = function(ev) {
    ev = event || window.event;
    ev.preventDefault();

    this.className = '';
    status.style.width = '0%';

    var file = ev.dataTransfer.files[0];
    uploadFile(file)
    .then(function succes(res) {
      console.log(res);
      displayFile(file);
    }, function error(err) {
      console.log(err);
    })
    .done();

    return false;
  };

  function uploadFile(file) {
    var deferred = Q.defer();

    var formData = new FormData();
    formData.append('filedata', file);

    httpRequest.make('POST', 'http://localhost:3000/fileUpload', formData)
    .then(function success(res){
      console.log(res);
      status.style.width = '100%';
      deferred.resolve(res);
    }, function error(err) {
      console.log(err);
      deferred.reject(err);
    }, function progress(percentage) {
      status.style.width = percentage + '%';
    })
    .done();

    return deferred.promise;
  }

  function displayFile(file) {
    var acceptedFiles = ['image/png', 'image/jpeg', 'image/gif'];

    if (uploadContainer.children[0]) {
      uploadContainer.removeChild(uploadContainer.children[0]);
    }

    if (acceptedFiles.indexOf(file.type) != -1) {
      var reader = new FileReader();

      reader.onload = function (ev) {
        var image = new Image();
        image.src = ev.target.result;
        image.width = uploadContainer.scrollWidth;
        image.height = uploadContainer.scrollHeight;
        uploadContainer.appendChild(image);
      };

      reader.readAsDataURL(file);
    }
  }

});
