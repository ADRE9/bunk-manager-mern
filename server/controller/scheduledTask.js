const auth = require('../middlewares/auth');
const express = require('express');
const router = new express.Router();
const { createTemplates } = require('./subject');
var cron = require('node-cron');

var job = cron.schedule('* * * * * *', function() {
  console.log('You will see this message every second');
  router.post('/api/subject/createTemplate', createTemplates);
});
job.start();