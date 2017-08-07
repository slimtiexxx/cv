/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {


  angular
    .module('boilerplate', ['ngRoute', 'pascalprecht.translate'])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$translateProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider, $translateProvider) {

     $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
     });

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.interceptors.push('authInterceptor');

      var translationsEN =
          {
              // WELCOME
              "WELCOME.TITLE" : "Frontend Developer",
              "DOWNLOAD.CV" : "Download my resume",
              "MESSAGE.NOTREADY" : "I'm sorry for the inconveniences caused, but it is expected that the site will be fully completed on August 11, 2017.",
              "MESSAGE.NOTREADY.TITLE" : "Under development",
              "MESSAGE.NOTREADY.COLSE" : "Close",

              // EDUCATION
              "EDUCATION.TITLE" : "Education",

                // FIRST
                "EDUCATION.FIRST.NAME" : "Bernáth Kálmán Commerce High School",
                "EDUCATION.FIRST.DATE" : "20-07-1990",
                "EDUCATION.FIRST.LOCATION" : "Vác (Hungary)",
                "EDUCATION.FIRST.DESCRIPTION" : "I learned the basics of commerce and marketing here.",

                // SECOUND
                "EDUCATION.SECOUND.NAME" : "VIK High School",
                "EDUCATION.SECOUND.DATE" : "20-07-1990",
                "EDUCATION.SECOUND.LOCATION" : "Budapest (Hungary)",
                "EDUCATION.SECOUND.DESCRIPTION" : "I continued my education in Budapest, i took a guided tours that upgraded my communication skills.",
                "EDUCATION.SECOUND.DESCRIPTION.2" : "Here i graduated.",

              // EXPERIENCES
              "EXPERIENES.TITLE" : "Experiences",

                // FIRST
                "EXPERIENCES.FIRST.NAME" : "HR Assistant",
                "EXPERIENCES.FIRST.DATE" : "30-10-2015 - 30-11-2016",
                "EXPERIENCES.FIRST.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.FIRST.COMPANY" : "DPD Hungária Kft.",
                "EXPERIENCES.FIRST.DESCRIPTION.1" : "I was a HR assistant on student work.",
                "EXPERIENCES.FIRST.DESCRIPTION.2" : "Helped with the administration, in interviews with future colleagues.",

                // SECOUND
                "EXPERIENCES.SECOUND.NAME" : "Freelancer",
                "EXPERIENCES.SECOUND.DATE" : "27-06-2016 - Present",
                "EXPERIENCES.SECOUND.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.SECOUND.DESCRIPTION.1" : "We usually work in teams on private projects.",
                "EXPERIENCES.SECOUND.DESCRIPTION.2" : "I like to have private, or hobby projects to work. I can discover new techniques, processes.",

                // THIRD
                "EXPERIENCES.THIRD.NAME" : "Frontend Developer / Sitebuilder",
                "EXPERIENCES.THIRD.DATE" : "01-12-2016 - Present",
                "EXPERIENCES.THIRD.COMPANY" : "GBaRT Ltd.",
                "EXPERIENCES.THIRD.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.THIRD.DESCRIPTION.1" : "I've made websites for popular customers like Coca-Cola, Coke, Sucafina, Dreher, etc.",
                "EXPERIENCES.THIRD.DESCRIPTION.2" : "I learned a lot especially using HTML5, CSS3 animations, and the techniques of building full responsive Websites, and Web applications.",

              // REFERENCES
              "REFERENCES.TITLE" : "References",
              "REFERENCES.NAV.TEXT" : "Visit the page",

                  // 1
                  "REFERENCES.1.NAME" : "Apollo Energy Gum",
                  "REFERENCES.1.DESCRIPTION": "Az oldal a Svéd Gyufa Kft. megbízásából készült. A weboldal egy bizonyos termékbemutató promóciós oldal, valamit erről az oldalról lehet tovább látogatni a Svédgyufa webshopjára is. Animációkat, és háttérmozgást érdemes figyelni. :)",

              // SKILLS
              "SKILLS.TITLE" : "Skills"
          };

      var translationsHU =
          {
              // WELCOME
              "WELCOME.TITLE" : "Frontend Fejlesztő",
              "DOWNLOAD.CV" : "Önéletrajzom letöltése",
              "MESSAGE.NOTREADY" : "Sajnálom az okozott kellemetlenségeket, de várhatóan az oldal 2017. augusztus 11.-én fog teljesen elkészülni.",
              "MESSAGE.NOTREADY.TITLE" : "Fejlesztés alatt",
              "MESSAGE.NOTREADY.COLSE" : "Bezár",

              // EDUCATION
              "EDUCATION.TITLE" : "Tanulmányok",

                  // FIRST
                  "EDUCATION.FIRST.NAME" : "Bernáth Kálmán Kereskedelmi Középiskola",
                  "EDUCATION.FIRST.DATE" : "20-07-1990",
                  "EDUCATION.FIRST.LOCATION" : "Vác (Magyarország)",
                  "EDUCATION.FIRST.DESCRIPTION" : "Itt tanultam meg a kereskedelmi, és marketing szabályok alapjait.",

                  // SECOUND
                  "EDUCATION.SECOUND.NAME" : "VIK Középiskola",
                  "EDUCATION.SECOUND.DATE" : "20-07-1990",
                  "EDUCATION.SECOUND.LOCATION" : "Budapest (Magyarország)",
                  "EDUCATION.SECOUND.DESCRIPTION" : "Budapesten folytattam a tanulmányaimat, túra, és tárlatvezetéseket vezettem, ami fejlesztette kommunikációs készségeimet.",
                  "EDUCATION.SECOUND.DESCRIPTION.2" : "Itt érettségiztem.",

              // EXPERIENCES
              "EXPERIENES.TITLE" : "Tapasztalatok",

                  // FIRST
                  "EXPERIENCES.FIRST.NAME" : "HR Asszisztens",
                  "EXPERIENCES.FIRST.DATE" : "30-10-2015 - 30-11-2016",
                  "EXPERIENCES.FIRST.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.FIRST.COMPANY" : "DPD Hungária Kft.",
                  "EXPERIENCES.FIRST.DESCRIPTION.1" : "Diákmunkán voltam HR asszisztens",
                  "EXPERIENCES.FIRST.DESCRIPTION.2" : "Segítettem az adminisztrációban, és a leendő kollégák interjúztatásában.",

                  // SECOUND
                  "EXPERIENCES.SECOUND.NAME" : "Szabadúszó",
                  "EXPERIENCES.SECOUND.DATE" : "27-06-2016 - Jelenleg",
                  "EXPERIENCES.SECOUND.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.SECOUND.DESCRIPTION.1" : "Általában csapatban dolgozunk magán projekteken.",
                  "EXPERIENCES.SECOUND.DESCRIPTION.2" : "Szeretek magán vagy hobbi projekteket dolgozni. Új technikákat, folyamatokat fedezhetek fel.",

                  // THIRD
                  "EXPERIENCES.THIRD.NAME" : "Frontend Fejlesztő / Sitebuilder",
                  "EXPERIENCES.THIRD.DATE" : "01-12-2016 - Jelenleg",
                  "EXPERIENCES.THIRD.COMPANY" : "GBaRT Ltd.",
                  "EXPERIENCES.THIRD.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.THIRD.DESCRIPTION.1" : "Olyan népszerű ügyfeleknek készítettem weboldalakat mint Coca-Cola, Coke, Sucafina, Dreher stb...",
                  "EXPERIENCES.THIRD.DESCRIPTION.2" : "Sokat tanultam, elsősorban a HTML5-t, a CSS3 animációkat és a teljes körűen responsive weboldalak és webes alkalmazások fejlesztését.",

              // REFERENCES
              "REFERENCES.TITLE" : "Referenciák",
              "REFERENCES.NAV.TEXT" : "Tovább az oldalra",

                  // 1
                  "REFERENCES.1.NAME" : "Apollo Energy Gum",
                  "REFERENCES.1.DESCRIPTION": "Az oldal a Svéd Gyufa Kft. megbízásából készült. A weboldal egy bizonyos termékbemutató promóciós oldal, valamit erről az oldalról lehet tovább látogatni a Svédgyufa webshopjára is. Animációkat, és háttérmozgást érdemes figyelni. :)",

              // SKILLS
              "SKILLS.TITLE" : "Készségek"
          };

      $translateProvider.translations('en', translationsEN);
      $translateProvider.translations('hu', translationsHU);

      $translateProvider.preferredLanguage('en');
  }

  angular
    .module('boilerplate')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  angular
    .module('boilerplate')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {
  }



})();