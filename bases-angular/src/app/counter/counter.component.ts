import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
            <h1>Contador</h1>
            <button class="btn btn-outline-secondary" (click)="incrementar()">1</button>
            <button class="btn btn-outline-secondary" (click)="reset()">Reset</button>
            <button class="btn btn-outline-secondary" (click)="decrementar()">-1</button>
            <h2 class="text-secondary">{{contador}}</h2>
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