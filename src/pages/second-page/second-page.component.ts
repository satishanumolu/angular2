import { Component, OnInit } from '@angular/core';
import { SecondPageService } from '../../services/second-page.service';

@Component({
    selector: 'second-page',
    templateUrl: 'second-page.html',
    styleUrls: ['second-page.css']
})
export class SecondPageComponent{
    textInput: String = '';

    constructor(private secondPageService: SecondPageService) {

    }

    submitInput(): void {
        alert(this.textInput);

        this.secondPageService.submitInput({ input: this.textInput })
            .subscribe((res:any) => {
                console.log(res);
            }, err => {
                console.log(err);
            });
    }

}
