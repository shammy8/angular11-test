import { Component, OnInit } from '@angular/core';
// import * as webix from '@xbs/webix-pro'; // un-commenting this throws the unknown view: pivot error

@Component({
  selector: 'app-root',
  template: `
    <div id="webix-button"></div>
    <div id="pivot-table" style="height: 600px"></div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  button!: webix.ui.button;
  pivotTable!: webix.ui.pivot;

  ngOnInit() {
    this.button = webix.ui({
      container: 'webix-button',
      view: 'button',
      label: 'Test',
    }) as webix.ui.button;

    this.pivotTable = webix.ui({
      container: 'pivot-table',
      view: 'pivot',
      max: 'true',
      data: [
        {
          name: 'Argentina',
          year: 2005,
          continent: 'South America',
          form: 'Republic',
          gdp: 181.357,
          oil: 1.545,
          balance: 4.699,
        },
        {
          name: 'Argentina',
          year: 2006,
          continent: 'South America',
          form: 'Republic',
          gdp: 212.507,
          oil: 1.732,
          balance: 7.167,
        },
      ],
      structure: {
        rows: ['form', 'name'],
        columns: ['year'],
        values: [
          { name: 'gdp', operation: 'sum' },
          { name: 'oil', operation: 'sum' },
        ],
        filters: [],
      },
    }) as webix.ui.pivot;
  }
}
