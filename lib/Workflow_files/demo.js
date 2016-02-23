var app = app || {};
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  width: 800,
  height: 900,
  gridSize: 1,
  model: graph,
  perpendicularLinks: true,
  restrictTranslate: true
});

function addClass(className, $element) {
  var classes = $element.attr('class') + ' ' + className;
  $element.attr('class', _.uniq(classes.split(" ")).join(" "));
}

function removeClass(className, $element) {
  var classes = $element.attr('class').split(" ");
  $element.attr('class', _.without(classes,className).join(" "));
}

function link(source, target) {
  var cell = new joint.shapes.workflow.Link({
    source: {
      id: source.id
    },
    target: {
      id: target.id
    }
  });
  graph.addCell(cell);
  return cell;
};

var tc = app.tasks.fetch({
  url: '/data/tasks.json',
  success: function(tasks) {
    tasks.each(function(task) {
      task.draw();
    })
  }
});

$(document).on('click', '.card', function(e) {
  var $source = $('.link-source');
  debugger;
  if ($source.length > 0) {
    var $target = $(e.target);

    app.link.create($source, $target);
    removeClass('link-source', $source);
  } else {
    addClass('link-source', $(e.target));
  }
})
