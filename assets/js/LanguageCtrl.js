app.controller('LanguageCtrl', ['$scope', function LanguageController($scope) {
  var lang = 'en';
  var URLLang = window.location.hash;

  if (URLLang.length !== 0) {
    lang = URLLang.substring(1, URLLang.lengh);
  }

  if (!texts.hasOwnProperty(lang)) lang = 'en';
  
  $scope.language = texts[lang];

  $scope.setLanguage = function (language) {
    window.location.hash = language;
    $scope.language = texts[language];
  };
}]);