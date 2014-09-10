define(["StaticGrid"],function(StaticGrid) {
  
  //Create static grid to display values
  var stocksGrid= new StaticGrid("stocks", true);
  stocksGrid.setAutoCleanBehavior(true, false);
  stocksGrid.addListener({
    onVisualUpdate: function(key, info) {
      if (info == null) {
        // Cleaning
        return;
      }

      info.setAttribute("yellow", "", "backgroundColor");
    }
  });  
  return stocksGrid;
});