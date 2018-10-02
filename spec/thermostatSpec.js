describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat starts at 20 degrees', function() {
    it('is expected to start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('changes temperature', function() {
    it('increases the temperature', function() {
      thermostat.raiseTemp(2)
      expect(thermostat.temperature).toBe(22);
    })
    it('decreases the temperature', function() {
      thermostat.decreaseTemp(2)
      expect(thermostat.temperature).toBe(18);
    });
  });
  describe('minimum temperature', function() {
    it('minimum temperature of 10 degrees', function() {
      thermostat.decreaseTemp(11)
      expect(thermostat.temperature).toBe(10);
    });
  });
});
