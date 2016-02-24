joint.shapes.workflow = {};

joint.shapes.workflow.Task = joint.dia.Element.extend({

  markup: '<g class="rotatable"><g class="scalable"><rect class="card"/><image/></g><text class="rank"/><text class="name"/></g>',

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
        'font-weight': '800',
        ref: '.card',
        'ref-x': 0.9,
        'ref-y': 0.6,
        'font-family': 'Courier New',
        'font-size': 14,
        'text-anchor': 'end'
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
