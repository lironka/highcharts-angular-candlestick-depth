import { Component } from '@angular/core';
/**
 * import * as Highcharts from 'highcharts/highstock' <---- Doesn't work know
 * insterd use:
 * import * as Highcharts from 'highcharts';
 * import StockModule from 'highcharts/modules/stock';
 */

import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
import ExportingModule from 'highcharts/modules/exporting';
import * as HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import * as HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import * as HPriceIndicator from 'highcharts/modules/price-indicator';
import * as HFullScreen from 'highcharts/modules/full-screen';
import HStockTools from 'highcharts/modules/stock-tools';

import SunsetTheme from 'highcharts/themes/sunset';

StockModule(Highcharts); // <-- Have to be first
ExportingModule(Highcharts);
HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);

SunsetTheme(Highcharts);

@Component({
  selector: 'app-chart-stock',
  template: ''
})
export class ChartStockComponent {
  // For all demos:
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts
  chartOptions = null;

  constructor() {}
}
