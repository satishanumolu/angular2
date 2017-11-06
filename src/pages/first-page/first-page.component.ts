import { Component, OnInit } from '@angular/core';
import { FirstPageService } from '../../services/first-page.service';

@Component({
    selector: 'first-page',
    templateUrl: 'first-page.html',
    styleUrls: ['./first-page.css']
})
export class FirstPageComponent implements OnInit{
    options:any = [];
    selectedOption: any;

    constructor(private firstPageService: FirstPageService) {

    }

    ngOnInit() {
        console.log('teststs')
        this.firstPageService.getOptions()
            .subscribe((res:any) => {
                console.log(res);
                this.options = res;
                this.selectedOption = this.options[0];
            }, err => {
                console.log(err);
                this.options = err;
                this.selectedOption = this.options[0];
            });
    }
}
