(function() {
  function AppController($scope) {
    $scope.title = "Hello World!";
    var vm = this;
    vm.listObj = [
      { id: 1, name: "Rodrigo", age: 21 },
      { id: 2, name: "Gabriel", age: 22 }
    ];

    function appendElements() {
      if (!vm.name || !vm.age) {
        return;
      }

      if (vm.name.trim() && vm.age.trim()) {
        vm.listObj.push({
          name: vm.name,
          age: vm.age,
          id: vm.listObj.length + 1
        });
      }
      vm.name = "";
      vm.age = "";
    }

    function deleteElement(id) {
      vm.listObj = vm.listObj.filter(function(obj) {
        return obj.id !== id;
      });
    }

    angular.extend(this, {
      appendElements: appendElements,
      deleteElement: deleteElement
    });
  }

  angular.module("MyApp", []).controller("AppController", AppController);
})();
