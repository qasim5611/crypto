const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Article = new schema(
  {
    title: {
      type: String,
      trim: true,
      max: 64,
    },
    isVoted: {
      type: Boolean,
      default: false,
    },

    auther: {
      type: String,
      trim: true,
      max: 64,
    },

    date: {
      type: String,
      trim: true,
      max: 64,
    },

    subject: {
      type: String,
      trim: true,
      max: 64,
    },

    journal: {
      type: String,
      trim: true,
      max: 64,
    },
    abstractdata: {
      type: String,
      trim: true,
      max: 64,
    },
    image: {
      type: String,
    },
    upvote: {
      type: String,
      trim: true,
      max: 64,
      default: 0,
    },
    downvote: {
      type: String,
      trim: true,
      max: 64,
      default: 0,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Article", Article);
