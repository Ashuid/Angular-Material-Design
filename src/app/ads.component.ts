import { Component } from '@angular/core'
import { AdService } from './ad.service'

@Component ({
    selector: 'ads',
    template: `
    <h2>Ads</h2>
    <ul>
        <li *ngFor="let ad of ads">
            {{ad}}
        </li>
    </ul>
    `
})

export class AdsComponent {
    ads;
    constructor(adService: AdService){
        this.ads = adService.getAds();
    }
}
