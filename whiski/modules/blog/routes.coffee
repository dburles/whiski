Router.map ->
  @route "blogOverview",
    path: "/whiski/blog"
    template: "blogOverview"
    data: ->
      Blogs.find()
    renderTemplates:
      blogNav:
        to: "nav"

  @route "blogAdd",
    path: "/whiski/blog/add"
    template: "blogAdd"
    renderTemplates:
      blogNav:
        to: "nav"

  @route "blogEdit",
    path: "/whiski/blog/edit/:_id"
    template: "blogEdit"
    data: ->
      Blogs.findOne(this.params._id)
    renderTemplates:
      blogNav:
        to: "nav"

