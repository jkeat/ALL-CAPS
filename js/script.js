$(function() {
    $(document).on("keyup", "#letters", function () {
      var $capWords = $("#cap-words");
      $capWords.empty();
      var cleanedUpValue = this.value.toLowerCase().replace(/[^ a-z]/g, "").replace(/\s\s+/g, ' ');
      var words = cleanedUpValue.split(' ');
      for (j = 0; j < words.length; j++) {
        var $capWord = $("<div class='cap-word'></div>")
        $capWords.append($capWord);
        var letters = words[j].split('');
        for (i = 0; i < letters.length; i++) {
          var letter = letters[i];
          $capLetter = $("<img class='cap-letter' src='img/letters/" + letter + ".png'>");
          $capWord.append($capLetter);
        }
        var percentWidth = (100 / letters.length).toString() + "%";
        $capWord.children(".cap-letter").css("width", percentWidth);
        if (letters.length > 26) {
          $capWord.children(".cap-letter").addClass("letters-lvl-4");
        } else if (letters.length > 16) {
          $capWord.children(".cap-letter").addClass("letters-lvl-3");
        } else if (letters.length > 8) {
          $capWord.children(".cap-letter").addClass("letters-lvl-2");
        } else {
          $capWord.children(".cap-letter").addClass("letters-lvl-1");
        }
      }
    });
});
