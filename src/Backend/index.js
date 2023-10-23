import express from 'express';
import { json } from 'body-parser';
import { get } from 'axios';

const app = express();
app.use(json());

import { findByIdAndUpdate } from './models/order';
import Warehouse from './models/warehouse';

app.post('/update-order-comment', async (req, res) => {
  try {
    const orderId = req.body.orderId;

    const response = await get('https://test.bpium.ru/api/webrequest/request');
    const value = response.data.value;

    const order = await findByIdAndUpdate(orderId, { comment: value });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при обновлении комментария' });
  }
});

app.post('/create-warehouse-entry', async (req, res) => {
  try {
    const { orderId, comment } = req.body;

    // Создание записи в каталоге Склад
    const warehouseEntry = new Warehouse({ date: new Date(), order: orderId, comment });
    await warehouseEntry.save();

    res.json(warehouseEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании записи в Складе' });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
