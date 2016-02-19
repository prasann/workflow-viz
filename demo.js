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

var taskCard = function(x, y, name) {
  var cell = new joint.shapes.workflow.Task({
    position: {
      x: x,
      y: y
    },
    attrs: {
      '.name': {
        text: name
      }
    }
  });
  graph.addCell(cell);
  return cell;
};

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
}

var task1 = taskCard(300, 50, 'Task1');
var task2 = taskCard(100, 250, 'Task2');
var task3 = taskCard(500, 250, 'Task3');
var task4 = taskCard(300, 450, 'Task4');

link(task1, task2);
link(task1, task3);
link(task4, task3);
link(task4, task2);
