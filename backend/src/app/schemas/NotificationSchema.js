import mongoose from 'mongoose';

const recipientSchema = new mongoose.Schema({
  name: String,
  street: String,
  number: String,
  complement: String,
  city: String,
  state: String,
  cep: String
});

const NotificationSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true
    },
    recipient: {
      type: [recipientSchema],
    },
    deliverer: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Notification', NotificationSchema);
