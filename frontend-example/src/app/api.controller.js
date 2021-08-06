(function () {
  function ApiController($scope, $q) {
    $scope.api = {};
    $scope.api.title = "Hello World!";
    axios.defaults.baseURL = "http://omdbapi.com/";

    var vm = this;
    $scope.api.items = [];

    function getItems() {
      const movie = vm.search || "superman";
      $q.when(axios.get(`?s=${movie}&apikey=ba1f4581`)).then((response) => {
        $scope.api.items = response.data.Search;
      });
    }

    getItems();

    angular.extend(this, {
      getItems: getItems,
    });
  }

  angular.module("MyApp", []).controller("ApiController", ApiController);
})();
