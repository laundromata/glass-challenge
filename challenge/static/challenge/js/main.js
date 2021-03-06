// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function(e) {
    var href, link, newImg, url, yt_id, _i, _len, _ref, _results;

    $(".login").on("click", function(e) {
      return $("#modalLogin").modal();
    });
    $(".vote").on("click", function(e) {
      var dir, id, val;

      id = $(this).data("id");
      dir = $(this).data("dir");
      val = $("#challenge_" + id).text();
      if ($(this).hasClass("voted")) {
        $("[data-id=" + id + "]").removeClass("voted");
        if (dir === "up") {
          val = Number(val) - 1;
        } else if (dir === "down") {
          val = Number(val) + 1;
        }
        dir = "";
      } else {
        if ($("[data-id=" + id + "]").hasClass("voted")) {
          if (dir === "up") {
            val = Number(val) + 1;
          } else if (dir === "down") {
            val = Number(val) - 1;
          }
        }
        $("[data-id=" + id + "]").removeClass("voted");
        $(this).addClass("voted");
        if (dir === "up") {
          val = Number(val) + 1;
        } else if (dir === "down") {
          val = Number(val) - 1;
        }
      }
      $("#challenge_" + id).text(val);
      return $.get("vote", {
        challenge: id,
        dir: dir
      });
    });
    url = 'https://img.youtube.com/vi/';
    _ref = $(".yt_link");
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      link = _ref[_i];
      href = link.textContent;
      if (href !== "False") {
        yt_id = href.trim().match(/v=(\w+)/)[1];
        newImg = document.createElement('img');
        newImg.src = url + yt_id + "/default.jpg";
        newImg.className = "proof_thumb";
        $(link).parent().prepend(newImg);
        $(link).parent().parent().find(".challenge_content").addClass("challenge_content_thumb");
        _results.push($(link).parent().parent().find(".challenge_title").addClass("challenge_title_thumb"));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  });

}).call(this);
