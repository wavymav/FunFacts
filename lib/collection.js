// Qestions collections
Questions = new Mongo.Collection('questions', {});

// Questions Schema
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
