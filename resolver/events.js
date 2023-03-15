const Event = require("../models/event");
const { user } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      console.log('events',events)
      return events?.map((res) => {
        return {
          ...res?._doc,
          creator: user.bind(this, res?._doc?.creator),
        };
      });
    } catch (error) {
      throw err;
    }
  },
  createEvent: async (args) => {
    const event = new Event({
      title: args?.eventInput?.title,
      description: args?.eventInput?.description,
      price: args?.eventInput?.price,
      date: new Date(args?.eventInput?.date),
      creator: "640edd6ad80e2b0cc7618ca4",
    });
    try {
      const result = await  event.save();
      return { ...result?._doc };
    } catch (err) {
      throw err;
    }
  },
};
