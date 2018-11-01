var Thermostat = function(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxtemp = 25
  this.savingmode = true;
};

Thermostat.prototype.raiseTemp = function(number) {
   if (!this.savingmode) {
     this.maxtemp = 32
  } else {
    this.maxtemp = 25
  }
  if (this.temperature + number > this.maxtemp) {
    return this.temperature = this.maxtemp
  } else {
    return (this.temperature += number)
  };
 };

Thermostat.prototype.decreaseTemp = function(number) {
  if (this.temperature - number < this.minTemp) {
    return this.temperature = this.minTemp
  } else {
  return (this.temperature -= number)
  };
};

Thermostat.prototype.savingmodeOff = function() {
  this.savingmode = false
};

Thermostat.prototype.reset = function() {
  return this.temperature = 20
};

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  } else if (this.temperature < 25) {
    return "medium-usage"
  } else {
    return 'high-usage'
  };
};
