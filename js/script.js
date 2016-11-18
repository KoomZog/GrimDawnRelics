// -- COPYRIGHT ALEXANDER WIDELL 2016 --
// v1.0

function main() {
  var input = document.getElementById('input').value;
  var componentsList = [];
  var finalComponents = [];
	var totalCost = 0;
  var craftingOrder = [];

  //Quest Components
  componentsList["Ancient Heart"] = {
    type: "questcomponent"
  };
  componentsList["Blood of Ch'thon"] = {
    type: "questcomponent"
  };
  componentsList["Manticore Eye"] = {
    type: "questcomponent"
  };
  componentsList["Tainted Brain Matter"] = {
    type: "questcomponent"
  };

	//Rare components
  componentsList["Ancient Armor Plate"] = {
    type: "rarecomponent"
  };
  componentsList["Arcane Lens"] = {
    type: "rarecomponent"
  };
  componentsList["Arcane Spark"] = {
    type: "rarecomponent"
  };
  componentsList["Attuned Lodestone"] = {
    type: "rarecomponent"
  };
  componentsList["Bindings of Bysmiel"] = {
    type: "rarecomponent"
  };
  componentsList["Bloody Whetstone"] = {
    type: "rarecomponent"
  };
  componentsList["Chains of Oleron"] = {
    type: "rarecomponent"
  };
  componentsList["Devil-Touched Ammo"] = {
    type: "rarecomponent"
  };
  componentsList["Dread Skull"] = {
    type: "rarecomponent"
  };
  componentsList["Kilrian's Shattered Soul"] = {
    type: "rarecomponent"
  };
  componentsList["Hallowed Ground"] = {
    type: "rarecomponent"
  };
  componentsList["Haunted Steel"] = {
    type: "rarecomponent"
  };
  componentsList["Mark of Dreeg"] = {
    type: "rarecomponent"
  };
  componentsList["Mark of Mogdrogen"] = {
    type: "rarecomponent"
  };
  componentsList["Mark of the Myrmidon"] = {
    type: "rarecomponent"
  };
  componentsList["Oleron's Blood"] = {
    type: "rarecomponent"
  };
  componentsList["Prismatic Diamond"] = {
    type: "rarecomponent"
  };
  componentsList["Shard of Beronath"] = {
    type: "rarecomponent"
  };
  componentsList["Spellwoven Threads"] = {
    type: "rarecomponent"
  };
  componentsList["Silvercore Bolts"] = {
    type: "rarecomponent"
  };
  componentsList["Symbol of Solael"] = {
    type: "rarecomponent"
  };
  componentsList["Unholy Inscription"] = {
    type: "rarecomponent"
  };

	//Common components
  componentsList["Aether Soul"] = {
    type: "commoncomponent"
  };
  componentsList["Aethersteel Bolts"] = {
    type: "commoncomponent"
  };
  componentsList["Amber"] = {
    type: "commoncomponent"
  };
  componentsList["Antivenom Salve"] = {
    type: "commoncomponent"
  };
  componentsList["Ballistic Plating"] = {
    type: "commoncomponent"
  };
  componentsList["Battered Shell"] = {
    type: "commoncomponent"
  };
  componentsList["Black Tallow"] = {
    type: "commoncomponent"
  };
  componentsList["Blessed Steel"] = {
    type: "commoncomponent"
  };
  componentsList["Blessed Whetstone"] = {
    type: "commoncomponent"
  };
  componentsList["Bristly Fur"] = {
    type: "commoncomponent"
  };
  componentsList["Chipped Claw"] = {
    type: "commoncomponent"
  };
  componentsList["Coldstone"] = {
    type: "commoncomponent"
  };
  componentsList["Consecrated Wrappings"] = {
    type: "commoncomponent"
  };
  componentsList["Corpse Dust"] = {
    type: "commoncomponent"
  };
  componentsList["Cracked Lodestone"] = {
    type: "commoncomponent"
  };
  componentsList["Chilled Steel"] = {
    type: "commoncomponent"
  };
  componentsList["Deathchill Bolts"] = {
    type: "commoncomponent"
  };
  componentsList["Dense Fur"] = {
    type: "commoncomponent"
  };
  componentsList["Ectoplasm"] = {
    type: "commoncomponent"
  };
  componentsList["Enchanted Flint"] = {
    type: "commoncomponent"
  };
  componentsList["Flintcore Bolts"] = {
    type: "commoncomponent"
  };
  componentsList["Focusing Prism"] = {
    type: "commoncomponent"
  };
	componentsList["Frozen Heart"] = {
    type: "commoncomponent"
  };
  componentsList["Hallowed Fang"] = {
    type: "commoncomponent"
  };
  componentsList["Hell's Bane Ammo"] = {
    type: "commoncomponent"
  };
  componentsList["Imbued Silver"] = {
    type: "commoncomponent"
  };
  componentsList["Leathery Hide"] = {
    type: "commoncomponent"
  };
  componentsList["Mark of Illusions"] = {
    type: "commoncomponent"
  };
  componentsList["Mark of the Traveller"] = {
    type: "commoncomponent"
  };
  componentsList["Molten Skin"] = {
    type: "commoncomponent"
  };
  componentsList["Mutagenic Ichor"] = {
    type: "commoncomponent"
  };
  componentsList["Mutated Scales"] = {
    type: "commoncomponent"
  };
  componentsList["Polished Emerald"] = {
    type: "commoncomponent"
  };
  componentsList["Purified Salt"] = {
    type: "commoncomponent"
  };
  componentsList["Radiant Gem"] = {
    type: "commoncomponent"
  };
  componentsList["Reinforced Shell"] = {
    type: "commoncomponent"
  };
  componentsList["Resilient Plating"] = {
    type: "commoncomponent"
  };
  componentsList["Restless Remains"] = {
    type: "commoncomponent"
  };
  componentsList["Riftstone"] = {
    type: "commoncomponent"
  };
  componentsList["Rigid Shell"] = {
    type: "commoncomponent"
  };
  componentsList["Roiling Blood"] = {
    type: "commoncomponent"
  };
  componentsList["Rotten Heart"] = {
    type: "commoncomponent"
  };
  componentsList["Runestone"] = {
    type: "commoncomponent"
  };
  componentsList["Sanctified Bone"] = {
    type: "commoncomponent"
  };
  componentsList["Scaled Hide"] = {
    type: "commoncomponent"
  };
  componentsList["Scavenged Plating"] = {
    type: "commoncomponent"
  };
	componentsList["Searing Ember"] = {
    type: "commoncomponent"
  };
  componentsList["Serrated Shell"] = {
    type: "commoncomponent"
  };
	componentsList["Serrated Spike"] = {
    type: "commoncomponent"
  };
  componentsList["Severed Claw"] = {
    type: "commoncomponent"
  };
  componentsList["Silk Swatch"] = {
    type: "commoncomponent"
  };
  componentsList["Soul Shard"] = {
    type: "commoncomponent"
  };
  componentsList["Spined Carapace"] = {
    type: "commoncomponent"
  };
  componentsList["Vengeful Wraith"] = {
    type: "commoncomponent"
  };
  componentsList["Venom-Tipped Ammo"] = {
    type: "commoncomponent"
  };
  componentsList["Vicious Jawbone"] = {
    type: "commoncomponent"
  };
  componentsList["Vicious Spikes"] = {
    type: "commoncomponent"
  };
  componentsList["Void-Touched Ammo"] = {
    type: "commoncomponent"
  };
  componentsList["Vitriolic Gallstone"] = {
    type: "commoncomponent"
  };
	componentsList["Wardstone"] = {
    type: "commoncomponent"
  };
  componentsList["Wrathstone"] = {
    type: "commoncomponent"
  };

	//Others, types to be updated
  componentsList["Troll Bonecrusher"] = {
    type: "weapon"
  };
  componentsList["Spectral Longsword"] = {
    type: "weapon"
  };
  componentsList["Salazar's Sovereign Blade"] = {
    type: "weapon"
  };

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

  function getRelicComponents(relicName) { //Takes a name of a relic and returns quantities and objects of all base components, plus cost for crafting
  	totalCost += componentsList[relicName].cost; //Adds crafting cost of the current relic
    craftingOrder.unshift(relicName);
    for (var i = 0; i < componentsList[relicName].components.length; i++) { //Iterates for each of the relic's components
      if (componentsList[componentsList[relicName].components[i]].type == "relic") { //Fires if the current component is another relic
        getRelicComponents(componentsList[relicName].components[i]); //Recursively calls this funtion with the subrelic as argument
      }
      var componentAlreadyUsed = false; //Keeps track of whether another of this base component is already in the finalComponents list
      for (var j = 0; j < finalComponents.length; j++) { //Cycles through the components already in the finalComponents list
        if (componentsList[relicName].components[i] === finalComponents[j].component) { //Fires if the current component is the same as the on in the list
          finalComponents[j].quantity++; //Adds one to the quantity of the current index of the list
          componentAlreadyUsed = true; //Sets the check variable
        }
      }
      if (componentAlreadyUsed == false) { //Fires if the components is a new unique one
        var sortorder;
        if (componentsList[componentsList[relicName].components[i]].type === "relic") {sortorder = 1;} // These ifs adds the sortorder to be used when sorting the list
        if (componentsList[componentsList[relicName].components[i]].type === "questcomponent") {sortorder = 2;}
        if (componentsList[componentsList[relicName].components[i]].type === "rarecomponent") {sortorder = 3;}
        if (componentsList[componentsList[relicName].components[i]].type === "commoncomponent") {sortorder = 4;}
        if (componentsList[componentsList[relicName].components[i]].type === "weapon") {sortorder = 5;}
        finalComponents.push({
          quantity: 1,
          component: componentsList[relicName].components[i],
          sortorder: sortorder,
          type: componentsList[componentsList[relicName].components[i]].type
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

    var output = "<span>Base components:</span><br>";
    for (var i = 0; i < finalComponents.length; i++) {
      output += "<span class=\"" + finalComponents[i].type + "\">"; //Sets the color code for the component
      if (finalComponents[i].type === "relic") {
        output += "Blueprint: Relic - "; // Adds Blueprint text to relics
      } else {
        output += finalComponents[i].quantity + " "; //Adds qunatity to nonrelics
      }
      output += finalComponents[i].component + "<br></span>"; //Adds component name
    }
		output += "<span>" + totalCost + " Iron Bits<br>";
    output += "<br>";
    output += "Crafting order:<br></span>";
    for (var i = 0; i < craftingOrder.length; i++) { //Runs for each relic in the final relic, IE each row in thecrafting order output
    output += "<span>" + (i+1) + ": </span><span class=\"relic\">" + craftingOrder[i] + "</span><span> = </span>";
    	for (var j = 0; j < componentsList[craftingOrder[i]].components.length; j++) { // Runs for each component in the current relic (/row)
      	output += "<span class=\"" + componentsList[componentsList[craftingOrder[i]].components[j]].type + "\">" + componentsList[craftingOrder[i]].components[j] + "</span>";
        if ((j+1) < componentsList[craftingOrder[i]].components.length) { //Adds a "+" unless the current component is the last one
        	output += "<span> + </span>"
        }
    	}
      output += "<br>";
    }
    output += "<br><br><br>";

    document.getElementById('output').innerHTML = output;
  }
}