import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  status: { type: String, enum: ['новый', 'выполнен'], required: true },
  comment: { type: String },
});

const Order = model('Order', orderSchema);

export default Order;
