angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('logo', {
    url: '/page4',
    templateUrl: 'templates/logo.html',
    controller: 'logoCtrl'
  })

  .state('home', {
    url: '/page5',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('meusDados', {
    url: '/page6',
    templateUrl: 'templates/meusDados.html',
    controller: 'meusDadosCtrl'
  })

  .state('cursos', {
    url: '/page7',
    templateUrl: 'templates/cursos.html',
    controller: 'cursosCtrl'
  })

  .state('chatBot', {
    url: '/page8',
    templateUrl: 'templates/chatBot.html',
    controller: 'chatBotCtrl'
  })

  .state('dicas', {
    url: '/page9',
    templateUrl: 'templates/dicas.html',
    controller: 'dicasCtrl'
  })

  .state('finanAs', {
    url: '/page10',
    templateUrl: 'templates/finanAs.html',
    controller: 'finanAsCtrl'
  })

  .state('caminhoDoSucesso', {
    url: '/page12',
    templateUrl: 'templates/caminhoDoSucesso.html',
    controller: 'caminhoDoSucessoCtrl'
  })

  .state('meusCursos', {
    url: '/page13',
    templateUrl: 'templates/meusCursos.html',
    controller: 'meusCursosCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});