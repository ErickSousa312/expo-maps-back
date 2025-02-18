import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const routesWalkSchema = new Schema({
  route: [
    {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
  ],
  emailUser: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('RouteWalk', routesWalkSchema);
