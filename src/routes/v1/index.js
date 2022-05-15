const express = require('express');
const issueRoute = require('./issue.route');

const router = express.Router();

const routes = [
  {
    path: '/issues',
    route: issueRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
