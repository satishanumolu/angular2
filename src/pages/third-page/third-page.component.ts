import { Component, OnInit } from '@angular/core';
import { ThirdPageService } from '../../services/third-page.service';

@Component({
    selector: 'third-page',
    templateUrl: 'third-page.html',
    styleUrls: ['third-page.css']
})
export class ThirdPageComponent implements OnInit{
    private input: string;
    private selectedIds: any = [];
    private tableContent: any = [];

    constructor(private thirdPageService: ThirdPageService) {

    }

    ngOnInit() {
        this.thirdPageService.getContent()
            .subscribe((res:any) => {
                console.log(res);
                this.tableContent = res;
            }, err => {
                console.log(err);
                this.tableContent = err;
            });
    }

    addToList() {
        console.log(this.selectedIds);
        this.selectedIds.push(this.input);
    }

    submit() {
        this.thirdPageService.submit(this.selectedIds)
            .subscribe((res:any) => {
                this.selectedIds = [];
                this.tableContent.push({
                   id: 4,
                   value: 40,
                   name: 'bhavana'
                });
                console.log(res);
            }, err => {
                this.selectedIds = [];
                this.tableContent.push({
                    id: 4,
                    value: 40,
                    name: 'bhavana'
                });
                console.log(err);
            });
    }

}
