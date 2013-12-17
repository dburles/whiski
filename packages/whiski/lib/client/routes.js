Router.map(function() {
  this.route('whiskiHome', {
    controller: 'WhiskiController',
    path: '/whiski'
  });
});

WhiskiController = RouteController.extend({
  layoutTemplate: 'whiskiLayout'
});
