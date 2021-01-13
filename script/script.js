var typewriteElements = [];
var skip = -1;
function onloadHomepage() {
  //type in nihonese
  var pageTitle = document.getElementById("pageTitle");
  var string = pageTitle.innerHTML;
  pageTitle.innerHTML = "";
  typewrite(string,pageTitle,100,true);
}
function onloadPage1() {
  onload();
  Table.createTables("katakana",document.getElementById("katakanaChartParent"));
  Table.createTables("hiragana",document.getElementById("hiraganaChartParent"));
}
function onloadPage2() {
  onload();
  Exercise.initialize();
  processWords();
  document.addEventListener("keypress", function(event) {
    if (parseInt(event.key) < 6 && Exercise.currentProblem.type == "rapid") {
      document.getElementById("rapidExercise").children[document.getElementById("rapidExercise").children.length - 1].children[event.key - 1].click();
    } if (Exercise.currentProblem.type == "write") {
      if (event.code == "Space" || event.code == "Enter") {
        //terrible bit of code that is completely tied to Exercise.writeValidate() and really should just be there
        if (Exercise.answer.length == Exercise.correctAnswer.length - 1) {
          document.getElementById("writeProblem").children[0].innerHTML = "Press enter/space again to go to the next problem.";
        }
        if (Exercise.answer.length < Exercise.correctAnswer.length) {
          Exercise.writeValidate();
        } else if (Exercise.answer.length == Exercise.correctAnswer.length) {
          Exercise.randomProblem();
        }
      } else {
        document.getElementById("writeInput").focus();
      }
    }
  });
}
function onloadPage3() {
  onload();
}
function onload() {
  var pageTitle = document.getElementById("pageTitle");
  var string = pageTitle.innerHTML;
  typewrite(string,pageTitle,75);
}
function capitalize(text) {
  text = text[0].toUpperCase() + text.substring(1);
  return text;
}
function toggle(id) {
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
function onload404() {
  var faces = [
    ":P",":p",":/","D    :",":I",":|",":3",">:3",":<"
  ]
  document.getElementById("errorFace").innerHTML = faces[randNum(faces.length - 1)];
}
function no() {
  var faces = [
    ":O",":0",":()","]:<","._.","(o-_-o)","(*/_＼)","(„ಡωಡ„)","(ノ_<。)","D:<","=(","'_'","+=+","(￢_￢;)","(；￣Д￣)	","(；⌣̀_⌣́)	","(」°ロ°)」","(￣ヘ￣)","」＞＜)」","o(>< )o","(＞ｍ＜)"
  ]
  document.getElementById("errorFace").innerHTML = faces[randNum(faces.length - 1)];
}
function weightedRandom(probabilityArray) {
  //taken from We Do It Better than Icarus Ever Could (basic script.js);
  var max = 0;
  var index;
  for (var i = 0; i < probabilityArray.length; i++) {
    max += parseInt(probabilityArray[i]);
  }
  var randomRoll = randNumFloat(max);
  var threshold = probabilityArray[0];
  for (var index = 0; index < probabilityArray.length; index++) {
    if (randomRoll < threshold) {
      return index;
    } else {
      threshold += probabilityArray[index + 1];
    }
  }
}
function typewrite(string,element,speed = 75,preserveWidth = false,specials) {
  if (preserveWidth) {
    element.style.width = element.clientWidth + "px";
  }
  element.innerHTML = string[0];
  string = string.substr(1);
  typewriteElements.push(
    {
      element:element,
      string:string,
      skip:-1
    }
  );
  var typewriteInterval = setInterval(function() {
    for (var i = 0; i < typewriteElements.length; i++) {
      var dataObject = typewriteElements[i];
      if (dataObject.string.length >= 1) {
        if (dataObject.string[0] == ".") {
          if (dataObject.skip == -1) {
            dataObject.skip = 2;
          } else if (dataObject.skip > 0) {
            dataObject.skip--;
          } else {
            dataObject.element.innerHTML += dataObject.string[0];
            dataObject.string = dataObject.string.substr(1);
          }
        } else if (dataObject.string[0] == "$") {
          dataObject.element.innerHTML += specials[0];
          specials.shift();
          dataObject.string = dataObject.string.substr(1);
        } else {
          dataObject.element.innerHTML += dataObject.string[0];
          dataObject.string = dataObject.string.substr(1);
        }
      } else {
        typewriteElements.splice(i,1);
      }
    }
    if (typewriteElements.length <= 0) {
      clearInterval(typewriteInterval)
    }
  },speed);
}
function detectScroll() {
  var body = document.getElementById("body");
  var y = body.scrollTop;
}
function randNum(max) {
  return Math.round(Math.random() * max);
}
function randNumFloat(max) {
  return Math.random() * max;
}
function processWords() {
  var arrayWordList = rawWordList.split("\n");
  var wordTypes = [
    "verb",[3],
    "suru verb/adverb",[5,4],
    "proper noun",[1],
    "pronoun",[0],
    "number",[1,2],
    "noun/suru verb",[1,5],
    "noun/no adj",[1,2],
    "noun/na adj",[1,2],
    "noun/adverb",[1,4],
    "noun",[1],
    "na adj/adverb",[2,4],
    "na adj",[2],
    "i adj",[2],
    "expression/i adj",[2],
    "adverb",[4]
  ]
  for (var i = 0; i < arrayWordList.length; i++) {
    var rawWordObject = arrayWordList[i].split(",");
    var wordObject = {
      kanji:rawWordObject[0],
      reading:rawWordObject[1],
      politeForm:rawWordObject[2],
      meaning:rawWordObject[3],
      meaningTwo:rawWordObject[4],
      wordType:rawWordObject[5],
      note:rawWordObject[6],
      romaji:rawWordObject[8],
      katakanaReading:rawWordObject[9]
    }
    var index = -1;
    for (var j = 0; j < wordTypes.length; j += 2) {
      if (wordObject.wordType == wordTypes[j]) {
        index = wordTypes[j + 1];
        break;
      }
    }
    if (index != -1) {
      for (var j = 0; j < index.length; j++) {
        groupedWordList[index[j]].push([
          wordObject.meaning,
          wordObject.romaji,
          wordObject.katakanaReading,
          wordObject.reading
        ]);
      }
    }
    arrayWordList[i] = wordObject;
  }
  wordList = arrayWordList;
}
class Table {
  //display related
  static highlightElement(element) {
    var series = element.parentElement.parentElement.getAttribute("data-series");
    var syllable = Table.getSyllableFromAllDataWithSymbol(element.innerHTML,characterData[series]);
    //darken element
    if (series == "hiragana") {
      if (Table.currentSelectedHiragana != undefined) {
        Table.currentSelectedHiragana.style.backgroundColor = "";
      }
      Table.currentSelectedHiragana = element;
      element.style.backgroundColor = "rgb(240,240,240)";
    } else {
      if (Table.currentSelectedKatakana != undefined) {
        Table.currentSelectedKatakana.style.backgroundColor = "";
      }
      Table.currentSelectedKatakana = element;
      element.style.backgroundColor = "rgb(240,240,240)";
    }
    //display the data
    document.getElementById(series + "CharacterDisplay").innerHTML = syllable.symbol;
    document.getElementById(series + "CharacterSyllable").innerHTML = syllable.syllable;
    document.getElementById(series + "CharacterNote").innerHTML = syllable.note;
  }
  //table-making related
  static createTables(series,parent) {
    var data = characterData[series];
    Table.createMainTable(data[0],parent,series,5);
    Table.createSimpleTable(data[2],parent,series,5);
    Table.createSimpleTable(data[1],parent,series,5);
    Table.createSimpleTable(data[3],parent,series,3);
  }
  //headers should be TEXT
  //rows should be an Array of SyllableObject Arrays (array of rows of syllables, basically)
  static createTable(headers,rows,series) {
    //create table
    var table = document.createElement("table");
    table.className = "generatedTable";
    table.setAttribute("data-series",series);
    //create header row
    var row = document.createElement("tr");
    for (var i = 0; i < headers.length; i++) {
      row.appendChild(Table.createHeaderElement(headers[i]));
    }
    table.appendChild(row);
    //create the rest of the rows
    for (var i = 0; i < rows.length; i++) {
      row = document.createElement("tr");
      for (var j = 0; j < rows[i].length; j++) {
        if (j == rows[i].length - 1) {
          row.appendChild(Table.createHeaderElement(rows[i][j].syllable,series,true));
        } else {
          row.appendChild(Table.createContentElement(rows[i][j].symbol,series));
        }
      }
      table.appendChild(row);
    }
    return table;
  }
  static createSimpleTable(serieses,parent,series,vowelCount) {
    if (vowelCount == 5) {
      serieses = [
        Table.getSeries("a",serieses),
        Table.getSeries("i",serieses),
        Table.getSeries("u",serieses),
        Table.getSeries("e",serieses),
        Table.getSeries("o",serieses)
      ]
      var vowels = ["a","i","u","e","o"];
      for (var i = 0; i < vowels.length; i++) {
        serieses[i].push(new SyllableObject(vowels[i]));
      }
    } else {
      serieses = [
        Table.getSeries("a",serieses),
        Table.getSeries("u",serieses),
        Table.getSeries("o",serieses)
      ]
      var vowels = ["a","u","o"];
      for (var i = 0; i < vowels.length; i++) {
        serieses[i].push(new SyllableObject(vowels[i]));
      }
    }
    var headers = [];
    for (var i = 0; i < serieses[0].length - 1; i++) {
      headers.push(serieses[0][i].syllable.substr(0, serieses[0][i].syllable.length - 1) + "-");
    }
    var table = Table.createTable(headers,serieses,series);
    parent.appendChild(table);
  }
  static createMainTable(array,parent,series) {
    var serieses = [
      Table.getSeries("a",array),
      Table.getSeries("i",array),
      Table.getSeries("u",array),
      Table.getSeries("e",array),
      Table.getSeries("o",array)
    ];
    //add n, the annoying exception
    serieses[0].unshift(Table.getSyllable("n",array));
    //add nothings to fill in the n gaps
    for (var i = 1; i < serieses.length; i++) {
      serieses[i].unshift(new SyllableObject("",""));
    }
    //add vowels at the end
    var vowels = ["a","i","u","e","o"];
    for (var i = 0; i < vowels.length; i++) {
      serieses[i].push(new SyllableObject(vowels[i]));
    }
    //create headers from a syllables
    var headers = ["n"];
    for (var i = 1; i < serieses[0].length - 1; i++) {
      headers.push(serieses[0][i].syllable.substr(0, serieses[0][i].syllable.length - 1) + "-");
    }
    var table = Table.createTable(headers,serieses,series);
    parent.appendChild(table);
  }
  static createHeaderElement(content,leftHeader = false) {
    var header = document.createElement("th");
    header.innerHTML = content;
    if (leftHeader) {
      header.className = "leftHeader";
    }
    return header;
  }
  static createContentElement(content,series) {
    var contentElement = document.createElement("td");
    contentElement.innerHTML = content;
    if (content != "") {
      contentElement.onclick = function() {
        Table.highlightElement(this);
      };
    } else {
      contentElement.className = "emptySquare";
    }
    return contentElement;
  }
  static getSyllable(syllable,array) {
    var syllableObject;
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] == syllable) {
        syllableObject = new SyllableObject(array[i][0],array[i][1],array[i][2]);
      }
    }
    return syllableObject;
  }
  static getSyllableWithSymbol(syllable,array) {
    var syllableObject;
    for (var i = 0; i < array.length; i++) {
      if (array[i][1] == syllable) {
        syllableObject = new SyllableObject(array[i][0],array[i][1],array[i][2]);
      }
    }
    return syllableObject;
  }
  static getSyllableFromAllDataWithSymbol(symbol,dataArray) {
    var syllableObject;
    for (var i = 0; i < dataArray.length; i++) {
      var testSyllable = Table.getSyllableWithSymbol(symbol,dataArray[i]);
      if (testSyllable != undefined) {
        syllableObject = testSyllable;
        break;
      }
    }
    return syllableObject;
  }
  static getSeries(endingLetter,array) {
    var syllables = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i][0].length >= 1) {
        if (array[i][0][array[i][0].length - 1] == endingLetter) {
          var syllableObject = new SyllableObject(array[i][0],array[i][1],array[i][2]);
          if (syllableObject.note == "SKIP") {
            syllables.push(new SyllableObject("","",""));
          } else {
            syllables.push(syllableObject);
          }
        }
      }
    }
    return syllables;
  }
}
class SyllableObject {
  constructor(syllable,symbol,note = "") {
    this.syllable = syllable;
    this.symbol = symbol;
    this.note = note;
  }
}
class Exercise {
  static initialize() {
    this.options = {
      time:true,
      hiragana:true,
      katakana:true,
      japaneseTyping:true,
      rapidRomaji:true,
      rapid:{type:"rapid",enabled:true,chance:70},
      translate:{type:"translate",enabled:false,chance:15},
      write:{type:"write",enabled:true,chance:30}
    }
    this.characterList = [[...characterData.katakana],[...characterData.hiragana]];
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < this.characterList[i].length; j++) {
        for (var k = 0; k < this.characterList[i][j].length; k++) {
          if (this.characterList[i][j][k][1] == "" || this.characterList[i][j][k][2] == "SKIP") {
            this.characterList[i][j].splice(k,1);
            k--;
          }
        }
      }
    }
    this.wordList = [...wordList];
    var ratios = document.getElementsByClassName("ratio");
    for (var i = 0; i < ratios.length; i++) {
      ratios[i].addEventListener("input", function (e) {
        Exercise.updatePercentage(this);
      });
    }
  }
  static problem(element) {
    var type = element.id;
    var ratioCounterpart = document.getElementById("chance" + capitalize(type));
    if (this.options[type].enabled) {
      this.options[type].enabled = false;
      ratioCounterpart.style.display = "none";
      element.className = "clickable clickableOption unchosen";
    } else {
      this.options[type].enabled = true;
      ratioCounterpart.style.display = "block";
      element.className = "clickable clickableOption";
    }
    Exercise.updatePercentage(ratioCounterpart.children[1]);
  }
  static option(element) {
    var type = element.id;
    if (this.options[type]) {
      this.options[type] = false;
      element.children[1].children[0].innerHTML = "Enable";
      element.className = "clickable clickableOption unchosen";
    } else {
      this.options[type] = true;
      element.children[1].children[0].innerHTML = "Disable";
      element.className = "clickable clickableOption";
    }
  }
  static updatePercentage(element) {
    if (isNaN(element.value) || parseInt(element.value) <= 0) {
      element.style.backgroundColor = "rgba(255,0,0,0.3)";
      this.options[element.parentElement.id.substring(6).toLowerCase()].chance = "invalid";
      return 0;
    }
    element.style.backgroundColor = "";
    this.options[element.parentElement.id.substring(6).toLowerCase()].chance = element.value;
    var problemTypes = ["rapid","translate","write"];
    var total = 0;
    var totalBlank = 0;
    var problemType;
    for (var i = 0; i < problemTypes.length; i++) {
      problemType = this.options[problemTypes[i]];
      if (problemType.enabled) {
        total += parseInt(problemType.chance);
      } else {
        totalBlank++;
      }
    }
    document.getElementById("total").innerHTML = total;
    if (totalBlank == problemTypes.length) {
      document.getElementById("exerciseRatiosParent").style.display = "none";
    } else {
      document.getElementById("exerciseRatiosParent").style.display = "block";
    }
  }
  static warning(text) {
    var warningElement = document.createElement("p");
    warningElement.className = "warning";
    warningElement.innerHTML = text;
    document.getElementById("warnings").appendChild(warningElement);
  }
  static beginExercise() {
    //validate if options are good to start
    document.getElementById("warnings").innerHTML = "";
    var canStart = true;
    if (!this.options.hiragana && !this.options.katakana) {
      Exercise.warning("Cannot start without any kana enabled.");
      canStart = false;
    }
    if (!this.options.rapid.enabled && !this.options.translate.enabled && !this.options.write.enabled) {
      Exercise.warning("Cannot start when all problem types are disabled.")
      canStart = false;
    }
    if (this.options.rapid.chance == "invalid" && this.options.rapid.enabled || this.options.translate.chance == "invalid" && this.options.translate.enabled || this.options.write.chance == "invalid" && this.options.write.enabled) {
      Exercise.warning("Cannot start when problem type chances are invalid.")
      canStart = false;
    }
    if (canStart) {
      this.answers = [];
      setTimeout(function() {
        document.getElementById("sectionOne").style.display = "none";
      },1000);
      document.getElementById("sectionOne").style.opacity = "0";
      document.getElementById("body").style.overflowY = "hidden";
      document.getElementById("problemParent").style.opacity = "1";
      document.getElementById("problemParent").style.pointerEvents = "all";
      this.randomProblem();
    }
  }
  static randomProblem() {
    var problems = [];
    var probabilityArray = [];
    var optionKeys = Object.keys(this.options);
    for (var i = optionKeys.length - 5; i < optionKeys.length; i++) {
      var problem = this.options[optionKeys[i]];
      if (problem.enabled) {
        probabilityArray.push(parseInt(problem.chance));
        problems.push(problem);
      }
    }
    this.currentProblem = problems[weightedRandom(probabilityArray)];
    var problemElements = document.getElementById("problemParent").children;
    for (var i = 0; i < problemElements.length; i++) {
      problemElements[i].style.display = "none";
    }
    Exercise[this.currentProblem.type]();
  }
  static validate(answer) {
    if (answer == this.correctAnswer) {
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(115,255,15,0.3)";
      this.answers.push({
        correct:true,
        answered:answer,
        correct:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    } else {
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(255,60,60,0.3)";
      this.answers.push({
        correct:false,
        answered:answer,
        correct:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    }
    this.timeout = setTimeout(function(){
      document.getElementById("problemParent").style.backgroundColor = "";
    },300);
  }
  static rapid() {
    document.getElementById("rapidExercise").style.display = "block";
    var randomCharacter = this.characterList;
    if (!this.options.hiragana) {
      var kanaIndex = 0;
    } else if (!this.options.katakana) {
      var kanaIndex = 1;
    } else {
      var kanaIndex = randNum(randomCharacter.length - 1);
    }

    randomCharacter = randomCharacter[kanaIndex];
    var familyIndex = randNum(randomCharacter.length - 1);
    randomCharacter = randomCharacter[familyIndex];
    var characterIndex = randNum(randomCharacter.length - 1);
    var choosable = [...this.characterList[kanaIndex][familyIndex]];
    if (this.options.rapidRomaji) {
      var characterType = randNum(1);
    } else {
      var characterType = 0;
    }
    randomCharacter = randomCharacter[characterIndex];
    document.getElementById("rapidCharacter").innerHTML = randomCharacter[characterType];

    if (characterType == 1) {
      document.getElementById("instruction").innerHTML = "Which reading matches the following character?";
      characterType = 0;
    } else {
      document.getElementById("instruction").innerHTML = "Which character has the following reading?";
      characterType = 1;
    }

    this.correctAnswer = randomCharacter[characterType];
    choosable.splice(characterIndex,1);

    var choices = document.getElementById("rapidExercise").children;
    var randomChoices = [this.correctAnswer];
    choices = choices[choices.length - 1].children;
    for (var i = 1; i < choices.length; i++) {
      characterIndex = randNum(choosable.length - 1);
      randomChoices.push(choosable[characterIndex][characterType]);
    }
    for (var i = 0; i < choices.length; i++) {
      var index = randNum(randomChoices.length - 1);
      choices[i].children[0].innerHTML = randomChoices[index];
      randomChoices.splice(index,1);
    };

  }
  static write() {
    document.getElementById("writeProblem").style.display = "block";
    document.getElementById("writeProblem").children[0].innerHTML = "Type the romaji version of the highlighted word.";
    //select random sentence type
    if (!this.options.hiragana) {
      var kanaIndex = 0;
    } else if (!this.options.katakana) {
      var kanaIndex = 1;
    } else {
      var kanaIndex = randNum(1);
    }
    var randomSentence = sentenceTypes[kanaIndex];
    randomSentence = randomSentence[randNum(randomSentence.length - 1)];
    //split it apart at the slashes (/'s)
    randomSentence = randomSentence.split("/");
    //remove all ""'s
    for (var i = 0; i < randomSentence.length; i++) {
      if (randomSentence[i] == ""|| randomSentence[i] == " ") {
        randomSentence.splice(i,1);
      }
    }
    for (var i = 0; i < randomSentence.length; i++) {
      if (randomSentence[i][0] == "*") {
        if (randomSentence[i].substring(1) == "verb") {
          if (randNum(1) == 0) {
            //suru verb, 5
            randomSentence[i] = groupedWordList[5][randNum(groupedWordList[5].length - 1)];
            if (kanaIndex == 0) {
              randomSentence.splice(i + 1,0,"する");
            } else {
              randomSentence.splice(i + 1,0,"スル");
            }
          } else {
            //verb, 3
            randomSentence[i] = groupedWordList[3][randNum(groupedWordList[3].length - 1)]
          }
        } else {
          var key = [["pronoun","noun","adj","adverb"],[0,1,2,4]];
          var index = 1;
          for (var j = 0; j < key[0].length; j++) {
            if (key[0][j] == randomSentence[i].substring(1)) {
              index = key[1][j];
              break;
            }
          }
          randomSentence[i] = groupedWordList[index][randNum(groupedWordList[index].length - 1)];
        }
      } else {
        //locate the reference that equals the word
        var reference = ["error","eroru","エロル","えろる"]

        for (var j = 0; j < wordReference.length; j++) {
          if (wordReference[j][3 - kanaIndex] == randomSentence[i].trim()) {
            reference = wordReference[j];
            break;
          }
        }
        randomSentence[i] = reference;
      }
    }
    this.correctAnswer = [];
    this.answer = [];

    var wordParent = document.getElementById("wordParent");
    wordParent.innerHTML = "";
    for (var i = 0; i < randomSentence.length; i++) {
      var word = document.createElement("p");
      word.innerHTML = randomSentence[i][randomSentence[i].length - 1 - kanaIndex];
      wordParent.appendChild(word);
      this.correctAnswer.push(randomSentence[i][1]);
    }
    wordParent.children[0].className = "currentWord"


    //keep track of the romaji version of it (set it to correctAnswer)


    //generate a random sentence then user will have to input romaji
    //preferrably, while the user is typing, check green which ones were finished typed, and check yellow the word that the player is currently on
    //after done, show which words were detected as mistakes
  }
  static writeValidate() {
    var input = document.getElementById("writeInput");
    var answer = input.value.toLowerCase();

    if (Exercise.answer.length < Exercise.correctAnswer.length - 1) {
      document.getElementById("wordParent").children[Exercise.answer.length + 1].className = "currentWord";
    }

    this.answer.push(answer);

    if (this.correctAnswer[this.answer.length - 1] == answer) {
      document.getElementById("wordParent").children[this.answer.length - 1].className = "finishedWord uncurrent";
    } else {
      if (this.verifyOu(answer,this.correctAnswer[this.answer.length - 1])) {
        document.getElementById("wordParent").children[this.answer.length - 1].className = "finishedWord uncurrent";
      } else {
        document.getElementById("wordParent").children[this.answer.length - 1].className = "failedWord uncurrent";
      }
    }

    input.value = "";
  }
  static translate() {
    console.log("translate");
    this.rapid;
  }
  static verifyOu(text,comparison) {
    text = [text.toLowerCase().split("oo"),text.toLowerCase().split("ou")];
    comparison = [comparison.toLowerCase().split("ou"),comparison.toLowerCase().split("oo")];
    var equal = [true,true];
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < text[i].length; j++) {
        if (text[i][j] != comparison[i][j]) {
          equal[i] = false;
          break;
        }
      }
    }
    return equal[0] || equal[1];
  }
}
