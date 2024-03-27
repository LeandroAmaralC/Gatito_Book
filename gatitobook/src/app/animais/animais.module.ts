import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';



@NgModule({
    declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent],
    imports: [
        CommonModule,
        AnimaisRoutingModule,
        MensagemModule,
        CartaoModule
    ]
})
export class AnimaisModule { }
