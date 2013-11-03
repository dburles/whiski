Router.map ->
  @route 'whiskiHome',
    controller: 'WhiskiController'
    path: '/whiski'

@WhiskiController = RouteController.extend
  layoutTemplate: 'whiskiLayout'