// Generated by CoffeeScript 1.6.2
(function() {
  define('EaseLib', function() {
    var Easings;

    Easings = (function() {
      function Easings(o) {
        this.createEasings();
      }

      Easings.prototype.createEasings = function() {
        var QuakeOut;

        this.Quake = {};
        this.Quake.Out = QuakeOut = (function() {
          function QuakeOut(coef1, coef2) {
            if (coef1 == null) {
              coef1 = 5;
            }
            if (coef2 == null) {
              coef2 = 5;
            }
            return function(t) {
              var b;

              b = Math.exp(-t * coef1) * Math.cos(Math.PI * 2 * t * coef2);
              if (t >= 1) {
                return 1;
              }
              return 1 - b;
            };
          }

          return QuakeOut;

        })();
        return this.Quake.In = function(t) {
          var b;

          b = Math.exp(-t * 10) * Math.cos(Math.PI * 2 * t * 10);
          if (t >= 1) {
            return 1;
          }
          return 1 - b;
        };
      };

      return Easings;

    })();
    return new Easings;
  });

}).call(this);
