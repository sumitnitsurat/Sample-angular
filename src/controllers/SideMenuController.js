module.exports = function($scope,$uibModal){
    var self=this;
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {
	  
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'SideMenuController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
};