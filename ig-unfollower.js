var s = document.createElement('script');
s.setAttribute('src', '//code.jquery.com/jquery.js');
document.getElementsByTagName('body')[0].appendChild(s);

var timeDelay = 40000;

function getName(self) {

    var theirName = '';

    theirName = $(self).parents('._cx1ua').find('a').text();

    if (theirName == '') {
        theirName = $(self).parents('._cx1ua').find('._2uju6').text();
    }

    return theirName;

}

function followAll() {
    var counter = 0;
    $('._cx1ua button:contains("Follow")').each(function(index) {

        var self = this;

        if ($(self).text() == 'Follow') {
            setTimeout(function() {

                $(self).click();

            	console.log(counter + '. followed ' + getName(self));    

            }, counter * timeDelay);

			console.log('will follow ' + getName(self) + ' in ' + (counter*timeDelay) + ' seconds...');

            counter++;
        }

    });

    console.log('ready to follow ' + counter + ' accounts');
}


function unFollowAll() {
    var counter = 0;
    $('._cx1ua button:contains("Following")').each(function(index) {

        var self = this;


        if ($(self).text() == 'Following') {
            setTimeout(function() {
                $(self).click();

                console.log(counter + '. unfollowed ' + getName(self));

            }, counter * timeDelay);

            console.log('will unfollow ' + getName(self) + ' in ' + (counter*timeDelay) + ' seconds...');

            counter++;
        }

    });

    console.log('ready to unfollow ' + counter + ' accounts');

}

function clearAllTimeouts() {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}
