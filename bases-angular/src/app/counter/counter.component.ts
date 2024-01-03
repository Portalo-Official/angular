import { Component } from '@angular/core';

@Component({
    selector: 'selector-counter',
    templateUrl: './counter.component.html'
})

export class counterComponent {
    public contador : number = 0;

    incrementar():void{
        this.contador ++;
    }

    decrementar(): void{
        this.contador --;
    }

}