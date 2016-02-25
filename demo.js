var app = app || {};
app.graph = new joint.dia.Graph();
app.paper = new joint.dia.Paper({
  el: $('#paper'),
  width: 800,
  height: 900,
  gridSize: 1,
  model: app.graph
});

app.wrapText = function(name){
  return joint.util.breakText(name, {
    width: 170
  });
}

function addClass(className, $element) {
  var classes = $element.attr('class') + ' ' + className;
  $element.attr('class', _.uniq(classes.split(" ")).join(" "));
}

function removeClass(className, $element) {
  var classes = $element.attr('class').split(" ");
  $element.attr('class', _.without(classes, className).join(" "));
}

// app.paper.on('cell:pointerclick', function(cellView, evt, x, y) {
//   if (app.sourceTask) {
//     app.link.draw(app.sourceTask.model, cellView.model)
//     removeClass('link-source', $('.link-source'));
//     app.sourceTask = undefined;
//   } else {
//     addClass('link-source', $(evt.target).closest('.element').find('.card'));
//     app.sourceTask = cellView;
//   }
// });
