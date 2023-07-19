import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewpipePipe } from './pipes/newpipe.pipe';
import { ChildComponent } from './coponents/child/child.component';
import { ParantComponent } from './coponents/parant/parant.component';

@NgModule({
  declarations: [
    AppComponent,
    NewpipePipe,
    ChildComponent,
    ParantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
