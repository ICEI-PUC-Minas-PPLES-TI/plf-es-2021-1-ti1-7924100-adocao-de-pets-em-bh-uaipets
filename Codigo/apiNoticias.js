$(document).ready(function () {

  let url = "https://gnews.io/api/v4/search?q=cuidados+pets&country=br&language=pt&token=3c3efb34a21c7f5cee5e32235a91093b";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        output += `
        <style>
        .coluna {
          float: left;
          width: auto;
          display: none;
          margin: 0 16px;
        }

        </style>

          <div class="coluna col l4 m6 s12">
            <div class="fixer-container">
              <div class="card medium hoverable">
                <div class="card-image">
                  <img src="${latestNews[i].image}" class="img-thumbnail" alt="${latestNews[i].title}" style="width: 400px; height: 200px; object-fit: cover;">
                </div>
                <div class="card-content" style="padding: 20px;>
                  <h5 class="truncate"><a href="${latestNews[i].url}" title="${latestNews[i].title}" style="color: black; font-weight: bold;">${latestNews[i].title}</a></h5>
                  <p></p>
                  <p><b>Fonte</b>: ${latestNews[i].source.name} </p>
                  <p><b>Publicado em</b>: ${latestNews[i].publishedAt} </p>
                  
                  <div class="card-action">
                    <a href="${latestNews[i].url}" target="_blank" class="btn" style="color: white; background-color: #955AF5; display: flex; justify-content: center;">Ler mais >></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      $(document).ready(function () {
        $('.coluna').slice(0, 3).show();
        $('#load').on('click', function () {
          $('.coluna:hidden').slice(0, 3).slideDown();
        });
      });

      if (output !== "") {
        $("#newsResults").html(output);
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Ocorreu um erro</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});