const express = require('express')
const Article = require('./../models/article.js')
const router = express.Router()

router.get('/', async (req, res) => {
    const articles = await Article.find().sort({date: 'desc'});
    res.json(articles);
});

router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (e) {
        res.json({error: "article not found"});
    }
});

module.exports = router