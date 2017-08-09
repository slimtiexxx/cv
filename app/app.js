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
              "DOWNLOAD.PATH": "BALAZS_ANDRAS_EN.pdf",
              "MESSAGE.NOTREADY" : "I'm sorry for the inconveniences caused, but it is expected that the site will be fully completed on August 11, 2017.",
              "MESSAGE.NOTREADY.TITLE" : "Under development",
              "MESSAGE.NOTREADY.COLSE" : "Close",

              // EDUCATION
              "EDUCATION.TITLE" : "Education",

                // FIRST
                "EDUCATION.FIRST.NAME" : "Bernáth Kálmán Commerce High School",
                "EDUCATION.FIRST.DATE" : "01-09-2012 – 07-03-2014",
                "EDUCATION.FIRST.LOCATION" : "Vác (Hungary)",
                "EDUCATION.FIRST.DESCRIPTION.1" : "Learning the basics of commerce and marketing.",
                "EDUCATION.FIRST.DESCRIPTION.2" : "Basics of catering.",
                "EDUCATION.FIRST.DESCRIPTION.3" : "Getting knowledge of the global and local tourism.",

                // SECOUND
                "EDUCATION.SECOUND.NAME" : "VIK High School",
                "EDUCATION.SECOUND.DATE" : "10-03-2014 – 21-06-2017",
                "EDUCATION.SECOUND.LOCATION" : "Budapest (Hungary)",
                "EDUCATION.SECOUND.DESCRIPTION.1" : "Continued my education in the catering, and tourism sector.",
                "EDUCATION.SECOUND.DESCRIPTION.2" : "I took guided tours that upgraded my communication skills.",
                "EDUCATION.SECOUND.DESCRIPTION.3" : "I had English and Economy knowledges lessons",

              // EXPERIENCES
              "EXPERIENES.TITLE" : "Experiences",

                // FIRST
                "EXPERIENCES.FIRST.NAME" : "HR Assistant",
                "EXPERIENCES.FIRST.DATE" : "30-10-2015 - 30-11-2016",
                "EXPERIENCES.FIRST.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.FIRST.COMPANY" : "DPD Hungária Kft.",
                "EXPERIENCES.FIRST.DESCRIPTION.1" : "I was a HR assistant on student work.",
                "EXPERIENCES.FIRST.DESCRIPTION.2" : "Providing administrative tasks.",
                "EXPERIENCES.FIRST.DESCRIPTION.3" : "Assist in interviews.",
                "EXPERIENCES.FIRST.DESCRIPTION.4" : "Assisting incoming customers.",
                "EXPERIENCES.FIRST.DESCRIPTION.5" : "Helping the customer services work.",

                // SECOUND
                "EXPERIENCES.SECOUND.NAME" : "Freelancer",
                "EXPERIENCES.SECOUND.DATE" : "27-06-2016 - Present",
                "EXPERIENCES.SECOUND.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.SECOUND.DESCRIPTION.1" : "Hobby projects.",
                "EXPERIENCES.SECOUND.DESCRIPTION.2" : "Make webpages, in different programming languages.",
                "EXPERIENCES.SECOUND.DESCRIPTION.3" : "Using socket.io to make social games just for fun.",
                "EXPERIENCES.SECOUND.DESCRIPTION.4" : "AngularJS learning, build base angular websites, form validations etc... (Example this website too was built in Angular.)",

                // THIRD
                "EXPERIENCES.THIRD.NAME" : "Frontend Developer / Sitebuilder",
                "EXPERIENCES.THIRD.DATE" : "01-12-2016 - Present",
                "EXPERIENCES.THIRD.COMPANY" : "GBaRT Ltd.",
                "EXPERIENCES.THIRD.LOCATION" : "Budapest (Hungary)",
                "EXPERIENCES.THIRD.DESCRIPTION.1" : "Web application development.",
                "EXPERIENCES.THIRD.DESCRIPTION.2" : "Building full responsive websites.",
                "EXPERIENCES.THIRD.DESCRIPTION.3" : "Browser compatibility problem solving.",
                "EXPERIENCES.THIRD.DESCRIPTION.4" : "Using grid system of Bootstrap 3, 4.",
                "EXPERIENCES.THIRD.DESCRIPTION.5" : "Using modern CSS3 animations, keyframe.",
                "EXPERIENCES.THIRD.DESCRIPTION.6" : "Working in team (Project manager, Designer, Backend)",
                "EXPERIENCES.THIRD.DESCRIPTION.7" : "I've made websites for popular customers like Coca-Cola, Coke, Sucafina, Dreher, etc...",

              // REFERENCES
              "REFERENCES.TITLE" : "References",
              "REFERENCES.NAV.TEXT" : "Visit the page",

                  // 1
                  "REFERENCES.1.NAME" : "Apollo Energy Gum",
                  "REFERENCES.1.DESCRIPTION": "Az oldal a Svéd Gyufa Kft. megbízásából készült. A weboldal egy bizonyos termékbemutató promóciós oldal, valamit erről az oldalról lehet tovább látogatni a Svédgyufa webshopjára is. Animációkat, és háttérmozgást érdemes figyelni. :)",

              // SKILLS
              "SKILLS.TITLE" : "Skills",

                  "SKILL.1" : "Responsive",
                  "SKILL.2" : "English",
                  "SKILL.3" : "Japanese",

              "SKILL.BASIC" : "Basic",
              "SKILL.MEDIUM" : "Medium",
              "SKILL.ADVANCED" : "Advanced",
              "SKILL.EXPERT" : "Expert",

              // CONTACT
              "CONTACT.TITLE" : "Contact",
              "CONTACT.TEXT" : "If you are a private person, if you are an employer, I am looking forward to your inquiry. Please feel free to contact me. I do not bite.",
              "CONTACT.PHONE" : "Phone",

              // QUICK ID
              "QUICKID.TITLE" : "Quick ID",
              "QUICKID.COUNTRY" : "Hungary",

              // ENDING MESSAGE
              "ENDING.1" : "Thank you for",
              "ENDING.2" : "visiting my webside!"
          };

      var translationsHU =
          {
              // WELCOME
              "WELCOME.TITLE" : "Frontend Fejlesztő",
              "DOWNLOAD.CV" : "Önéletrajzom letöltése",
              "DOWNLOAD.PATH": "BALAZS_ANDRAS_HU.pdf",
              "MESSAGE.NOTREADY" : "Sajnálom az okozott kellemetlenségeket, de várhatóan az oldal 2017. augusztus 11.-én fog teljesen elkészülni.",
              "MESSAGE.NOTREADY.TITLE" : "Fejlesztés alatt",
              "MESSAGE.NOTREADY.COLSE" : "Bezár",

              // EDUCATION
              "EDUCATION.TITLE" : "Tanulmányok",

                  // FIRST
                  "EDUCATION.FIRST.NAME" : "Bernáth Kálmán Kereskedelmi Középiskola",
                  "EDUCATION.FIRST.DATE" : "2012-09-01 – 2014-03-07",
                  "EDUCATION.FIRST.LOCATION" : "Vác (Magyarország)",
                  "EDUCATION.FIRST.DESCRIPTION.1" : "Kereskedelem, és markeding alapjairól szereztem ismereteket.",
                  "EDUCATION.FIRST.DESCRIPTION.2" : "A vendéglátás alapjairól tanultam.",
                  "EDUCATION.FIRST.DESCRIPTION.3" : "Globális és lokális turizmus ismeretei.",

                  // SECOUND
                  "EDUCATION.SECOUND.NAME" : "VIK Gimnázium",
                  "EDUCATION.SECOUND.DATE" : "2014-03-10 – 2017-06-21",
                  "EDUCATION.SECOUND.LOCATION" : "Budapest (Magyarország)",
                  "EDUCATION.SECOUND.DESCRIPTION.1" : "Budapesten folytattam tanulmányaimat vendéglátás, és turizmus szakirányon.",
                  "EDUCATION.SECOUND.DESCRIPTION.2" : "Idegenvezetéseket tartottam, ami fejlesztette kommunikációs készségeimet.",
                  "EDUCATION.SECOUND.DESCRIPTION.3" : "Angol nyelv, és Gazdasági ismeretek leckéket vettem.",

              // EXPERIENCES
              "EXPERIENES.TITLE" : "Tapasztalatok",

                  // FIRST
                  "EXPERIENCES.FIRST.NAME" : "HR Asszisztens",
                  "EXPERIENCES.FIRST.DATE" : "2015-10-30 - 2016-11-30",
                  "EXPERIENCES.FIRST.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.FIRST.COMPANY" : "DPD Hungária Kft.",
                  "EXPERIENCES.FIRST.DESCRIPTION.1" : "Diákmunkán voltam HR asszisztens.",
                  "EXPERIENCES.FIRST.DESCRIPTION.2" : "Adminisztrációs feladatok ellátása.",
                  "EXPERIENCES.FIRST.DESCRIPTION.3" : "Asszisztálni az interjúkon.",
                  "EXPERIENCES.FIRST.DESCRIPTION.4" : "Beérkező ügyfelek eligazítása.",
                  "EXPERIENCES.FIRST.DESCRIPTION.5" : "Segíteni az ügyfélszolgálat munkáját.",

                  // SECOUND
                  "EXPERIENCES.SECOUND.NAME" : "Szabadúszó",
                  "EXPERIENCES.SECOUND.DATE" : "2016-06-27 - Jelenleg",
                  "EXPERIENCES.SECOUND.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.SECOUND.DESCRIPTION.1" : "Hobbi projektek",
                  "EXPERIENCES.SECOUND.DESCRIPTION.2" : "Weboldalak készítése, változó keretrendszerekkel.",
                  "EXPERIENCES.SECOUND.DESCRIPTION.3" : "Socket.io használata, közösségi játék készítéséhez, csak szórakozásból.",
                  "EXPERIENCES.SECOUND.DESCRIPTION.4" : "AngularJS tanulása, alap angular alapú weblapok készítése, form validációk stb... (A jelenlgei oldal is ezen nyelven keészült.)",

                  // THIRD
                  "EXPERIENCES.THIRD.NAME" : "Frontend Fejlesztő / Sitebuilder",
                  "EXPERIENCES.THIRD.DATE" : "2016-12-01 - Jelenleg",
                  "EXPERIENCES.THIRD.COMPANY" : "GBaRT Ltd.",
                  "EXPERIENCES.THIRD.LOCATION" : "Budapest (Magyarország)",
                  "EXPERIENCES.THIRD.DESCRIPTION.1" : "Web alkalmazás fejlesztése.",
                  "EXPERIENCES.THIRD.DESCRIPTION.2" : "Reszponzív weboldalak készítése.",
                  "EXPERIENCES.THIRD.DESCRIPTION.3" : "Böngésző kompatibilitási problémák megoldaása.",
                  "EXPERIENCES.THIRD.DESCRIPTION.4" : "Bootstrap 3, és 4 grid rendszer ismeret.",
                  "EXPERIENCES.THIRD.DESCRIPTION.5" : "Modern CSS3 animációk, keyframe használata.",
                  "EXPERIENCES.THIRD.DESCRIPTION.6" : "Csapatban dolgozás (Project Manager, Designer, Backend)",
                  "EXPERIENCES.THIRD.DESCRIPTION.7" : "Olyan népszerű ügyfeleknek készítettem weboldalakat mint Coca-Cola, Coke, Sucafina, Dreher stb...",

              // REFERENCES
              "REFERENCES.TITLE" : "Referenciák",
              "REFERENCES.NAV.TEXT" : "Tovább az oldalra",

                  // 1
                  "REFERENCES.1.NAME" : "Apollo Energy Gum",
                  "REFERENCES.1.DESCRIPTION": "Az oldal a Svéd Gyufa Kft. megbízásából készült. A weboldal egy bizonyos termékbemutató promóciós oldal, valamit erről az oldalról lehet tovább látogatni a Svédgyufa webshopjára is. Animációkat, és háttérmozgást érdemes figyelni. :)",

              // SKILLS
              "SKILLS.TITLE" : "Készségek",
                  "SKILL.1" : "Reszponzív",
                  "SKILL.2" : "Angol",
                  "SKILL.3" : "Japán",

              "SKILL.BASIC" : "Kezdő",
              "SKILL.MEDIUM" : "Átlagos",
              "SKILL.ADVANCED" : "Haladó",
              "SKILL.EXPERT" : "Szakértő",

              // CONTACT
              "CONTACT.TITLE" : "Kapcsolat",
              "CONTACT.TEXT" : "Ha magán személy vagy, ha munkáltató, várom a megkeresésedet. Lépj kapcsolatba velem bátran. Nem harapok.",
              "CONTACT.PHONE" : "Telefon",

              // QUICK ID
              "QUICKID.TITLE" : "Gyors infó",
              "QUICKID.COUNTRY" : "Magyarország",

              // ENDING MESSAGE
              "ENDING.1" : "Köszi, hogy",
              "ENDING.2" : "meglátogattad a weboldalam!"
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