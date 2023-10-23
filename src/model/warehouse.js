// models/warehouse.js
import { Schema, model } from 'mongoose';

const warehouseSchema = new Schema({
  date: { type: Date, default: Date.now },
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  comment: { type: String },
});

const Warehouse = model('Warehouse', warehouseSchema);

export default Warehouse;
