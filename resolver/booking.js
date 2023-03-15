const Event = require("../models/event");
const Booking = require("../models/booking");

const { user, singleEvent } = require("./merge");

module.exports = {
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings?.map((booking) => {
        return {
          ...booking?._doc,
          createdAt: new Date(booking?.createdAt).toISOString(),
          updatedAt: new Date(booking?.updatedAt).toISOString(),
          user: user.bind(this, booking?.user),
          event: singleEvent.bind(this, booking?.event),
        };
      });
    } catch (error) {
      throw error;
    }
  },
  bookEvent: async (arg) => {
    try {
      const fetchedEvent = await Event.findOne({ _id: arg?.eventId });
      const booking = new Booking({
        user: "640edd6ad80e2b0cc7618ca4",
        event: fetchedEvent?._id,
      });
      const result = await booking.save();
      return {
        ...result?._doc,
        createdAt: new Date(result?.createdAt).toISOString(),
        updatedAt: new Date(result?.updatedAt).toISOString(),
        user: user.bind(this, result?.user),
        event: singleEvent.bind(this, result?.event),
      };
    } catch (error) {
      throw error;
    }
  },
  cancelBooking: async ({ bookingId }) => {
    try {
      const result = await Booking.deleteOne({ _id: bookingId });
      if (result) {
        return {
          message: "Booking Deleted Successfully",
        };
      }
    } catch (error) {
      throw error;
    }
  },
};