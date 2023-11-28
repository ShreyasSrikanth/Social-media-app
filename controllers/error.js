exports.get404 = (req,res,next) =>{
    res.ststus(404).render('404', { pageTitle:'Page Not Found',path:'/404'})
}