// set the allowed units for data grouping

export const candleOptions = {
  chart: {
    events: {
      load: function(event) {
        // Get the volume series by id.
        const volSeries = this.series.find(function(s) {
          return s.userOptions.id === 'aapl-volume';
        });
        // Override the pointAttribs function on the volume series.
        volSeries.pointAttribs = (function(original) {
          return function(point, state) {
            // Call the original pointAttribs function.
            const attribs = original.apply(this, arguments);
            // Get the price series using the id.
            const priceSeries = point.series.chart.series.find(function(s) {
              return s.userOptions.id === 'aapl-candlestick';
            });
            // Find the candle corresponding to the current volume point.
            let candle;
            if (point.series.hasGroupedData) {
              // With grouped data, we need to find the candle from the grouped data.
              const datagroup = point.dataGroup;
              const groupIdx = point.series.groupMap.indexOf(datagroup);
              candle = priceSeries.groupedData[groupIdx];
            } else {
              // Non-grouped data, we can just use the normal data.
              candle = priceSeries.data[point.index];
            }
            // Choose the color for the volume point based on the candle properties.
            let color = 'blue';
            if (candle.close > candle.open) {
              color = candle.series.userOptions.upColor;
            } else if (candle.close < candle.open) {
              color = candle.series.userOptions.color;
            }
            // Set the volume point's attribute(s) accordingly.
            attribs.fill = color;
            // Return the updated attributes.
            return attribs;
          };
        })(volSeries.pointAttribs);
        // Need to call update so the changes get taken into account on first draw.
        this.update({});
      }
    }
  },
  rangeSelector: {
    // selected: 0,
    enabled: true
  },
  navigator: { enabled: true },
  legend: { enabled: false },
  yAxis: [
    {
      title: 'y1',
      labels: {
        enabled: true,
        x: -15
      },
      height: '80%',
      resize: {
        enabled: true
      }
    },
    {
      title: 'y2',
      labels: {
        enabled: false
      },
      top: '80%',
      height: '20%',
      offset: 0
    }
  ],
  series: [
    {
      type: 'candlestick',
      id: 'aapl-candlestick',
      name: 'AAPL Stock Price',
      data: [],
      yAxis: 0,
      color: '#cf6753',
      upColor: '#83ad91'
    },
    {
      type: 'column',
      id: 'aapl-volume',
      name: 'AAPL Volume',
      data: [],
      yAxis: 1
    }
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 800
        },
        chartOptions: {
          rangeSelector: {
            inputEnabled: false
          }
        }
      }
    ]
  }
};
