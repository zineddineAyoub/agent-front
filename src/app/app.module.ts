import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { AgencyFormComponent } from './Components/Agency/agency-form/agency-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgencyListComponent } from './Components/Agency/agency-list/agency-list.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AgentFormComponent } from './Components/Agent/agent-form/agent-form.component';
import { AgentListComponent } from './Components/Agent/agent-list/agent-list.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyFormComponent,
    AgencyListComponent,
    NavBarComponent,
    AgentFormComponent,
    AgentListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
    { path : 'ajouterAgence', component: AgencyFormComponent },
    { path : 'listAgence', component: AgencyListComponent },
    { path : 'ajouterAgent', component: AgentFormComponent },
    { path : 'listAgent' , component : AgentListComponent},
    { path : 'updateAgent/:id', component : AgentFormComponent},
    { path : 'login',component : LoginComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
