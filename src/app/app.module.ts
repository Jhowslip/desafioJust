import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProdutoServiceService } from './components/list-produto/service/list-produto-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/shared/data-sharing.service';
import { NavProdutosComponent } from './components/nav-produtos/nav-produtos.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    ListProdutoComponent,
    NavProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    NgbModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule 
    
  ],
  providers: [ListProdutoServiceService, DataSharingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
