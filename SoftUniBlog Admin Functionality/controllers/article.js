const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articleArgs = req.body;

        let errorMsg = '';
        if(!req.isAuthenticated()){
            errorMsg = 'You should be logged in to make articles!'
        } else if (!articleArgs.title){
            errorMsg = 'Invalid title!';
        } else if (!articleArgs.content){
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }

        let image = req.files.image;

        if (image) {
            let filenameAndExt = image.name;

            let separator = filenameAndExt.lastIndexOf('.');

            let filename = filenameAndExt
                .substring(0, separator);
            let extension = filenameAndExt
                .substring(separator + 1);

            let randomChars = require('./../utilities/encryption')
                .generateSalt()
                .substring(0, 5)
                .replace(/\//g, 'x');

            let finalFilename = `${filename}_${randomChars}.${extension}`;

            image.mv(`./public/images/${finalFilename}`, err => {
                if (err) {
                    console.log(err.message);
                }
            });
            articleArgs.imagePath = `/images/${finalFilename}`;
        }

        articleArgs.author = req.user.id;

        Article.create(articleArgs).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message});
                } else {
                    res.redirect('/');
                }
            })
        })
    },

    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {
            res.render('article/details', article);
        })
    },
};