import { Component, OnInit } from '@angular/core';

const dataPie = {
  chart: {
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Data 1",
      value: "379"
    },
    {
      label: "Data 2",
      value: "212"
    },
    {
      label: "Data 3",
      value: "121"
    }
  ]
};

const dataCol = {
  chart: {
    xaxisname: "Department",
    yaxisname: "No",
    theme: "fusion",
    palettecolors: "5d62b5,29c3be,f2726f"
  },
  data: [
    {
      label: "Department 1",
      value: "290"
    },
    {
      label: "Department 2",
      value: "260"
    },
    {
      label: "Department 3",
      value: "180"
    },
    {
      label: "Department 4",
      value: "140"
    },
    {
      label: "Department 5",
      value: "115"
    }
  ]
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  width = '100%';
  height = '100%';
  typePie = "pie2d";
  dataFormat = "json";
  dataSourcePie = dataPie;

  typeCol = "column2d"
  dataSourceCol = dataCol

  constructor() { }

  ngOnInit() {
    
  }

  updateOptions(){
    
  }

}
