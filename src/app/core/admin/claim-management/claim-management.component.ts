import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
am4core.useTheme(am4themes_kelly);

@Component({
  selector: 'app-claim-management',
  templateUrl: './claim-management.component.html',
  styleUrls: ['./claim-management.component.scss']
})
export class ClaimManagementComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.initChart()
      this.initChart1()
    })
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "type": "Sales",
      "visits": 3025
    }, {
      "type": "Marketing",
      "visits": 1882
    }, {
      "type": "Trasport",
      "visits": 1809
    }, {
      "type": "Travel",
      "visits": 1322
    }, {
      "type": "Communications",
      "visits": 1122
    }, {
      "type": "Wellbeing",
      "visits": 1114
    }, {
      "type": "Office",
      "visits": 984
    }, {
      "type": "Tender",
      "visits": 711
    }];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = sum / total * 100;
      }
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "type";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "type";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })


    let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    paretoValueAxis.renderer.opposite = true;
    paretoValueAxis.min = 0;
    paretoValueAxis.max = 100;
    paretoValueAxis.strictMinMax = true;
    paretoValueAxis.renderer.grid.template.disabled = true;
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    paretoValueAxis.numberFormatter.numberFormat = "#'%'"
    paretoValueAxis.cursorTooltipEnabled = false;

    let paretoSeries = chart.series.push(new am4charts.LineSeries())
    paretoSeries.dataFields.valueY = "pareto";
    paretoSeries.dataFields.categoryX = "type";
    paretoSeries.yAxis = paretoValueAxis;
    paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
    paretoSeries.bullets.push(new am4charts.CircleBullet());
    paretoSeries.strokeWidth = 2;
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";


  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.PieChart);

    // Add data
    chart.data = [{
      "country": "Approved",
      "litres": 501.9
    }, {
      "country": "Rejected",
      "litres": 301.9
    }, {
      "country": "In evaluation",
      "litres": 201.1
    }];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    chart.radius = am4core.percent(35)

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

}
