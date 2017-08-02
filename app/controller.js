/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  angular
      .module('boilerplate')
      .controller("MailgunController", function($scope, $http) {

          var mailgunUrl = "YOUR_DOMAIN_HERE";
          var mailgunApiKey = window.btoa("api:key-YOUR_API_KEY_HERE")

          $scope.send = function() {
              $http({
                  "method": "POST",
                  "url": "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
                  "headers": {
                      "Content-Type": "application/x-www-form-urlencoded",
                      "Authorization": "Basic " + mailgunApiKey
                  },
                  data: "from=" + "test@example.com" + "&to=" + "soeone@gmail.com" + "&subject=" + "MailgunTest" + "&text=" + "EmailBody"
              }).then(function(success) {
                  console.log("SUCCESS " + JSON.stringify(success));
              }, function(error) {
                  console.log("ERROR " + JSON.stringify(error));
              });
          }

      })

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();