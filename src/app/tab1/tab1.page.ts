import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  automaticoActivado: boolean = false;
  rutaTabla: any;

  constructor(private db: Firestore) {}

  toggleButton(control: string, event: CustomEvent) {
    if (this.automaticoActivado) {
      // Si el botón automático está activado, se bloquean los otros botones
      event.detail.checked = false; // Desactivar el botón que se intentó cambiar
      return;
    }

    // Definir la acción según el botón que se intentó cambiar
    const estado = event.detail.checked;
    let rutaTabla: any;

    switch (control) {
      case 'Micronutrientes1':
        rutaTabla = doc(this.db, 'Controles', 'Micronutrientes1');
        setDoc(rutaTabla, { Micro1: estado });
        break;
      case 'PasoAgua1':
        rutaTabla = doc(this.db, 'Controles', 'PasoAgua1');
        setDoc(rutaTabla, { Paso: estado });
        break;
      // Puedes agregar más casos para otros controles si es necesario    Macronutrientes1
      default:
        break;
    }
  }

  async automatico(event: CustomEvent) {
    const estado = event.detail.checked;
  
    // Actualizar el estado del botón automático en la base de datos
    this.rutaTabla = doc(this.db, 'Controles', 'Macronutrientes1');
    await setDoc(this.rutaTabla, { Activado: estado });
  
    // Desactivar o activar los botones de nutrientes y paso de agua según el estado del botón automático
    const toggleButtons = document.querySelectorAll('ion-toggle');
    toggleButtons.forEach((button: any) => {
      const ariaLabel = button.getAttribute('aria-label');
      if (ariaLabel !== 'Automatico') {
        button.disabled = estado; // Desactivar o activar los botones de nutrientes y paso de agua según el estado del botón automático
        button.checked = false; // Reiniciar el estado de los botones si el botón automático está activado
      } 
    });
  }
  
  

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
