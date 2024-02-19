import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  constructor(private db: Firestore) {}

  onEtapaChange(etapa: string) {
    let valor: number;

    // Asignar un valor numérico dependiendo de la etapa seleccionada
    switch (etapa) {
      case 'brote':
        valor = 1;
        break;
      case 'floracion':
        valor = 2;
        break;
      case 'frutificacion':
        valor = 3;
        break;
      default:
        valor = 0;
    }

    // Enviar el valor a Firebase
    const etapasDocRef = doc(this.db, 'Cultivos', 'CultivosEtap');
    setDoc(etapasDocRef, { etapa: valor }, { merge: true });
  }

  onEtapaChange2(Etapa: string) {
    let valor: number;

    // Asignar un valor numérico dependiendo de la etapa seleccionada
    switch (Etapa) {
      case 'brote':
        valor = 1;
        break;
      case 'floracion':
        valor = 2;
        break;
      case 'frutificacion':
        valor = 3;
        break;
      default:
        valor = 0;
    }

    // Enviar el valor a Firebase
    const etapasDocRef = doc(this.db, 'Cultivos', 'CultivosEtap2');
    setDoc(etapasDocRef, { Etap2: valor }, { merge: true });
  }
}
