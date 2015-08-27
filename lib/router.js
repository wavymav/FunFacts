Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // Home Route
  this.route('questions', {
    path: '/',
    template: 'questions'
  });
});
