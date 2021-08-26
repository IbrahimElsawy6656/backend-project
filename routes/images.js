var express = require('express');
var router = express.Router();
var image = require('../models/images');


//AUTHENTICATION

router.use('/:password/:term', function (req, res, next) {

  if (req.params.password === "12345") {
    next();
  }
  else {
    res.render('error', { error: "incorrect Password" });
  }

});

//API REQUEST

router.use('/:password/:term', function (req, res, next) {

  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos',
    headers: { Authorization: "Client-ID ZH4anXjg8pqxWO7z7GFU4MPYO7a7GkfJ9UvA6aJRrcM" },
    params: {
      query: `${req.params.term}`
    },
  };

  axios.request(options).then(function (response) {
    results = response.data.results;
    next();

  }).catch(function (error) {

    console.error(error);

  });
});

//RENDER and save to DB

router.get('/:password/:term', function (req, res, next) {

  const img = new image({
    term: `${req.params.term}`,
    length: `${results.length}`,
    date: `2022`
  })
  img.save()

  res.render('index', { term: `${req.params.term}`, results: results });

});

module.exports = router;
