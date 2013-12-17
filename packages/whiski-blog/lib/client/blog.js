Template.blogEdit.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var properties = {
      name: $('input[name="name"]').val(),
      message: $('input[name="message"]').val()
    };

    Blogs.update(this._id, { $set: properties });
    Router.go('blogOverview');
  }
});

Template.blogAdd.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var properties = {
      name: $('input[name="name"]').val(),
      message: $('input[name="message"]').val()
    };

    Blogs.insert(properties);
    Router.go('blogOverview');
  }
});
