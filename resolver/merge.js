const User = require("../models/user");
const Event = require("../models/event");

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user?._doc,
    };
  } catch (error) {
    throw err;
  }
};

const singleEvent = async (eventID) => {
    try {
      const event = await Event.findOne({ _id: eventID });
      return {
        ...event?._doc,
      };
    } catch (error) {
      throw err;
    }
  };

exports.user = user;
exports.singleEvent = singleEvent;
