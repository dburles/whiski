if Meteor.isClient
#   Router.map ->
#     @route 'whiski', 'path': '/whiski'

  Router.configure
    layout: 'whiskiLayout' # this needs to be specific to whiski routes