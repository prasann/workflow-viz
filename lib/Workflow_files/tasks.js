/*global Backbone */
var app = app || {};

(function(){
  "use strict";
  var Tasks = Backbone.Collection.extend({
    model: app.TaskModel
  });

  app.tasks = new Tasks();
})();
