import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private http: HttpClient) { }
  show=false;
  public response: any;
  public gridData: GridDataResult;

  ngOnInit() {
  }

  showGrid(){
    this.show = true;
    let obs=this.http.get('https://jsonplaceholder.typicode.com/todos/');
    obs.subscribe((response)=> {
    this.response= response;
    this.loadProducts();
    }
    )
  }

  closeGrid(){
    this.show = false;
  }

  private loadProducts(): void {
    this.gridData = { data: this.response,
      total: this.response.length
    };
  }
  
}