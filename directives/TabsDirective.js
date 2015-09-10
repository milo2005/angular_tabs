app.directive("tabHost", function(){

  return {
    restrict:'E',
    transclude:true,
    controller:function($scope){
      $scope.tabs=[];

      $scope.selectTab= function(tab){
        angular.forEach($scope.tabs, function(t){
          t.selected = false;
        });
        tab.selected = true;
      };

      this.addTab= function(tab){
          if($scope.tabs.length==0){
            tab.selected=true;
          }else{
            tab.selected=false;
          }

          $scope.tabs.push(tab);
          console.log("agrego");
      };
    },
    templateUrl:'directives/tab-host.html'
  };

});
