import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  value: string = "1234567890";
  mask: string = "(000) 000-0000";
  maskValidation: boolean = true;
  title="Not your usual Hello World!";
  codes: Array<string> = [
    '+1','+852', '+91',  '+65',
    '+61', '+359', '+31', '+41'
  ];
  works=true;
  code: string ='+1';
  handles: Array<string> = [
    '@progress.com', '@telerik.com'
  ];
  handle: string ='@progress.com';
  opened = false;
  
  constructor(private notificationService: NotificationService) {}
  
  buttonWorks(){
    this.title = "Kendo UI button works!";
    this.works=false;
  }

  intro(){
    this.title="Not your usual Hello World!";
    this.works=true;
  }

  close() {
    this.opened = false;
  }

  open() {
    this.opened = true;
   }

  show(): void {
    this.notificationService.show({
      content: 'Your data has been saved!',
      animation: { type: 'slide', duration: 500},
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'success', icon: true }
    });
    this.opened = false;
  } 
}
