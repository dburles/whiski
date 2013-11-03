Router.map ->
  @route 'home',
    controller: 'SiteController'
    path: '/'

@SiteController = RouteController.extend
  layoutTemplate: 'layout'