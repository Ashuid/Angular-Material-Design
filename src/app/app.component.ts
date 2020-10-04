import { Component } from '@angular/core';
import { ProductService } from './product.service'
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-card>
    <mat-tab-group>
      <mat-tab label="Products">
        <products></products>
      </mat-tab>
      <mat-tab label="Advertisements"><ads></ads></mat-tab>
    </mat-tab-group>
  </mat-card>
  `,
  providers: [ProductService, AdService] 
})
export class AppComponent {
  title = 'First Angular';
}
