import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
am4core.useTheme(am4themes_kelly);

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class LeaveManagementComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.initChart()
      this.initChart1()
      this.initChart2()
    })
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
      "country": "Sick",
      "litres": 501.9
    }, {
      "country": "Personal",
      "litres": 301.9
    }, {
      "country": "Casual",
      "litres": 201.1
    }, {
      "country": "Privilege",
      "litres": 165.8
    }, {
      "country": "Vacation",
      "litres": 139.9
    }, {
      "country": "Childcare",
      "litres": 128.3
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.radius = am4core.percent(50)

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);

    // Add data
    chart.data = [{
      "month": 'January',
      "approved": 23.5,
      "rejected": 18.1
    }, {
      "month": 'February',
      "approved": 26.2,
      "rejected": 22.8
    }, {
      "month": 'March',
      "approved": 30.1,
      "rejected": 23.9
    }, {
      "month": 'April',
      "approved": 29.5,
      "rejected": 25.1
    }, {
      "month": 'May',
      "approved": 24.6,
      "rejected": 25
    }];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;

    // Create series
    function createSeries(field, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "month";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;

      let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }

    createSeries("approved", "Approved");
    createSeries("rejected", "Rejected");
  }

  initChart2() {
    let chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [{
      "month": "January",
      "value": 325
    }, {
      "month": "February",
      "value": 182
    }, {
      "month": "March",
      "value": 109
    }, {
      "month": "April",
      "value": 122
    }, {
      "month": "May",
      "value": 122
    }, {
      "month": "June",
      "value": 114
    }, {
      "month": "July",
      "value": 284
    }, {
      "month": "August",
      "value": 311
    }, {
      "month": "September",
      "value": 265
    }, {
      "month": "October",
      "value": 380
    }, {
      "month": "November",
      "value": 443
    }, {
      "month": "Deecmber",
      "value": 441
    }];


    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 40;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.CurvedColumnSeries());
    series.dataFields.categoryX = "month";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;

    series.columns.template.fillOpacity = 0.75;

    let hoverState = series.columns.template.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.tension = 0.4;

    chart.cursor = new am4charts.XYCursor();

    // Add distinctive colors for each column using adapter
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

  }

}
