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

var allTasks = new TaskCollection();
var tc = allTasks.fetch({
  url: '/data/tasks.json',
  success: function(tasks) {
    tasks.each(function(task) {
      task.draw();
    })
  }
});

$(document).on('click','.card', function(e){
  var currentClass = $(e.target).attr('class');
  currentClass += ' ready'
  $(e.target).attr('class', currentClass);
})
