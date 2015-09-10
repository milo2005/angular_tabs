app.directive("tabContent", function(){

  return {
    restrict:'E',
    require:'^tabHost',
    transclude:true,
    scope:{
      selected:"=selected",
      title:'@'
    },
    templateUrl:'directives/tab-content.html',
    link:function(scope,element,attrs,tabHostCtrl){
      tabHostCtrl.addTab(scope);
    }
  };

});
