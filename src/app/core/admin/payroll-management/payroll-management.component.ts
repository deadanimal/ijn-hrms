import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
am4core.useTheme(am4themes_kelly);

@Component({
  selector: 'app-payroll-management',
  templateUrl: './payroll-management.component.html',
  styleUrls: ['./payroll-management.component.scss']
})
export class PayrollManagementComponent implements OnInit {

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
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "month": "January",
      "year2017": 3.5,
      "year2018": 4.2
    }, {
      "month": "February",
      "year2017": 1.7,
      "year2018": 3.1
    }, {
      "month": "March",
      "year2017": 2.8,
      "year2018": 2.9
    }, {
      "month": "April",
      "year2017": 2.6,
      "year2018": 2.3
    }, {
      "month": "May",
      "year2017": 1.4,
      "year2018": 2.1
    }, {
      "month": "June",
      "year2017": 2.6,
      "year2018": 4.9
    }, {
      "month": "July",
      "year2017": 6.4,
      "year2018": 7.2
    }, {
      "month": "August",
      "year2017": 8,
      "year2018": 7.1
    }, {
      "month": "September",
      "year2017": 9.9,
      "year2018": 10.1
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Salary";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "month";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "{category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "month";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "{category} (2017): [bold]{valueY}[/]";
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "IT",
        litres: 501.9
      },
      {
        country: "Marketing",
        litres: 301.9
      },
      {
        country: "Medical",
        litres: 201.1
      },
      {
        country: "Engineering",
        litres: 165.8
      },
      {
        country: "Business",
        litres: 139.9
      },
      {
        country: "Legal",
        litres: 128.3
      }
    ];

    chart.innerRadius = 100;
    chart.radius = 80;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

  }

}
