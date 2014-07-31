/* global Backbone, Chart, $ */

var GitHubApp = GitHubApp || {};

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Stats = Backbone.View.extend({
  drawVisualization: function () {
    'use strict';
    this.data = {};
    this.data.labels = this.model.pluck('login');
    this.data.datasets = [{
      label: 'Followers',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: this.model.pluck('followers')
    }];
  },
  render: function () {
    'use strict';
    this.drawVisualization();

    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    this.$el.append(canvas);

    new Chart(context).Bar(this.data);

    return this;
  }
});
