var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.raiseTemp = function(number) {
  return (this.temperature += number)
};
