console.log("buchkarten_main.js erfolgreich geladen");

Hooks.on("init", function() {
  console.log("Buchkarten Init DONE!");
});

Hooks.on("ready", function() {
  console.log("Spielwelt geladen - Buchkarten sind jetzt einsatzbereit!");
});