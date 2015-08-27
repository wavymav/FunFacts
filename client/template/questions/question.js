Template.questions.helpers({
  questions: function() {
    return Questions.find({}).map(function(question, index) {
      question.i = index;
      return question;
    });
  }
});
