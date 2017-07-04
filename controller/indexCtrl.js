module.exports = {
    showIndexPage(req, res) {
        //显示首页页面
        res.render('index', {
            islogin: req.session.islogin,
            //如果保存了登录状态，
            // 则通过req.session.islogin
            // 获取到的登录状态为true,
            // 如果没有保存登录状态，
            // 则获取到额req.session.islogin是一个undefined
            user: req.session.user
                //将登录人的信息渲染给页面
        });
    }
}