define(['Q'], function (Q) {
  'use strict';

  var getHttpRequrest = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml3.XMLHTTP');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}

    try  {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}

    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}

    throw new Error("Could not create HTTP request object.");
  };

  var makeRequest = function (type, url, data) {
    var xhr = getHttpRequrest(),
        deferred = Q.defer();

    xhr.onload = function () {
      switch (Math.floor(xhr.status / 100)) {
        case 2:
          deferred.resolve(JSON.parse(xhr.responseText));
          break;
        default:
          deferred.reject(xhr.responseText);
          break;
      }
    };

    xhr.upload.onprogress = function (ev) {
      if (ev.lengthComputable) {
        var percent = Math.floor((ev.loaded / ev.total) * 100);
        deferred.notify(percent);
      }
    };

    xhr.open(type, url, true);
    xhr.send(data);

    return deferred.promise;
  };

  return {
    make: makeRequest
  };

});
