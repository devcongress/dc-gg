    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("https://groups.google.com/forum/feed/devcongress/topics/atom.xml?num=15");
      feed.setNumEntries(10);
      var count = 1;
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("inner");
          var html = "";
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            topic = "<h5>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h5><div id=\"name\">Post by: " + entry.author + "</div>";
            var div = document.createElement("div");
	    div.innerHTML = topic;
            container.appendChild(div);            
          }
          document.write(html);
        }
      });
    }
    google.setOnLoadCallback(initialize);

