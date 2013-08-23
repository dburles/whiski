if Meteor.isClient
  Router.map ->
    # @route 'blog',
    #   path: '/whiski/blog'
    #   controller: BlogOverviewController
    #   action: 'show'

    @route 'blogOverview',
      # layout: 'whiskiLayout' need some global way of passing this value to all 
      #                        whiski routes, (also  we can't set a layout per controller yet)
      path: '/whiski/blog'
      template: 'blogOverview'
      # data: Blogs.find()     y not just pass through a helper pls?
      renderTemplates:
        'blogNav': #           here we probably pass data to partial through a helper
          to: 'nav'


  #   @route 'blogAdd',
  #     path: '/whiski/blog/add'
  #     controller: BlogAddController
  #     action: 'show'

  #   @route 'blogEdit',
  #     path: '/whiski/blog/edit/:_id'
  #     controller: BlogEditController
  #     action: 'show'



  # class BlogOverviewController extends RouteController
  #   template: 'blogOverview'

  #   # data: ->
  #   #   Blogs.find()

  #   data: ->
  #     # title: 'test'
  #     Blogs.find()

  #   # show: ->
  #   #   @render()
  #   #   return
  
  #   run: ->
  #     super


  # class BlogAddController extends RouteController {
  #   template: 'add'

  #   data: ->

  #   show: ->
  #     @render()
  #     return
  # }


  # class BlogEditController extends RouteController {
  #   template: 'edit'

  #   data: ->
  #     Blogs.findOne(this.params._id)

  #   show: ->
  #     @render()
  #     return
  # }