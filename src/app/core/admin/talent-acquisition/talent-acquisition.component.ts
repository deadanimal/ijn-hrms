import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
am4core.useTheme(am4themes_kelly);

@Component({
  selector: 'app-talent-acquisition',
  templateUrl: './talent-acquisition.component.html',
  styleUrls: ['./talent-acquisition.component.scss']
})
export class TalentAcquisitionComponent implements OnInit {

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
    let chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [{
      "name": "Applications",
      "value": 600
    }, {
      "name": "Screened",
      "value": 300
    }, {
      "name": "Qualified",
      "value": 200
    }, {
      "name": "Interviewed",
      "value": 180
    }, {
      "name": "Offers Extended",
      "value": 50
    }, {
      "name": "Interviewed",
      "value": 20
    }, {
      "name": "Filled",
      "value": 10
    }];

    let series = chart.series.push(new am4charts.FunnelSeries());
    series.colors.step = 2;
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;

    series.labelsContainer.paddingLeft = 15;
    series.labelsContainer.width = 200;

    //series.orientation = "horizontal";
    //series.bottomRatio = 1;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    chart.legend.valign = "bottom";
    chart.legend.margin(5, 5, 20, 5);
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        "department": 'IT',
        "income": 114,
        "color": chart.colors.next()
      }, 
      {
        "department": 'Medic',
        "income": 161,
        "color": chart.colors.next()
      }, 
      {
        "department": 'Engineering',
        "income": 89,
        "color": chart.colors.next()
      }, 
      {
        "department": 'Sales',
        "income":54,
        "color": chart.colors.next()
      }, 
      {
        "department": 'Marketing',
        "income": 74,
        "color": chart.colors.next()
      },
      {
        "department": 'Legal',
        "income": 127,
        "color": chart.colors.next()
      }
    ];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "department";
    categoryAxis.renderer.inversed = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "department";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;

  }

}
