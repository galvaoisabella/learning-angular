import { Component } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
    data = [
      {
        name: 'Test 1',
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
    ];
     
       options = { 
        fieldSeparator: ',',
      //   quoteStrings: '',
        decimalSeparator: '.',
        showLabels: false, 
        showTitle: true,
        title: 'sep=,',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: false,
        //headers: ['Column 1', 'Column 2', 'Column 3'] //<-- Won't work with useKeysAsHeaders present!
      };
     
   export(){
    const csvExporter = new ExportToCsv(this.options);
     
    csvExporter.generateCsv(this.data);
   }
}