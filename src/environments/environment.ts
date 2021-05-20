// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { discapacidad, eduacion, estadoCivil, genero } from "./constantes/agricultoresConstantes";
import { menuItems } from "./constantes/menuItems";

export const environment = {
  production: false,
  menuItems: menuItems,
  agricultorGenero: genero,
  agricultorEstadoCivil: estadoCivil,
  agricultorEducacion: eduacion,
  agricultorDiscapacidad: discapacidad,
  firebase: {
    apiKey: "AIzaSyB2EaSUPVHyiliLpMEAcCZGgkehWEfQO10",
    authDomain: "adsanchez-1d1a3.firebaseapp.com",
    projectId: "adsanchez-1d1a3",
    storageBucket: "adsanchez-1d1a3.appspot.com",
    messagingSenderId: "988871724078",
    appId: "1:988871724078:web:5bf9b20dd72e4e2e81a3bf",
    measurementId: "G-SF23J80Y49"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
