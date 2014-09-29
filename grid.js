define(["DynaGrid"],function(DynaGrid) {
  
  //Create static grid to display values
  var stocksGrid= new DynaGrid("stocks", true);
  stocksGrid.setAutoCleanBehavior(true, false);
  stocksGrid.setSort("stock_name");

  stocksGrid.addListener({
    onVisualUpdate: function(key, info) {
      if (info == null) {
        // Cleaning
        return;
      }
      info.setHotTime(0);
      info.setHotToColdTime(400);
      info.setAttribute("yellow", "", "backgroundColor");
    }
  });  
  return stocksGrid;
});