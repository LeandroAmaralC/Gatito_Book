import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';



@NgModule({
    declarations: [ListaAnimaisComponent],
    imports: [
        CommonModule,
        AnimaisRoutingModule,
        MensagemModule
    ]
})
export class AnimaisModule { }
