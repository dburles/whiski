Template.blogEdit.events
  'submit form': (event, template) ->
    event.preventDefault()
    
    properties =
      name: $('input[name="name"]').val()
      message: $('input[name="message"]').val()

    Blogs.update @._id, $set: properties, (error) ->
      if error then alert error.reason else Router.go "blogOverview"

Template.blogAdd.events
  'submit form': (event, template) ->
    event.preventDefault()

    properties =
      name: $('input[name="name"]').val()
      message: $('input[name="message"]').val()

    Blogs.insert properties, (error) ->
      if error then alert error.reason else Router.go "blogOverview"
