$(function() {
    $(document).on("keyup", "#letters", function () {
      let $capWords = $("#cap-words");
      $capWords.empty();
      let cleanedUpValue = this.value.toLowerCase().replace(/[^a-z ]/g, "");
      let words = cleanedUpValue.split(' ');
      for (j = 0; j < words.length; j++) {
        let $capWord = $("<div class='cap-word'></div>")
        $capWords.append($capWord);
        let letters = words[j].split('');
        for (i = 0; i < letters.length; i++) {
          let letter = letters[i];
          $capLetter = $("<img class='cap-letter' src='img/letters/" + letter + ".png'>");
          $capWord.append($capLetter);
        }
        let percentWidth = (100 / letters.length).toString() + "%";
        $capWord.children(".cap-letter").css("width", percentWidth);
        if (letters.length > 26) {
          $capWord.children(".cap-letter").css("padding", "0 4px");
        } else if (letters.length > 16) {
          $capWord.children(".cap-letter").css("padding", "0 9px");
        } else if (letters.length > 8) {
          $capWord.children(".cap-letter").css("padding", "0 15px");
        } else {
          $capWord.children(".cap-letter").css("padding", "0 30px");
        }
      }
    });
});
