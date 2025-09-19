  function loadVideos() {
    $.ajax({
      url: `/api/videos`,
      method: "GET",
      success: function(videos) {
        const container = $("#videos");
        container.empty(); // clear old content

        videos.forEach(video => {
          const iframe = $("<iframe>", {
            height: "560",
            src: video.link,
            title: video.title,
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerpolicy: "strict-origin-when-cross-origin",
            allowfullscreen: true
          });
          container.append(iframe);
        });
      },
      error: function(xhr, status, error) {
        console.error("Error loading videos:", status, error);
      }
    });
  }

  $(document).ready(loadVideos);