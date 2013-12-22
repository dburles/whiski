Router.map(function() {
  this.route('blogOverview', {
    controller: 'BlogController',
    path: '/whiski/blog',
    template: 'blogOverview',
    data: function() {
      return Blogs.find();
    }
  });
  this.route('blogAdd', {
    controller: 'BlogController',
    path: '/whiski/blog/add',
    template: 'blogForm'
  });
  this.route('blogEdit', {
    controller: 'BlogController',
    path: '/whiski/blog/edit/:_id',
    template: 'blogForm',
    data: function() {
      return Blogs.findOne(this.params._id);
    }
  });
});

BlogController = WhiskiController.extend({
  yieldTemplates: {
    blogNav: {
      to: 'nav'
    }
  }
});
