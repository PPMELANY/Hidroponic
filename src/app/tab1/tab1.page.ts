import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  rutaTabla: any;

  constructor(private db: Firestore) {}

  async Micronutrientes1(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'Micronutrientes1');
      await setDoc(this.rutaTabla, { Micro1: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'Micronutrientes1');
      await setDoc(this.rutaTabla, { Micro1: false });
    }
  }

  async Macronutrientes1(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'Macronutrientes1');
      await setDoc(this.rutaTabla, { Macro1: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'Macronutrientes1');
      await setDoc(this.rutaTabla, { Macro1: false });
    }
  }

  async Micronutrientes2(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'Micronutrientes2');
      await setDoc(this.rutaTabla, { Micro2: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'Micronutrientes2');
      await setDoc(this.rutaTabla, { Micro2: false });
    }
  }

  async Macronutrientes2(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'Macronutrientes2');
      await setDoc(this.rutaTabla, { Macro2: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'Macronutrientes2');
      await setDoc(this.rutaTabla, { Macro2: false });
    }
  }

  async PasoAgua1(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'PasoAgua1');
      await setDoc(this.rutaTabla, { Paso: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'PasoAgua1');
      await setDoc(this.rutaTabla, { Paso: false });
    }
  }

  async PasoAgua2(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'PasoAgua2');
      await setDoc(this.rutaTabla, { Paso: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'PasoAgua2');
      await setDoc(this.rutaTabla, { Paso: false });
    }
  }

  async bombaAgua(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'BombaAgua');
      await setDoc(this.rutaTabla, { Bomb1: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'BombaAgua');
      await setDoc(this.rutaTabla, { Bomb1: false });
    }
  }

  async bombaAgua2(event: CustomEvent) {
    // Obtener el estado del ion-toggle desde event.detail.checked
    const estado = event.detail.checked;

    // Definir la acción según el estado
    if (estado) {
      // Apagar
      this.rutaTabla = doc(this.db, 'Controles', 'BombaAgua2');
      await setDoc(this.rutaTabla, { Bomb2: true });
    } else {
      // Encender
      this.rutaTabla = doc(this.db, 'Controles', 'BombaAgua2');
      await setDoc(this.rutaTabla, { Bomb2: false });
    }
  }
  
}
