  const prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  //
  prompt.get(['Edad'], function(err, result) {

      let Edad = result.Edad;

      if (Edad > 18) {
          //IMPRIME EN PANTALLA EL SIGUIENTE MENSAJE
          console.log("Puedes conducir");
      }

      //SI NO
      else {
          //MUESTRA ESTE MENSAJE
          console.log("No Puedes Conducir");
      }

  });