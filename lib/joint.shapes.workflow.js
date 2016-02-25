joint.shapes.workflow = {};

joint.shapes.workflow.Task = joint.shapes.basic.TextBlock.extend({

  markup: '<g><rect class="card"/><text class="name"/><text class="reviewer_role"/><text class="dates"/></g>',

  defaults: joint.util.deepSupplement({

    type: 'shapes.workflow',
    size: {
      width: 210,
      height: 80
    },
    attrs: {
      rect: {
        width: 210,
        height: 80
      },

      '.card': {
        fill: '#FFFFFF',
        stroke: '#000000',
        'stroke-width': 2,
        'pointer-events': 'visiblePainted',
        rx: 5,
        ry: 5
      },

      '.name': {
        ref: '.card',
        'ref-x': 0.5,
        'ref-y': 0.1,
        'font-weight': 800,
        'font-family': 'sans-serif',
        'font-size': 11,
        'text-anchor': 'middle'
      },

      '.reviewer_role': {
        ref: '.card',
        'ref-x': 0.5,
        'ref-y': 0.4,
        'font-weight': 800,
        'font-family': 'sans-serif',
        'font-size': 10,
        'fill': 'red',
        'text-anchor': 'middle'
      },
      '.dates': {
        ref: '.card',
        'ref-x': 0.2,
        'ref-y': 0.7,
        'font-weight': 800,
        'font-family': 'sans-serif',
        'font-size': 10,
        'text-anchor': 'middle'
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.workflow.Link = joint.dia.Link.extend({
  markup: '<path class="connection"/><g class="labels"><text class="lead_time"/></g>',
  interactive: false,
  defaults: {
    type: 'shapes.workflow',
    source: {
      selector: '.card'
    },
    target: {
      selector: '.card'
    },
    attrs: {
      '.connection': {
        stroke: '#585858',
        'stroke-width': 3,
        fill: 'none'
      },
      '.lead_time': {
        fill: 'red'
      }
    },
    labels: [{
      position: 0.5,
      attrs: {
        text: {
          'font-family': 'sans-serif',
        },
        rect: {
          stroke: 'white',
          'stroke-width': 10,
          rx: 5,
          ry: 5
        }
      }
    }],
    z: -1
  }
});
