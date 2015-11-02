var factArray = [
  "James Hutton created the theory of uniformitarianism ",
  "Mafic lava is high in magnesium and is viscous",
  "Lava high in silica is formed through divergent boundaries",
  "Limestone is made up of CaO3",
  "Schist has good cleavage",
  "Quartz is metamorphosed sandstone",
  "Conglomerate layering is sign of a river/lake bed",
  "Granite is a plutonic or intrusive rock",
  "Igneous rocks within California are generally from the Paleozoic time period",
  "Basalt is a mafic extrusive rock",
  "Marble is a derivative form limestone",
  "Mt. Shasta is a Statovolcano",
  "California’s state rock is Serpentine",
  "California is the only state in California that has a transform, divergent, and convergent boundaries",
  "Tamra’s favorite rock is obsidian",
  "Pyrite is known as Fool’s gold",
  "The lithosphere is the brittle “plate” in platetonics",
  "Andesite forms at subduction zones",
  "Magma is lava that has not made it to the surface",
];

Session.setDefault("rockFacts", false);

Template.body.helpers({
  rockFactsEnabled: function () {
    return Session.get("rockFacts");
  }
});

Template.rockFacts.onCreated(function () {
  console.log("Thank you for enabling rock facts!");

  var instance = Template.instance();

  var lastFactIndex = -1;
  function showFact () {
    var factIndex;
    while (factIndex === undefined || factIndex === lastFactIndex) {
      factIndex = Math.floor(Math.random() * factArray.length);
    }
    sAlert.info(factArray[factIndex], {onRouteClose: false, timeout: 10000});
  }

  showFact();
  instance.factTimeout = Meteor.setInterval(function () {
    showFact();
  }, 120000);
});

Template.rockFacts.onDestroyed(function () {
  var instance = Template.instance();
  Meteor.clearInterval(instance.factTimeout);
});
