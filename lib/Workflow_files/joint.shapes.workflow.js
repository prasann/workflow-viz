joint.shapes.workflow = {};

joint.shapes.workflow.Task = joint.dia.Element.extend({

  markup: '<g class="rotatable"><g class="scalable"><rect class="card"/><image/></g><text class="rank"/><text class="name"/></g>',

  defaults: joint.util.deepSupplement({

    type: 'shapes.workflow',
    size: {
      width: 180,
      height: 70
    },
    attrs: {

      rect: {
        width: 170,
        height: 60
      },

      '.card': {
          fill: '#FFFFFF', stroke: '#000000', 'stroke-width': 2,
          'pointer-events': 'visiblePainted', rx: 10, ry: 10
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
  markup: '<path class="connection"/><path class="marker-target"/><g class="labels" />',
  defaults: {
      type: 'shapes.workflow',
      source: { selector: '.card' }, target: { selector: '.card' },
      attrs: { '.connection': { stroke: '#585858', 'stroke-width': 3 }},
      z: -1
  }
});
