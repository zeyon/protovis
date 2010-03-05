/**
 * @ignore
 * @class
 */
pv.Layout = function() {
  pv.Mark.call(this);
};

pv.Layout.prototype = pv.extend(pv.Mark);

/** @private Defines a local property with the specified name and cast. */
pv.Layout.prototype.property = function(name, cast) {
  pv.Mark.cast[name] = cast;
  this.propertyMethod(name, true);
  return this;
};
