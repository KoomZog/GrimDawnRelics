// -- COPYRIGHT ALEXANDER WIDELL 2016 --
// v1.0
var componentsList = [], finalComponents = [], totalCost = 0, questAdd=[], allComponents = [],

  questcomponent = ["Ancient Heart","Blood of Ch'thon","Manticore Eye","Tainted Brain Matter"],

  rarecomponent = ["Ancient Armor Plate","Arcane Lens","Arcane Spark","Attuned Lodestone","Bindings of Bysmiel","Bloody Whetstone","Chains of Oleron","Devil-Touched Ammo","Dread Skull","Kilrian's Shattered Soul","Hallowed Ground","Haunted Steel","Mark of Dreeg","Mark of Mogdrogen","Mark of the Myrmidon","Oleron's Blood","Prismatic Diamond","Shard of Beronath","Spellwoven Threads","Silvercore Bolts","Symbol of Solael","Unholy Inscription"],

  commoncomponent = ["Aether Soul","Aethersteel Bolts","Amber","Antivenom Salve","Ballistic Plating","Battered Shell","Black Tallow","Blessed Steel","Blessed Whetstone","Bristly Fur","Chipped Claw","Coldstone","Consecrated Wrappings","Corpse Dust","Cracked Lodestone","Chilled Steel","Deathchill Bolts","Dense Fur","Ectoplasm","Enchanted Flint","Flintcore Bolts","Focusing Prism","Frozen Heart","Hallowed Fang","Hell's Bane Ammo","Imbued Silver","Leathery Hide","Mark of Illusions","Mark of the Traveller","Molten Skin","Mutagenic Ichor","Mutated Scales","Polished Emerald","Purified Salt","Radiant Gem","Reinforced Shell","Resilient Plating","Restless Remains","Riftstone","Rigid Shell","Roiling Blood","Rotten Heart","Runestone","Sanctified Bone","Scaled Hide","Scavenged Plating","Searing Ember","Serrated Shell","Serrated Spike","Severed Claw","Silk Swatch","Soul Shard","Spined Carapace","Vengeful Wraith","Venom-Tipped Ammo","Vicious Jawbone","Vicious Spikes","Void-Touched Ammo","Vitriolic Gallstone","Wardstone","Wrathstone"],

  weapon = ["Troll Bonecrusher","Spectral Longsword","Salazar's Sovereign Blade"];
  var componentPushOrder = ["questcomponent","rarecomponent","commoncomponent","weapon"]
  allComponents.push(questcomponent,rarecomponent,commoncomponent,weapon);

for(var i = 0; i < allComponents.length; i++){
  for(var k = 0; k <allComponents[i].length; k++){
    componentsList[allComponents[i][k]] = {
      type: componentPushOrder[i]
    };
  }
}

function main() {
  var input = document.getElementById('input').value;

  //Common Relics
  componentsList["Bladesworn Talisman"] = {
    type: "relic",
    cost: 8000,
    components: ["Tainted Brain Matter", "Chipped Claw", "Polished Emerald", "Silk Swatch"]
  };
  componentsList["Calamity"] = {
    type: "relic",
    cost: 8000,
    components: ["Tainted Brain Matter", "Searing Ember", "Chipped Claw", "Polished Emerald"]
  };
  componentsList["Corruption"] = {
    type: "relic",
    cost: 15000,
    components: ["Blood of Ch'thon", "Vitriolic Gallstone", "Mutagenic Ichor", "Antivenom Salve"]
  };
  componentsList["Equilibrium"] = {
    type: "relic",
    cost: 8000,
    components: ["Tainted Brain Matter", "Searing Ember", "Cracked Lodestone", "Chilled Steel"]
  };
  componentsList["Glacier"] = {
    type: "relic",
    cost: 15000,
    components: ["Ancient Heart", "Coldstone", "Radiant Gem", "Frozen Heart"]
  };
  componentsList["Guile"] = {
    type: "relic",
    cost: 15000,
    components: ["Ancient Heart", "Severed Claw", "Blessed Whetstone", "Roiling Blood"]
  };
  componentsList["Gunslinger's Talisman"] = {
    type: "relic",
    cost: 8000,
    components: ["Tainted Brain Matter", "Serrated Spike", "Polished Emerald", "Silk Swatch"]
  };
  componentsList["Inferno"] = {
    type: "relic",
    cost: 15000,
    components: ["Blood of Ch'thon", "Enchanted Flint", "Radiant Gem", "Molten Skin"]
  };
  componentsList["Mistborn Talisman"] = {
    type: "relic",
    cost: 15000,
    components: ["Troll Bonecrusher", "Severed Claw", "Vitriolic Gallstone", "Roiling Blood"]
  };
  componentsList["Rampage"] = {
    type: "relic",
    cost: 15000,
    components: ["Blood of Ch'thon", "Severed Claw", "Vicious Spikes", "Roiling Blood"]
  };
  componentsList["Ruination"] = {
    type: "relic",
    cost: 8000,
    components: ["Tainted Brain Matter", "Chipped Claw", "Serrated Spike", "Polished Emerald"]
  };
  componentsList["Sanctuary"] = {
    type: "relic",
    cost: 15000,
    components: ["Ancient Heart", "Wardstone", "Battered Shell", "Radiant Gem"]
  };
  componentsList["Squall"] = {
    type: "relic",
    cost: 15000,
    components: ["Ancient Heart", "Amber", "Radiant Gem", "Rigid Shell"]
  };

	//Rare Relics
  componentsList["Arbiter"] = {
    type: "relic",
    cost: 37500,
    components: ["Ancient Heart", "Ancient Heart", "Sanctuary", "Bladesworn Talisman", "Equilibrium", "Hallowed Ground", "Ballistic Plating", "Leathery Hide"]
  };
  componentsList["Conflagration"] = {
    type: "relic",
    cost: 37500,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Inferno", "Calamity", "Ruination", "Devil-Touched Ammo", "Flintcore Bolts", "Enchanted Flint"]
  };
  componentsList["Deathchill"] = {
    type: "relic",
    cost: 37500,
    components: ["Manticore Eye", "Manticore Eye", "Glacier", "Gunslinger's Talisman", "Guile", "Silvercore Bolts", "Deathchill Bolts", "Soul Shard"]
  };
  componentsList["Fortress"] = {
    type: "relic",
    cost: 37500,
    components: ["Ancient Heart", "Ancient Heart", "Sanctuary", "Gunslinger's Talisman", "Squall", "Ancient Armor Plate", "Ballistic Plating", "Blessed Steel"]
  };
  componentsList["Haunt"] = {
    type: "relic",
    cost: 37500,
    components: ["Spectral Longsword", "Spectral Longsword", "Glacier", "Corruption", "Equilibrium", "Haunted Steel", "Aethersteel Bolts", "Aether Soul"]
  };
  componentsList["Juggernaut"] = {
    type: "relic",
    cost: 37500,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Sanctuary", "Mistborn Talisman", "Calamity", "Oleron's Blood", "Reinforced Shell", "Spined Carapace"]
  };
  componentsList["Savage"] = {
    type: "relic",
    cost: 37500,
    components: ["Manticore Eye", "Manticore Eye", "Mistborn Talisman", "Rampage", "Inferno", "Dread Skull", "Mark of the Traveller", "Vitriolic Gallstone"]
  };
  componentsList["Slaughter"] = {
    type: "relic",
    cost: 37500,
    components: ["Manticore Eye", "Manticore Eye", "Rampage", "Inferno", "Ruination", "Chains of Oleron", "Vicious Jawbone", "Blessed Whetstone"]
  };
  componentsList["Terror"] = {
    type: "relic",
    cost: 37500,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Mistborn Talisman", "Calamity", "Glacier", "Haunted Steel", "Void-Touched Ammo", "Consecrated Wrappings"]
  };
  componentsList["Torment"] = {
    type: "relic",
    cost: 37500,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Corruption", "Squall", "Guile", "Kilrian's Shattered Soul", "Consecrated Wrappings", "Black Tallow"]
  };

//Epic Relics
  componentsList["Ancestor"] = {
    type: "relic",
    cost: 66000,
    components: ["Ancient Heart", "Ancient Heart", "Haunt", "Mistborn Talisman", "Mark of Mogdrogen"]
  };
  componentsList["Bladedancer's Talisman"] = {
    type: "relic",
    cost: 37500,
    components: ["Manticore Eye", "Manticore Eye", "Bladesworn Talisman", "Ruination", "Mistborn Talisman", "Bloody Whetstone", "Roiling Blood", "Blessed Steel"]
  };
  componentsList["Blight"] = {
    type: "relic",
    cost: 66000,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Terror", "Corruption", "Mark of Dreeg"]
  };
  componentsList["Desolation"] = {
    type: "relic",
    cost: 66000,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Conflagration", "Squall", "Unholy Inscription"]
  };
  componentsList["Marauder's Talisman"] = {
    type: "relic",
    cost: 37500,
    components: ["Manticore Eye", "Manticore Eye", "Gunslinger's Talisman", "Mistborn Talisman", "Inferno", "Silvercore Bolts", "Roiling Blood", "Blessed Steel"]
  };
  componentsList["Sacrifice"] = {
    type: "relic",
    cost: 66000,
    components: ["Salazar's Sovereign Blade", "Torment", "Guile", "Mark of the Myrmidon"]
  };
  componentsList["Zeal"] = {
    type: "relic",
    cost: 66000,
    components: ["Ancient Heart", "Ancient Heart", "Savage", "Bladesworn Talisman", "Bloody Whetstone"]
  };

//Legendary Relics
  componentsList["Aegis"] = {
    type: "relic",
    cost: 105000,
    components: ["Ancient Heart", "Ancient Heart", "Ancient Heart", "Ancestor", "Arbiter", "Equilibrium", "Runestone", "Sanctified Bone"]
  };
  componentsList["Agrivix's Malice"] = {
    type: "relic",
    cost: 13,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Eye of the Storm", "Haunt", "Inferno", "Arcane Lens"]
  };
  componentsList["Annihilation"] = {
    type: "relic",
    cost: 13,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Ulzuin's Pyroclasm", "Zeal", "Gunslinger's Talisman", "Devil-Touched Ammo"]
  };
  componentsList["Avenger"] = {
    type: "relic",
    cost: 13,
    components: ["Ancient Heart", "Ancient Heart", "Ancient Heart", "Aegis", "Arbiter", "Squall", "Attuned Lodestone"]
  };
  componentsList["Belgothian's Carnage"] = {
    type: "relic",
    cost: 13,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Nemesis", "Juggernaut", "Bladesworn Talisman", "Bloody Whetstone"]
  };
  componentsList["Blademaster's Talisman"] = {
    type: "relic",
    cost: 105000,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Bladedancer's Talisman", "Juggernaut", "Guile", "Rampage", "Mark of the Myrmidon", "Aether Soul"]
  };
  componentsList["Bysmiel's Domination"] = {
    type: "relic",
    cost: 13,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Scourge", "Savage", "Guile", "Bindings of Bysmiel"]
  };
  componentsList["Citadel"] = {
    type: "relic",
    cost: 105000,
    components: ["Ancient Heart", "Ancient Heart", "Ancient Heart", "Ancestor", "Fortress", "Sanctuary", "Spined Carapace", "Leathery Hide"]
  };
  componentsList["Dreeg's Affliction"] = {
    type: "relic",
    cost: 13,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Malediction", "Deathchill", "Calamity", "Mark of Dreeg"]
  };
  componentsList["Eye of the Storm"] = {
    type: "relic",
    cost: 105000,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Desolation", "Terror", "Equilibrium", "Hell's Bane Ammo", "Focusing Prism"]
  };
  componentsList["Iskandra's Balance"] = {
    type: "relic",
    cost: 105000,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Conflagration", "Deathchill", "Inferno", "Glacier", "Spellwoven Threads", "Riftstone"]
  };
  componentsList["Malediction"] = {
    type: "relic",
    cost: 105000,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Blight", "Torment", "Ruination", "Venom-Tipped Ammo", "Rotten Heart"]
  };
  componentsList["Menhir's Bastion"] = {
    type: "relic",
    cost: 13,
    components: ["Ancient Heart", "Ancient Heart", "Ancient Heart", "Citadel", "Sacrifice", "Sanctuary", "Hallowed Ground"]
  };
  componentsList["Necrosis"] = {
    type: "relic",
    cost: 13,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Scourge", "Torment", "Corruption", "Unholy Inscription"]
  };
  componentsList["Nemesis"] = {
    type: "relic",
    cost: 105000,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Sacrifice", "Slaughter", "Bladesworn Talisman", "Mark of Illusions", "Vicious Jawbone"]
  };
  componentsList["Oblivion"] = {
    type: "relic",
    cost: 13,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Malediction", "Fortress", "Squall", "Devil-Touched Ammo"]
  };
  componentsList["Oleron's Wrath"] = {
    type: "relic",
    cost: 13,
    components: ["Ancient Heart", "Ancient Heart", "Ancient Heart", "Reckoning", "Slaughter", "Rampage", "Chains of Oleron"]
  };
  componentsList["Plunderer's Talisman"] = {
    type: "relic",
    cost: 105000,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Marauder's Talisman", "Slaughter", "Guile", "Rampage", "Oleron's Blood", "Aethersteel Bolts"]
  };
  componentsList["Primal Instinct"] = {
    type: "relic",
    cost: 13,
    components: ["Manticore Eye", "Manticore Eye", "Manticore Eye", "Nemesis", "Ancestor", "Mistborn Talisman", "Mark of Mogdrogen"]
  };
  componentsList["Reckoning"] = {
    type: "relic",
    cost: 105000,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Zeal", "Juggernaut", "Guile", "Spined Carapace", "Vengeful Wraith"]
  };
  componentsList["Scourge"] = {
    type: "relic",
    cost: 105000,
    components: ["Tainted Brain Matter", "Tainted Brain Matter", "Tainted Brain Matter", "Blight", "Deathchill", "Ruination", "Black Tallow", "Restless Remains"]
  };
  componentsList["Solael's Decimation"] = {
    type: "relic",
    cost: 13,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Eye of the Storm", "Conflagration", "Inferno", "Symbol of Solael"]
  };
  componentsList["Ulzuin's Pyroclasm"] = {
    type: "relic",
    cost: 105000,
    components: ["Blood of Ch'thon", "Blood of Ch'thon", "Blood of Ch'thon", "Desolation", "Slaughter", "Inferno", "Flintcore Bolts", "Focusing Prism"]
  };

  function getRelicComponents(RelicName) { //Takes a name of a relic and returns quantities and objects of all base components, plus cost for crafting
  	totalCost += componentsList[RelicName].cost; //Adds crafting cost of the current relic
    for (var i = 0; i < componentsList[RelicName].components.length; i++) { //Iterates for each of the relic's components
      if (componentsList[componentsList[RelicName].components[i]].type == "relic") { //Fires if the current component is another relic
        getRelicComponents(componentsList[RelicName].components[i]); //Recursively calls this funtion with the subrelic as argument
      }
      var componentAlreadyUsed = false; //Keeps track of whether another of this base component is already in the finalComponents list
      for (var j = 0; j < finalComponents.length; j++) { //Cycles through the components already in the finalComponents list
        if (componentsList[RelicName].components[i] === finalComponents[j].component) { //Fires if the current component is the same as the on in the list
          finalComponents[j].quantity++; //Adds one to the quantity of the current index of the list
          componentAlreadyUsed = true; //Sets the check variable
        }
      }
      if (componentAlreadyUsed == false) { //Fires if the components is a new unique one
        var sortorder;
        if (componentsList[componentsList[RelicName].components[i]].type === "relic") {sortorder = 1;} // These ifs adds the sortorder to be used when sorting the list
        if (componentsList[componentsList[RelicName].components[i]].type === "questcomponent") {sortorder = 2;}
        if (componentsList[componentsList[RelicName].components[i]].type === "rarecomponent") {sortorder = 3;}
        if (componentsList[componentsList[RelicName].components[i]].type === "commoncomponent") {sortorder = 4;}
        if (componentsList[componentsList[RelicName].components[i]].type === "weapon") {sortorder = 5;}
        finalComponents.push({
          quantity: 1,
          component: componentsList[RelicName].components[i],
          sortorder: sortorder,
          type: componentsList[componentsList[RelicName].components[i]].type
        }); //Adds the current component at the end of the list
      }
    }
    finalComponents.sort(function(a, b) {
      if (a.sortorder > b.sortorder) {return 1;}
      if (a.sortorder < b.sortorder) {return -1;}
      if (a.sortorder = b.sortorder) {return a.component.localeCompare(b.component);}
    }); //Sorts the list by sortorder and then alphabetically
  }

  if (componentsList[input]) {
    getRelicComponents(input);

    finalComponents.unshift({
      quantity: 1,
      component: input,
      type: "relic"
    }); //Adds the main relic to the top of the list);

    var output = "";
    for (i = 0; i < finalComponents.length; i++) {
      output += "<p class=\"" + finalComponents[i].type + "\">"; //Sets the color code for the component
      if (finalComponents[i].type === "relic") {
        output += "Blueprint: Relic - "; // Adds Blueprint text to relics
      } else {
        output += finalComponents[i].quantity + " "; //Adds qunatity to nonrelics
      }
      output += finalComponents[i].component + "<br></p>"; //Adds component name
    }
    output += "<p class=\"cost\">" + totalCost + " Iron Bits";
    output += "<br><br><br><br><br><br><br><br><br><br>";
    document.getElementById('output').innerHTML = output;
  }
  finalComponents = [];
  totalCost = 0;
}
