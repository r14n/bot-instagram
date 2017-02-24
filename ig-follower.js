var timeDelay = 20000;
var useRandomTimeDelay = false;
var minRandomTimeDelay = 9000;
var maxRandomTimeDelay = 30000;
var maxAcctQueueLength = 100;
var acctsToFollow = [];
var acctsInQueue = [];
var acctsFollowed = [];
var counter = 0;

function init() {
    var s = document.createElement('script');
    s.setAttribute('src', '//code.jquery.com/jquery.js');
    document.getElementsByTagName('body')[0].appendChild(s);

    setTimeout(followAll, 3000);

    setTimeout(keepItScrolling, 3000);

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollItDown() {
    $('._4gt3b').scrollTop(99999999999999999999);
}

function keepItScrolling() {
    setInterval(scrollItDown, 5000);
}

function getName(self) {

    var theirName = '';

    theirName = $(self).parents('._cx1ua').find('a').text();

    if (theirName == '') {
        theirName = $(self).parents('._cx1ua').find('._2uju6').text();
    }

    return theirName;

}

function followAll() {

    $('._cx1ua button:contains("Follow")').each(function(index) {

        var self = this;

        if ($(self).text() != 'Follow') return true;

        var acctNameFromDOM = getName(self);

        if ($.inArray(acctNameFromDOM, acctsToFollow) > -1) return true;
        //if ($.inArray(acctNameFromDOM, acctsInQueue) > -1) return true;
        if ($.inArray(acctNameFromDOM, acctsFollowed) > -1) return true;

        acctsToFollow.push(acctNameFromDOM);

    });

    //if (acctsInQueue.length < maxAcctQueueLength) {
    //$.each(acctsToFollow, function(i, val) {

    var acctName = acctsToFollow[0];

    //if ($.inArray(acctName, acctsInQueue) > -1) return true;
    //if ($.inArray(acctName, acctsFollowed) > -1) return true;

    var $$button = $('[title="' + acctName + '"]').parents('._cx1ua').find('button:contains("Follow")');

    if ($$button.text() == 'Follow') {
        //setTimeout(function() {

        $$button.click();

        console.log('Followed ' + acctName);

        acctsToFollow.splice($.inArray(acctName, acctsToFollow), 1);

        //acctsInQueue.splice($.inArray(acctName, acctsInQueue), 1);

        acctsFollowed.push(acctName);

        //}, counter * timeDelay);

        // console.log('will follow ' + acctName + ' in ' + ((counter * timeDelay) / 60000) + ' minutes (' + ((counter * timeDelay) / 3600000) + ' hours)...');

        //acctsInQueue.push(acctName);

        counter++;

        // return false;
    }

    //});

    //  }

    //console.log(acctsToFollow.length + ' accounts to follow, ' + acctsInQueue.length + ' accounts in queue, ' + acctsFollowed.length + ' accounts followed');
    console.log(acctsToFollow.length + ' accounts to follow, ' + acctsInQueue.length + ' accounts in queue, ' + acctsFollowed.length + ' accounts followed');

    if (useRandomTimeDelay == true) {
    	timeDelay = getRandomInt(9,13) * 1000;
    }

    setTimeout(followAll, timeDelay);

    console.log('waiting ' + (timeDelay / 1000) + ' seconds...');

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

            console.log('will unfollow ' + getName(self) + ' in ' + (counter * timeDelay) + ' seconds...');

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
