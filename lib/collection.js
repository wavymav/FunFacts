Questions = new Mongo.Collection('question', {});

Questions.attachSchema(new SimpleSchema({
  question: {
    type: String,
    label: "Question",
    max: 500,
    optional: false
  },
  answer: {
    type: String,
    label: "Answer",
    optional: false
  }
}));
