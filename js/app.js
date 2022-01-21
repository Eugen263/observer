window.addEventListener('load', function() {
    var container = document.getElementsByClassName('container_box');
    function get_rand(min, max) {
        var min = Math.ceil(min);
        var max = Math.floor(max);
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }

    for (i = 0; i <= container.length-1; i++) {
        var rand_mar = get_rand(10, 100);
        if (i%2) {
            container[i].style.background = '#2f2f2f';
            container[i].style.color = '#ffffff';
            if (document.getElementById('body').offsetWidth > 425) {
                var cont_mar = container[i].offsetLeft - (rand_mar - 10);
                container[i].style.marginRight = cont_mar + 'px';
                container[i].style.paddingRight = rand_mar + 'px';
                var date_time = container[i].getElementsByClassName('post_date_time');
                if(date_time.length == 0) {
                    //
                } else {
                    date_time[0].style.border = '1px solid #fff';
                }
            } else {
                //
            }
        } else {
            container[i].style.background = '#ffffff';
            var cont_mar = container[i].offsetLeft - (rand_mar - 10);
            if (document.getElementById('body').offsetWidth > 425) {
                container[i].style.marginLeft = cont_mar + 'px';
                container[i].style.paddingLeft = rand_mar + 'px';
            } else {
                var post_box = container[i].getElementsByClassName('post_box')[0];
                if (post_box != undefined) {
                    post_box.style.marginLeft = '25%';
                }
            }
        }
    }

    var containers = document.getElementsByClassName('container_box');
    var wind_height = document.getElementsByTagName('html')[0].offsetHeight;
    var el_numb_arr = new Array ();
    var el_height = 0;
    for (i = 0; i < containers.length; i++) {
        if (containers[i].innerHTML == '//') {
            el_numb_arr.push(i);
            if (wind_height > el_height) {
                var elem_height = ((wind_height - el_height) / el_numb_arr.length) - 20;
                for (a = 0; a < el_numb_arr.length; a++) {
                    var el_numb = el_numb_arr[a];
                    containers[el_numb].style.height = elem_height + 'px';
                    containers[el_numb].innerHTML = '';
                };
            } else {
                for (a = 0; a < el_numb_arr.length; a++) {
                    var el_numb = el_numb_arr[a];
                    containers[el_numb].style.display = 'none';
                }
            }
        } else {
            if (i == 0) {
                var first = containers[i].offsetHeight - 24;
                el_height += first;
            } else {
                el_height += containers[i].offsetHeight;
            }
        }
    }

    if (this.window.location.pathname == '/channels.html') {
        var key_box = document.getElementsByClassName('channel_keywords');
        for(i = 0; i < key_box.length; i++) {
            var keywords = key_box[i].getElementsByClassName('chan_keyword');
            if (i%2) {
                for (a = 0; a < keywords.length; a++) {
                    keywords[a].style.backgroundColor = '#fff';
                    keywords[a].style.color = '#000'
                }
            }
        }

        var title_box = document.getElementsByClassName('channel_tit_box');
        for(i = 0; i < title_box.length; i++) {
            if (i%2) {
                var channel_update = title_box[i].getElementsByClassName('channel_update')[0];
                var channel_events = title_box[i].getElementsByClassName('channel_events')[0];
                channel_update.style.borderColor = '#fff';
                channel_events.style.borderColor = '#fff';
            }
        }
    }

    if (this.window.location.pathname == '/posts.html') {
        var container_arr = document.getElementsByClassName('container_box');
        for (i = 0; i < container_arr.length; i++) {
            var container = container_arr[i];
            var controls_comm = container.getElementsByClassName('posts_comm')[0];
            if (controls_comm != undefined) {
                controls_comm.addEventListener('mouseover', function(controls_comm){
                    this.style.opacity = '0.75';
                });

                controls_comm.addEventListener('mouseout', function(controls_comm){
                    this.style.opacity = '1';
                });
            }

            var controls_share = container.getElementsByClassName('posts_share')[0];
            if (controls_share != undefined) {
                controls_share.addEventListener('mouseover', function(controls_comm){
                    this.style.opacity = '0.75';
                });

                controls_share.addEventListener('mouseout', function(controls_comm){
                    this.style.opacity = '1';
                });
            }

            if (i%2) {
                //
            } else {
                var title_post = container.getElementsByClassName('posts_title')[0];
                if (title_post != undefined) {
                    title_post.style.color = '#000';
                }
            }
        }
    }

    var loader = document.getElementById('overflow');
    loader.style.display = 'none';

    var image_view = document.getElementsByClassName('full_image_overflow')[0];
    image_view.addEventListener('click', function() {
        image_view.style.display = 'none';
        var wind_scroll = document.getElementsByTagName('html')[0];
        wind_scroll.style.overflow = 'auto';
    });

    var image_post =  document.getElementsByClassName('post_img');
    for(i = 0; i < image_post.length; i++) {
        image_post[i].addEventListener('click', function(image_post) {
            var image_view = document.getElementsByClassName('full_image_overflow')[0];
            var bg_img = this.getAttribute('src');
            var img = image_view.getElementsByClassName('full_image')[0];
            img.src = bg_img;
            var wind_scroll = document.getElementsByTagName('html')[0];
            wind_scroll.style.overflow = 'hidden';
            image_view.style.top = wind_scroll.scrollTop + 'px';
            image_view.style.display = 'block';
        });
    }
});

window.addEventListener('resize', function() {
    window.location.reload();
});

window.addEventListener('load', function() {
    var menu_btn = document.getElementsByClassName('menu_btn')[0];
    menu_btn.addEventListener('click', function() {
        var menu_box = document.getElementsByClassName('menu_box')[0];
        var open = document.getElementsByClassName('menu_btn_open')[0];
        var close = document.getElementsByClassName('menu_btn_close')[0];
        var margin_top = -220;
        if (menu_box.style.display == '' || menu_box.style.display == 'none') {
            menu_box.style.marginTop = margin_top + 'px';
            menu_box.style.display = 'grid';
            var anim = setInterval(menu, 7);
            function menu() {
                if (margin_top >= -45) {
                    menu_box.style.marginTop = '-50px';
                    open.style.display = 'none';
                    close.style.display = 'block';
                    clearInterval(anim);
                } else {
                    menu_box.style.marginTop = margin_top + 'px';
                    margin_top += 5;
                }
            }
        } else {
            margin_top = -50;
            var anim = setInterval(menu, 7);
            function menu() {
                if (margin_top <= -220) {
                    menu_box.style.marginTop = '-220px';
                    open.style.display = 'block';
                    close.style.display = 'none';
                    menu_box.style.display = 'none';
                    clearInterval(anim);
                } else {
                    menu_box.style.marginTop = margin_top + 'px';
                    margin_top -= 5;
                }
            }
        }
    });
})