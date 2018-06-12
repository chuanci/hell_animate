var request = document.querySelector('#hell-start').innerHTML;
let hellId;
if (localStorage.hellId) {
    hellId = localStorage.hellId;
}
/*$.ajax({
    url:"/person",
    data: {
        hellId
    },
    success: function(result) {
        $('.that-level').html(result.next)
        start()
    }});*/
    start()
    function start () {
        var settings = {
            "typingSpeed": 100,
            "cursorSpeed": 800,
            "cursorInfinity": true
        };
        $('.container').css({
            'height': window.innerHeight / 2 + 'px',
            'width': window.innerWidth / 4 * 3 + 'px',
            'margin-top': window.innerHeight / 4 + 'px'
        });
        var sleep = 700;
        var deleteSpeed = 50;
        var addSpeed = 100;

        var line1 = new Typing("line1", settings);
        line1.sleep(2000)
        .add("欢迎来到").sleep(sleep)
        .add("地狱").sleep(sleep)
        .setting({"typingSpeed": deleteSpeed}).delete()
        .setting({"typingSpeed": addSpeed}).add(`请依靠您所学的知识逃离这个地方`).sleep(sleep)
        .setting({"typingSpeed": deleteSpeed}).delete()
        .setting({"typingSpeed": addSpeed}).add(`我希望您在这里可以玩得开心,即使这里是....地狱`).sleep(sleep)
        .setting({"typingSpeed": deleteSpeed}).delete()
        .setting({"typingSpeed": addSpeed}).add(`请点击开始,进入第一关.`)
        .callback(function () {
            $('.button').animate({'opacity': 1}, function () {
                $('.button').on('click', function () {
                    if (window.i) {
                        return;
                    }
                    window.i = true;
                    line1.delete().add('你明明知道没有这么简单').sleep(sleep)
                    .delete()
                    .add('请你自己寻找入口吧.').sleep(sleep)
                    .delete()
                    .add('提示: 真正的入口')
                    .callback(function () {
                        $('.button').animate({'opacity': 0});
                        $('.statics').animate({'opacity': 1});
                    }).execute();
                });
            });
        }).execute();
    };
