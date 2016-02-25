joint.shapes.workflow = {};

joint.shapes.workflow.Task = joint.shapes.basic.TextBlock.extend({

  markup: '<g><rect class="card"/><text class="name"/><text class="reviewer_role"/></g>',

  defaults: joint.util.deepSupplement({

    type: 'shapes.workflow',
    size: {
      width: 100,
      height: 50
    },
    attrs: {

      rect: {
        width: 170,
        height: 60
      },

      '.card': {
          fill: '#FFFFFF', stroke: '#000000', 'stroke-width': 2,
          'pointer-events': 'visiblePainted', rx: 5, ry: 5
      },

      '.name': {
        ref: '.card',
        'ref-x': 0.5,
        'ref-y': 0.1,
        'font-weight': 800,
        'font-family': 'Verdana',
        'font-size': 10,
        'text-anchor': 'middle'
      },

      '.reviewer_role': {
        ref: '.card',
        'ref-x': 0.5,
        'ref-y': 0.5,
        'font-weight': 800,
        'font-family': 'Verdana',
        'font-size': 10,
        'fill': 'red',
        'text-anchor': 'middle'
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.workflow.Link = joint.dia.Link.extend({
  markup: '<path class="connection"/><g class="labels" />',
  interactive: false,
  defaults: {
      type: 'shapes.workflow',
      source: { selector: '.card' }, target: { selector: '.card' },
      attrs: { '.connection': { stroke: '#585858', 'stroke-width': 3, fill: 'none'}},
      z: -1
  }
});
