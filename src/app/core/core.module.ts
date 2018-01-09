import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule, } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { MatSidenavModule, MatSidenav } from '@angular/material'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SharedModule } from '../shared/shared.module'
import { AppRoutingModule } from './app.routes';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
