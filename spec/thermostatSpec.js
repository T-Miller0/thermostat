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

  describe('power mode', function() {
    it('max temperature is 25  when power mode on', function() {
      thermostat.raiseTemp(6)
      expect(thermostat.temperature).toEqual(25);
    });
    it('max temperature is 32 when power saving mode is off', function() {
      thermostat.savingmodeOff()
      thermostat.raiseTemp(15)
      expect(thermostat.temperature).toEqual(32);
    });
  });
  describe('#reset', function() {
    it('resets temperature to 20', function() {
      thermostat.raiseTemp(3)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#usage', function() {
    it('return low-usage if current energy < 18', function() {
      expect(thermostat.usage(16)).toEqual('low-usage')
    });
    it('return #medium-usage if energy < 25', function() {
      expect(thermostat.usage(22)).toEqual('medium-usage')
    });
    it('return #high-usage if energy >=25', function() {
      expect(thermostat.usage(26)).toEqual('high-usage')
    });
  });
});
