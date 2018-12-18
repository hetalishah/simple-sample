import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public value: string = "1234567890";
  public mask: string = "(000) 000-0000";
  public maskValidation: boolean = true;
  title="Not your usual Hello World!";
  public codes: Array<string> = [
    '+1','+852', '+91',  '+65',
    '+61', '+359', '+31', '+41'
  ];
  works=true;
  public code: string ='+1';
  public handles: Array<string> = [
    '@progress.com', '@telerik.com'
  ];
  public handle: string ='@progress.com';
  buttonWorks(){
    this.title = "Kendo UI button works!";
    this.works=false;
  }

  intro(){
    this.title="Not your usual Hello World!";
    this.works=true;
  }

  opened = false;

  close() {
    this.opened = false;
  }

  open() {
    this.opened = true;
   }

  constructor(
    private notificationService: NotificationService
  ) {}

  public show(): void {
    this.notificationService.show({
      content: 'Your data has been saved!',
      animation: { type: 'slide', duration: 500},
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'success', icon: true }
    });
    this.opened = false;
  }
    
}
