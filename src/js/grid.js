/*
  LIGHTSTREAMER - www.lightstreamer.com
  JMS Stock-List Demo

  Copyright (c) Lightstreamer Srl

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

// Create static grid to display values
const stocksGrid = new DynaGrid("stocks", true);
stocksGrid.setAutoCleanBehavior(true, false);
stocksGrid.setSort("stock_name");

stocksGrid.addListener({
  onVisualUpdate: function (key, info) {
    if (info == null) {
      // Cleaning
      return;
    }
    info.setHotTime(0);
    info.setHotToColdTime(400);
    info.setAttribute("yellow", "", "backgroundColor");
  }
});

export default stocksGrid;
