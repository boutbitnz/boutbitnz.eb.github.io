import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [ { path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [ 
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
  declarations: [AppShellComponent],
})

export class AppServerModule {}
