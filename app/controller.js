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

    MainController.$inject = ['LocalStorage', 'QueryService', '$translate', '$scope', '$http'];


  function MainController(LocalStorage, QueryService, $translate) {

      // Language Change Select
      var ctrl = this;

      ctrl.language = 'en';
      ctrl.languages = ['en', 'hu'];
      ctrl.updateLanguage = function() {
          $translate.use(ctrl.language);
      };
  }


})();