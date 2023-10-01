var sliders = document.querySelectorAll(".slider");
var outputs = document.querySelectorAll("output[id^='output-']");
var newConcs = document.querySelectorAll("span[id^='new-conc-']");
var population = document.querySelectorAll(".population");
var original_mean = document.getElementById("original_weighted_mean");
var new_mean = document.getElementById("new_weighted_mean")
var originalConcs = document.querySelectorAll(".original-conc");
var forms= document.querySelectorAll("form")


var total_pop=0;
var weighted_sum=0;



//To calculate initial values

for (var j = 0; j < population.length; j++) {
    var oc = parseFloat(originalConcs[j].value);
    var pop = parseFloat(population[j].value);
    total_pop+=pop;
    weighted_sum += oc * pop;
  }

total_population.innerHTML = parseFloat(total_pop.toFixed(1));
original_mean.innerHTML = parseFloat((weighted_sum / total_pop).toFixed(1));
new_mean.innerHTML=parseFloat(original_mean.innerHTML).toFixed(1);


for (var i = 0; i < population.length; i++) { 
    population[i].addEventListener("change", function() {
    total_pop = 0;
    for (var j = 0; j < population.length; j++) {
      var pop = parseFloat(population[j].value);
      total_pop += pop;
      total_population.innerHTML = total_pop.toFixed(1);
    }
  });
}

for (var i = 0; i < originalConcs.length; i++) {
    originalConcs[i].addEventListener("change", function() {
      weighted_sum = 0;
      for (var j = 0; j < population.length; j++) {
        var oc = parseFloat(originalConcs[j].value);
        var pop = parseFloat(population[j].value);
        weighted_sum += oc * pop;
        newConcs[j].innerHTML = parseFloat(oc.toFixed(1));
        original_mean.innerHTML = (weighted_sum / parseFloat(total_population.innerHTML)).toFixed(1);
        new_mean.innerHTML = original_mean.innerHTML; 
        sliderupdate();
      }
      });
    }



    for (var i = 0; i < population.length; i++) {
      population[i].addEventListener("change", function() {
        weighted_sum = 0;
        for (var j = 0; j < population.length; j++) {
          var oc = parseFloat(originalConcs[j].value);
          var pop = parseFloat(population[j].value);
          weighted_sum += oc * pop;
          a= original_mean.innerHTML
          newConcs[j].innerHTML = parseFloat(oc.toFixed(1));
          original_mean.innerHTML = (weighted_sum / parseFloat(total_population.innerHTML)).toFixed(1);
          new_mean.innerHTML=original_mean.innerHTML;
          sliderupdate();
        }
        });
      }







for (i=0;i<forms.length;i++){
    forms[i].addEventListener("submit", function(event) {
        event.preventDefault();
      });     
}


for (var i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("input", function() {
  var x = this.value;
  var index = this.getAttribute("id") - 1;
  outputs[index].innerHTML = x;
  var newconc = ((100 - x) / 100) * parseFloat(originalConcs[index].value);
  newConcs[index].innerHTML = newconc.toFixed(1);

  // Update newConcs array with the new values
  for (var j = 0; j < population.length; j++) {
    newConcs[j].innerHTML = ((((100 - sliders[j].value) / 100)) * parseFloat(originalConcs[j].value)).toFixed(1);
  }

  // Calculate the new weighted sum using the updated newConcs array
  var new_weighted_sum = 0;
  for (var j = 0; j < population.length; j++) {
    new_weighted_sum += parseFloat(population[j].value) * parseFloat(newConcs[j].innerHTML);
  }
    new_mean.innerHTML = (new_weighted_sum / parseFloat(total_population.innerHTML)).toFixed(1);
    var netreduction = ((parseFloat(original_mean.innerHTML) - parseFloat(new_mean.innerHTML)) / parseFloat(original_mean.innerHTML)) * 100;
    reduction.innerHTML = parseFloat(netreduction.toFixed(1));
});
}




function sliderupdate(){
  for (var i = 0; i < sliders.length; i++) {
    var x = sliders[i].value;
    outputs[i].innerHTML = x;
    var newconc = ((100 - x) / 100) * parseFloat(originalConcs[i].value);
    newConcs[i].innerHTML = newconc.toFixed(1);
  
    // Update newConcs array with the new values
    for (var j = 0; j < population.length; j++) {
      newConcs[j].innerHTML = ((((100 - sliders[j].value) / 100)) * parseFloat(originalConcs[j].value)).toFixed(1);
    }
  
    // Calculate the new weighted sum using the updated newConcs array
    var new_weighted_sum = 0;
    for (var j = 0; j < population.length; j++) {
      new_weighted_sum += parseFloat(population[j].value) * parseFloat(newConcs[j].innerHTML);
    }
      new_mean.innerHTML = (new_weighted_sum / parseFloat(total_population.innerHTML)).toFixed(1);
      var netreduction = ((parseFloat(original_mean.innerHTML) - parseFloat(new_mean.innerHTML)) / parseFloat(original_mean.innerHTML)) * 100;
      reduction.innerHTML = parseFloat(netreduction.toFixed(1));
  };
}


