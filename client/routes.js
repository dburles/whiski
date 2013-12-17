Router.map(function() {
  this.route('home', {
    controller: 'SiteController',
    path: '/'
  });
});

SiteController = RouteController.extend({
  layoutTemplate: 'layout'
});
