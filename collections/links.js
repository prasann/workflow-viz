/*global Backbone */
var app = app || {};

(function(){
  "use strict";
  var Links = Backbone.Collection.extend({
    model: app.LinkModel
  });

  app.links = new Links();
})();
