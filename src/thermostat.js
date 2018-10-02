var Thermostat = function(){
  this.temperature = 20;
  this.minTemp = 10;
};

Thermostat.prototype.raiseTemp = function(number) {
  return (this.temperature += number)
};

Thermostat.prototype.decreaseTemp = function(number) {
  if (this.temperature - number < this.minTemp) {
    return this.temperature = this.minTemp
  } else {
  return (this.temperature -= number)
  };
};
