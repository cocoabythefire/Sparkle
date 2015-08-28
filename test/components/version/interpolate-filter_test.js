'use strict';

describe('sparkleApp.version module', function() {
  beforeEach(module('sparkleApp.version'));

  describe('interpolate filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).to.equal('before TEST_VER after');
    }));
  });
});