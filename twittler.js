

var twittler = function(){
        var loadFeed = function(e) {
          let $feed = $('.feed');
          $feed.html('');
          let index = e.length -1;
          while(index >= 0){
            var tweet = e[index];
            var $tweet = $('<div class="tweet"><span class="user"></span><div class="message"></div><div class="time"></div></div>');
//var tw = $tweet.children
            $tweet.children('.user').text('@' + tweet.user);
            $tweet.children('.message').text(tweet.message);
            $tweet.children('.time').text("posted at " + tweet.created_at);
            $tweet.appendTo($feed);

            index-= 1;
          }
        };
//var tweetWrapper = $('.showMoreTweets');
        var refresh = function() {
          $('.showMoreTweets').text('Refresh Feed');
          loadFeed(streams.home);
        }

        var displayUserTweets = function(user) {
         $('.showMoreTweets').text('Return to Main Feed');
         loadFeed(streams.users[user]);
        }
   
   return {
    refresh: refresh,
    displayUserTweets: displayUserTweets


   }
}();

  $(document).ready(function(){
      twittler.refresh();
      $('.showMoreTweets').on('click', twittler.refresh);
      $('.feed').on('click', '.tweet .user', function(event) {
      var user = $(this).text().slice(1);
      console.log(user);
      twittler.displayUserTweets(user);
  });

    });