$(function() {

  // Read a page's GET URL variables and return them as an associative array.
  function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  var params = getUrlVars();

  // i18next options
  var i18nextOpts = {
    fallbackLng: 'en',
  };

  // Get language from query string
  var lang = params['lang'];
  if (lang) {
    i18nextOpts['lng'] = lang;
    $('.language-list li[data-key="en"]').removeClass("selected");
    $('.language-list li[data-key="' + lang + '"]').addClass("selected");
  }

  console.log(i18nextOpts);

  // use plugins and options as needed, for options, detail see
  // http://i18next.com/docs/
  i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init(i18nextOpts, function(err, t) {
      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $);
      // start localizing, details:
      // https://github.com/i18next/jquery-i18next#usage-of-selector-function
      $(document.body).localize();
    });

  $(".tit").on("click", function() {
    $(this).siblings(".cont").toggleClass("contShow");
  })
})
