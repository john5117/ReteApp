(function() {
  angular.module('iDeliver')
    .factory('authFactory', function($http, $q) {
      var authFactory = {};

      // url is the base Url which can be easily change
      //  to different url resource keeping it aligned
      //  with the existing routes

      authFactory.login = function(loginData) {
        var url = '/auth/signIn';
        var defer = $q.defer();
        $http.post(url, loginData)
          .then(function loginSuccess(resData) {
            // ths first callback responds to the success of
            //  the request performed

            defer.resolve(resData);
          }, function loginError(resData) {
            // ths first callback responds to the success of the
            //  request performed

            defer.reject(resData);
          });

        return defer.promise;
      }

      // This methodes sends a http request
      // to the sever for signUp with the email,password and other biodatas
      authFactory.signUp = function(signUpData) {
        var url = '/auth/signUp';
        var defer = $q.defer();
        $http.post(url, signUpData)
          .then(function signUpSuccess(resData) {
            // ths first callback responds to the success of
            //  the request performed

            defer.resolve(resData);
          }, function signUpError(resData) {
            // ths first callback responds to the success of the
            //  request performed

            defer.reject(resData);
          });

        return defer.promise;
      }

      authFactory.getUserBio = function() {
        // note the http request from angular
        // already returns a promise value
        
        var url = '/auth/dashBoard';
        return $http.get(url);
      }
      return authFactory;
    });
})();
