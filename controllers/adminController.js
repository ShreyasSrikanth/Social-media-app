const Items = require('../models/itemModel');
const posts = require('../models/comments');

exports.postItem = (req, res, next) => {
    const url = req.body.url;
    const caption = req.body.caption;
    const comment = req.body.comment;
    
    console.log(url)

    Items.create({
        imageUrl: url,
        imageCaption: caption
    })
    .then(result => {
        res.status(200).json({ message: 'Information is successfully stored' });
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to store information' });
    });
};


exports.getItem = (req,res,next) =>{
    Items.findAll()
    .then(post =>{
        console.log('getting items');
        res.json(post)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.addComment = (req, res, next) => {
    let name = req.body.name;
    let comment = req.body.comment;
    let id = req.body.id;

    console.log(id);
    console.log(comment);
    console.log(name)

    posts.create({
      name:name,
      comments:comment,
      UserId:id
    }).then(result => {
      res.status(200).json({message: 'Comment is successfully added'});
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to store information' });
    });
};

