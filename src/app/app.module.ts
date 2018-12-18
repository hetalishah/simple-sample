import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridComponent } from './grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';





@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    DialogsModule,
    DropDownsModule,
    LabelModule,
    FormsModule,
    TooltipModule,
    NotificationModule,
    LayoutModule,
    GridModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
