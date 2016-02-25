/*global Backbone */
var app = app || {};

(function(){
  "use strict";
  var Links = Backbone.Collection.extend({
    model: app.LinkModel,
    url: '/data/links.json',
    initialize: function(){
      this.deferred = this.fetch();
    }
  });
  app.links = new Links();
})();
