var app = app || {};
app.graph = new joint.dia.Graph();
app.paper = new joint.dia.Paper({
  el: $('#paper'),
  width: 800,
  height: 900,
  gridSize: 1,
  model: app.graph
});

app.wrapText = function(name) {
  if (name === '' || name === undefined) {
    return name;
  };
  return joint.util.breakText(name, {
    width: 210
  });
};

function addClass(className, $element) {
  var classes = $element.attr('class') + ' ' + className;
  $element.attr('class', _.uniq(classes.split(" ")).join(" "));
}

function removeClass(className, $element) {
  var classes = $element.attr('class').split(" ");
  $element.attr('class', _.without(classes, className).join(" "));
}

app.paper.on('cell:pointerclick', function(cellView, evt, x, y) {
  console.log();
  if (cellView.model.isLink() ||
    $(evt.target).closest('.href_link').length > 0) {
    return;
  }
  if (app.sourceTask) {
    var newLink = new app.LinkModel();
    if (app.sourceTask != cellView) {
      newLink.draw(app.sourceTask.model, cellView.model);
    }
    removeClass('link-source', $('.link-source'));
    app.sourceTask = undefined;
  } else {
    addClass('link-source', $(evt.target).closest('.element').find('.card'));
    app.sourceTask = cellView;
  }
});

app.createJSON = function() {
  var cells = app.graph.getCells();
  _.each(cells, function(cell) {
    if (!cell.isLink()) {
      var position = cell.position();
      cell.get('dbTask').set('position', position);
    } else {
      var vertices = cell.get('vertices') || [];
      cell.get('dbLink').set('vertices', vertices);
    }
  });
  console.log(JSON.stringify(app.tasks.toJSON()));
  console.log(JSON.stringify(app.links.toJSON()))
}

app.graph.on('change:position', function(cell) {
  var rect = g.rect(cell.getBBox());
  if (!cell.isLink()) {

  }
  if (app.graph.findModelsInArea(rect).length > 1) {
    cell.set('position', cell.previous('position'));
  }
})
