Template.blogForm.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var properties = {
      title: $('input[name="title"]').val(),
      author: $('input[name="author"]').val(),
      content: $('textarea[name="content"]').val()
    };

    Blogs.upsert(this._id, { $set: properties });
    Router.go('blogOverview');
  }
});

Template.blogOverview.events({
  'click .remove': function() {
    Blogs.remove(this._id);
  }
});