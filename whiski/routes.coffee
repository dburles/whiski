Router.map ->
  @route 'whiskiHome', 'path': '/whiski'

if Meteor.isClient
  Router.configure layout: "layout" # this needs to be specific to whiski routes
