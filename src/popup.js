google.load("feeds", "1");

function initialize() {

    var feed = new google.feeds.Feed("https://groups.google.com/forum/feed/devcongress/topics/atom.xml?num=15");
    // we only want 10 articles. TODO: implement load more functionality
    feed.setNumEntries(10);
    //var count = 1;
    // check if feed entry is a weekly roundup article
    function is_roundup(entryTitle) {
        var re = /^(?=.*\bWeekly\b)(?=.*\News\b).*$/;
        return entryTitle.match(re);
    };
    // load group feed
    feed.load(function (result) {
        if (!result.error) {
            var container = document.getElementById("inner");
            var html = "";

            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                topic = "<h5>" + "<a href='" + entry.link + "'>" + entry.title + "</a></h5><div id=\"name\">Post by: " + entry.author + "</div>";

                var div = document.createElement("div");
                // if feed entry is a weekly roundup article, higlight bg
                if (null != is_roundup(entry.title)) {
                    div.className = "weekly-roundup";
                }
                div.innerHTML = topic;
                container.appendChild(div);
            }
        }
    });
}

google.setOnLoadCallback(initialize);