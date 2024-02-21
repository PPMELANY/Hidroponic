import { Component, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  ph1Color: number = 0;
  ph2Color: number = 0;
  ph1: number = 0;
  ph2: number = 0;
  nutrie1: number = 0;
  nutrie2: number = 0;
  solid1: number = 0;
  solid2: number = 0;
  conduc1: number = 0;
  conduc2: number = 0;

  

  
  constructor(private db: Firestore) {}

  ngOnInit() {
    this.obtenerDatosFirebase();
  }
  obtenerDatosFirebase() {
    const query = collection(this.db, 'Monitoreo');

    // Usar una única función onSnapshot para evitar problemas de concurrencia
    onSnapshot(query, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data['PH'] !== undefined) {
          this.ph1 = data['PH'];
        }
        if (data['PH2'] !== undefined) {
          this.ph2 = data['PH2'];
        }

        if (data['nutrien'] !== undefined) {
          this.nutrie1 = data['nutrien'];
        }
        if (data['nutrien2'] !== undefined) {
          this.nutrie2 = data['nutrien2'];
        }

        if (data['solid'] !== undefined) {
          this.solid1 = data['solid'];
        }
        if (data['solid2'] !== undefined) {
          this.solid2 = data['solid2'];
        }
/*
        if (data['Conductividad1'] !== undefined) {
          this.conduc1 = data['Conductividad1'];
        }
        if (data['Conductividad2'] !== undefined) {
          this.conduc2 = data['Conductividad2'];
        }
        */
      });
    });
  }
  getColorClass() {
    if (this.ph1 >= 0 && this.ph1 <= 2) {
      return 'red';
    } else if (this.ph1 >= 3 && this.ph1 <= 4) {
      return 'orange';
    } else if (this.ph1 >= 5 && this.ph1 <= 6) {
      return 'yellow';
    } else if (this.ph1 >= 7 && this.ph1 <= 8) {
      return 'lightgreen';
    } else if (this.ph1 >= 9 && this.ph1 <= 10) {
      return 'darkgreen';
    } else if (this.ph1 >= 11 && this.ph1 <= 12) {
      return 'darkblue';
    } else if (this.ph1 >= 13 && this.ph1 <= 14.99) {
      return 'purple';
    }
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }
  getColorClass2() {
    if (this.ph2 >= 0 && this.ph2 <= 1) {
      return 'red';
    } else if (this.ph2 >= 2 && this.ph2 <= 3) {
      return 'orange';
    } else if (this.ph2 >= 4  && this.ph2 <= 5) {
      return 'yellow';
    } else if (this.ph2 >= 6 && this.ph2 <= 7) {
      return 'lightgreen';
    } else if (this.ph2 >= 8 && this.ph2 <= 10) {
      return 'darkgreen';
    } else if (this.ph2 >= 11 && this.ph2 <= 12) {
      return 'darkblue';
    } else if (this.ph2 >= 13 && this.ph2 <= 14.99) {
      return 'purple';
    }
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }
  getColorClass3() {
    if (this.nutrie1 >= 0 && this.nutrie1 <= 25) {
      return 'red';
    } else if (this.nutrie1 >= 26 && this.nutrie1 <= 49) {
      return 'yellow';
    } else if (this.nutrie1 >= 50 && this.nutrie1 <= 100) {
      return 'lightgreen';
    } 
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }
  
  getColorClass4() {
    if (this.nutrie2 >= 0 && this.nutrie2 <= 25) {
      return 'red';
    } else if (this.nutrie2 >= 26 && this.nutrie2 <= 49) {
      return 'yellow';
    } else if (this.nutrie2 >= 50 && this.nutrie2 <= 100) {
      return 'lightgreen';
    } 
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }

  getColorClass5() {
    if (this.solid1 >= 0 && this.solid1 <= 15) {
      return 'darkblue';
    } else if (this.solid1 >= 16 && this.solid1 <= 34) {
      return 'lightgreen';
    } else if (this.solid1 >= 35 && this.solid1 <= 100) {
      return 'red';
    } 
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }

  getColorClass6() {
    if (this.solid2 >= 0 && this.solid2 <= 15) {
      return 'darkblue';
    } else if (this.solid2 >= 16 && this.solid2 <= 34) {
      return 'lightgreen';
    } else if (this.solid2 >= 35 && this.solid2 <= 100) {
      return 'red';
    } 
    return 'black'; // Valor predeterminado si ninguno de los bloques if se cumple
  }
  
}
