import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
            <h1>Hola</h1>
            <button (click)="incrementar()">1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="decrementar()">-1</button>
            <h2>{{contador}}</h2>
            `
})

export class CounterComponent {
    public contador : number = 0;

    incrementar():void{
        this.contador ++;
    }
    decrementar(): void{
        this.contador --;
    }
    reset():void{
        this.contador = 0;
    }
}