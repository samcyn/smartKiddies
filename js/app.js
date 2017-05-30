
var app = angular.module("smarted", ['angular-animated-modal', 'ui.router', 'ngMaterial', 'ngMessages', 'ngMap']);


app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
   var customPrimary = {
        '50': '#97e0dd',
        '100': '#83dad7',
        '200': '#70d4d0',
        '300': '#5cceca',
        '400': '#48c8c3',
        '500': '#39beb9',
        '600': '#33aaa6',
        '700': '#2d9793',
        '800': '#278380',
        '900': '#21706d',
        'A100': '#aae6e3',
        'A200': '#beebea',
        'A400': '#d2f1f0',
        'A700': '#1c5c59'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#164846',
        '100': '#1c5c59',
        '200': '#21706d',
        '300': '#278380',
        '400': '#2d9793',
        '500': '#33aaa6',
        '600': '#48c8c3',
        '700': '#5cceca',
        '800': '#70d4d0',
        '900': '#83dad7',
        'A100': '#48c8c3',
        'A200': '#39beb9',
        'A400': '#33aaa6',
        'A700': '#97e0dd'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);


   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
   /*$stateProvider.state('home', {
              url: '/home',
      templateUrl: "templates/home.html",
       controller:  "siteController"
    }); 

    $stateProvider.state('about', {
              url: '/about',
      templateUrl: "templates/about.html",
       controller: "siteController"
    }); 
     $stateProvider.state('learn', {
              url: '/learn',
      templateUrl: "templates/learn.html",
       controller: "siteController"
    }); 
    $stateProvider.state('contact', {
              url: '/contact',
      templateUrl: "templates/contact.html",
       controller: "siteController"
    });
     $stateProvider.state('other', {
              url: '/other',
      templateUrl: "templates/others.html",
       controller: "siteController"
    });  

   

   $urlRouterProvider.otherwise('/home');*/
});

