Router.map ->
  @route 'blogOverview',
    controller: 'BlogController'
    path: '/whiski/blog'
    template: 'blogOverview'
    data: ->
      Blogs.find()

  @route 'blogAdd',
    controller: 'BlogController'
    path: '/whiski/blog/add'
    template: 'blogAdd'

  @route 'blogEdit',
    controller: 'BlogController'
    path: '/whiski/blog/edit/:_id'
    template: 'blogEdit'
    data: ->
      Blogs.findOne(this.params._id)


@BlogController = @WhiskiController.extend
  yieldTemplates:
    blogNav:
      to: 'nav'