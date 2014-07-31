/* global Backbone, $, console */

var GitHubApp = GitHubApp || {};

var GitHubAppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'user/:username': 'user',
    'statistics': 'stats'
  },
  initialize: function () {
    'use strict';
    this.users = new GitHubApp.Models.UserCollection();
  },
  home: function () {
    'use strict';
    GitHubApp.Controllers.FrontCtrl.setView({
      partial: 'partials/home.tpl',
      view: GitHubApp.Views.Home,
      model: this.users
    });

    GitHubApp.Controllers.FrontCtrl.render();
  },
  user: function (login) {
    'use strict';
    var match = this.users.where({ login: login }),
        user;

    if (!match || !match.length) {
      user = new GitHubApp.Models.User({
        login: login
      });
      this.users.add(user);
    } else {
      user = match[0];
    }

    user.fetch()
    .then(function success() {
      GitHubApp.Controllers.FrontCtrl.setView({
        partial: 'partials/user.tpl',
        view: GitHubApp.Views.User,
        model: user
      });

      GitHubApp.Controllers.FrontCtrl.render();
    });
  },
  stats: function () {
    'use strict';
    var self = this;

    $.when.apply($, this.users.map(function(user) {
      return user.fetch();
    }))
    .then(function success() {
      GitHubApp.Controllers.FrontCtrl.setView({
        partial: 'partials/stats.tpl',
        view   : GitHubApp.Views.Stats,
        model  : self.users
      });

      GitHubApp.Controllers.FrontCtrl.render();
    }, function error(msg) {
      console.log('There was an error: ' + msg);
    });
  }
});

GitHubApp.router = new GitHubAppRouter();

Backbone.history.start();
