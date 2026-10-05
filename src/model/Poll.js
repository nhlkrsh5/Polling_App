import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true,
        trim: true
    },
    option:{
        type: [
        {
          text: { type: String, required: true, trim: true },
          votes: { type: Number, default: 0 },
          _id: false, // this don't create automatic ID
        },
      ],
      validate: {
        validator: (arr) => arr.length >= 2 && arr.length <= 6,
        message: "A poll needs between 2 and 6 options",
      },
    },
    code:{
        type: String,
        unique: true, 
        required: true,
        uppercase: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ['active','close'],
        default: 'actives'
    }
},{timestamps:true});

const poll = mongoose.model("Poll",pollSchema);

export default poll;
/**
 const poll = await Poll.create({
  question: "Favorite language?",
  options: [
    { text: "JavaScript" },
    { text: "Python" },
    { text: "Java" },
  ],
  code: "K7P2QX",
  creator: "665e9a1b2c3d4e5f6a7b8c9d", // a real user's _id
});

NOte: this how you inserted 
 */