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
    template: 'blogAdd'
  });
  this.route('blogEdit', {
    controller: 'BlogController',
    path: '/whiski/blog/edit/:_id',
    template: 'blogEdit',
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
