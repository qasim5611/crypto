const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Article = new schema(
  {
    id: {
      type: String,
      trim: true,
      max: 64,
    },
    title: {
      type: String,
      trim: true,
      max: 64,
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
    },
    abstractdata: {
      type: String,
      trim: true,
      max: 64,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Article", Article);
