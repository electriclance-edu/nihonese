var typewriteElements = [];
var currentEnabled = "";
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
      document.getElementById("rapidProblem").children[document.getElementById("rapidProblem").children.length - 1].children[event.key - 1].click();
    } else if (Exercise.currentProblem.type == "kanji") {
      if (Exercise.kanjiProblemType == "input") {
        if (event.code == "Space" || event.code == "Enter") {
          Exercise.kanjiValidate(document.getElementById("kanjiInput").value);
        } else {
          document.getElementById("kanjiInput").focus();
        }
      } else if (parseInt(event.key) < 6) {
        document.getElementById("kanjiChoices").children[event.key - 1].click();
      }
    } else if (Exercise.currentProblem.type == "write") {
      if (event.code == "Space" || event.code == "Enter") {
        //terrible bit of code that is completely tied to Exercise.writeValidate() and really should just be there
        if (Exercise.answer.length == Exercise.correctAnswer.length - 1) {
          document.getElementById("writeProblem").children[0].innerHTML = "Press enter/space again to go to the next problem.";
          Exercise.answers.push({
            answered:Exercise.answer,
            correct:Exercise.correctAnswer,
            problemType:Exercise.currentProblem
          });
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
function softToggle(id) {
  element = document.getElementById(id);
  if (element.style.opacity == "1") {
    element.style.opacity = "0.5";
    element.style.pointerEvents = "none";
  } else if (element.style.opacity == "0.5") {
    element.style.opacity = "1";
    element.style.pointerEvents = "all";
  }
}
function toggleExclusive(id) {
  element = document.getElementById(id);
  if (id == currentEnabled) {
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
    document.getElementById("leftSide").style.width = "100%";
    document.getElementById("rightSide").style.right = "-50%";
    currentEnabled = "";
  } else if (currentEnabled == "") {
    element.style.opacity = "1";
    element.style.pointerEvents = "all";
    currentEnabled = id;
    document.getElementById("leftSide").style.width = "50%";
    document.getElementById("rightSide").style.right = "0";
  } else {
    element.style.opacity = "1";
    element.style.pointerEvents = "all";
    document.getElementById(currentEnabled).style.opacity = "0";
    document.getElementById(currentEnabled).style.pointerEvents = "none";
    currentEnabled = id;
    document.getElementById("leftSide").style.width = "50%";
    document.getElementById("rightSide").style.right = "0";
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
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var oldElement = array[i];
      array[i] = array[j];
      array[j] = oldElement;
  }
  return array;
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
      wordType:rawWordObject[5],
      romaji:rawWordObject[8],
      katakanaReading:rawWordObject[9],
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
  //initialize() initializes any required attributes for the class Exercise
  static initialize() {
    this.options = {
      hiragana:true,
      katakana:true,
      rapidRomaji:true,
      kanjiRomaji:false,
      rapid:{type:"rapid",enabled:false,chance:60},
      write:{type:"write",enabled:false,chance:20},
      kanji:{
        type:"kanji",
        enabled:true,
        chance:10,
        types:{
          symbol:0,
          meaning:1,
          reading:2,
          type:3
        },
        prompt:[true,true,false,false],
        option:[true,true,true,false]
      }
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
    var ratios = document.getElementsByClassName("ratio");
    for (var i = 0; i < ratios.length; i++) {
      ratios[i].addEventListener("input", function (e) {
        Exercise.updatePercentage(this);
      });
    }
    this.currentProblem = "none";
  }
  //problem() deals with elements that activate or disable problemTypes.
  static problem(element) {
    var type = element.id;
    var ratioCounterpart = document.getElementById("chance" + capitalize(type));
    if (this.options[type].enabled) {
      this.options[type].enabled = false;
      ratioCounterpart.style.opacity = "0.5";
      ratioCounterpart.style.color = "rgb(150,150,150)";
      element.className = "clickable clickableOption unchosen";
    } else {
      this.options[type].enabled = true;
      ratioCounterpart.style.opacity = "1";
      ratioCounterpart.style.color = "";
      element.className = "clickable clickableOption";
    }
    Exercise.updatePercentage(ratioCounterpart.children[1]);
  }
  //option() deals with elements that activate or disable options. similar to problem()
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
  //updatePercentage() deals with the percentage inputs and verifies if they're good or not.
  static updatePercentage(element) {
    if (isNaN(element.value) || parseInt(element.value) <= 0) {
      element.style.backgroundColor = "rgba(255,0,0,0.3)";
      this.options[element.parentElement.id.substring(6).toLowerCase()].chance = "invalid";
      return 0;
    }
    element.style.backgroundColor = "";
    this.options[element.parentElement.id.substring(6).toLowerCase()].chance = element.value;
    var problemTypes = ["rapid","write"];
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
  //kanjiOption() is similar to option() but for the options related to the kanji exercise instead.
  static kanjiOption(element,group) {
    var type = element.children[1].innerHTML.toLowerCase();
    var index = this.options.kanji.types[type];

    if (this.options.kanji[group][index] == true) {
      this.options.kanji[group][index] = false;
      element.className = "clickable clickableOption unchosen";
    } else {
      this.options.kanji[group][index] = true;
      element.className = "clickable clickableOption";
    }
  }
  //warning() generates the red text that appears below the start exercise button whenever the options are invalid
  static warning(text) {
    var warningElement = document.createElement("p");
    warningElement.className = "warning";
    warningElement.innerHTML = text;
    document.getElementById("warnings").appendChild(warningElement);
  }
  //beginExercise() verifies if the exercise can begin, and if it can, hides the start screen and calls randomProblem() to truly begin the exercises.
  static beginExercise() {
    //validate if options are good to start
    document.getElementById("warnings").innerHTML = "";
    var canStart = true;
    if (!this.options.hiragana && !this.options.katakana) {
      Exercise.warning("Cannot start without any kana enabled.");
      canStart = false;
    }
    if (!this.options.rapid.enabled && !this.options.write.enabled && !this.options.kanji.enabled) {
      Exercise.warning("Cannot start when all problem types are disabled.")
      canStart = false;
    }
    if (this.options.rapid.chance == "invalid" && this.options.rapid.enabled || this.options.write.chance == "invalid" && this.options.write.enabled || this.options.kanji.chance == "invalid" && this.options.kanji.enabled) {
      Exercise.warning("Cannot start when problem type chances are invalid.")
      canStart = false;
    }
    if (this.options.kanji.enabled) {
      //if everything is disabled, then don't start
      if (this.options.kanji.prompt.every(function(bool){return bool == false})) {
        Exercise.warning("Cannot start with no enabled kanji prompts.")
        canStart = false;
      }
      if (this.options.kanji.option.every(function(bool){return bool == false})) {
        Exercise.warning("Cannot start with no enabled kanji options.")
        canStart = false;
      }
      //if there is only one enabled prompt and option, and that they're equal
      var enabledIndex = [-1,-1];
      var count = [0,0];
      for (var i = 0; i < this.options.kanji.prompt.length; i++) {
        if (this.options.kanji.prompt[i]) {
          enabledIndex[0] = i;
          count[0]++;
        }
      }
      for (var i = 0; i < this.options.kanji.option.length; i++) {
        if (this.options.kanji.option[i]) {
          enabledIndex[1] = i;
          count[1]++;
        }
      }
      if (count[0] == 1 && count[1] == 1) {
        if (enabledIndex[0] == enabledIndex[1]) {
          Exercise.warning("Cannot start when the only enabled kanji prompt and option are exactly the same.")
          canStart = false;
        }
      }
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
  //randomProblem() determines which problems can appear (aka those that are enabled in this.options) and chooses one with weightedRandom()
  static randomProblem() {
    var problems = [];
    var probabilityArray = [];
    var optionKeys = Object.keys(this.options);
    for (var i = optionKeys.length - 3; i < optionKeys.length; i++) {
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
  //rapidValidate() is used by the choice elements in the rapidProblem div, confirms if the answer given is correct, and starts a new problem if so
  static rapidValidate(answer) {
    if (answer == this.correctAnswer) {
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(115,255,15,0.3)";
      this.answers.push({
        correct:true,
        answered:answer,
        trueAnswer:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    } else {
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(255,60,60,0.3)";
      this.answers.push({
        correct:false,
        answered:answer,
        trueAnswer:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    }
    this.timeout = setTimeout(function(){
      document.getElementById("problemParent").style.backgroundColor = "";
    },300);
  }
  //rapid() deals with choice and prompt generation for the rapid exercises, along with displaying them
  static rapid() {
    document.getElementById("rapidProblem").style.display = "block";
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
      document.getElementById("rapidInstruction").innerHTML = "Which reading matches the following character?";
      characterType = 0;
    } else {
      document.getElementById("rapidInstruction").innerHTML = "Which character has the following reading?";
      characterType = 1;
    }

    this.correctAnswer = randomCharacter[characterType];
    choosable.splice(characterIndex,1);

    var choices = document.getElementById("rapidProblem").children;
    var randomChoices = [this.correctAnswer];
    choices = choices[choices.length - 1].children;

    if (randomCharacter[0] == "ji") {
      var jiExists = true;
    } else {
      var jiExists = false;
    }

    for (var i = 1; i < choices.length; i++) {
      characterIndex = randNum(choosable.length - 1);
      if (choosable[characterIndex][0] != "ji") {
        randomChoices.push(choosable[characterIndex][characterType]);
        choosable.splice(characterIndex,1);
      } else if (!jiExists) {
        jiExists = true;
        randomChoices.push(choosable[characterIndex][characterType]);
        choosable.splice(characterIndex,1);
      } else {
        i--;
      }
    }
    randomChoices = shuffleArray(randomChoices);

    for (var i = 0; i < choices.length; i++) {
      var index = randNum(randomChoices.length - 1);
      choices[i].children[0].innerHTML = randomChoices[index];
      randomChoices.splice(index,1);
    };

  }
  //write() deals with phrase generation and displaying that.
  static write() {
    document.getElementById("writeProblem").style.display = "block";
    document.getElementById("writeProblem").children[0].innerHTML = "Type the romaji version of the highlighted word.";
    //select random sentence type
    if (!this.options.hiragana) {
      var kanaIndex = 1;
    } else if (!this.options.katakana) {
      var kanaIndex = 0;
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
  }
  //writeValidate() deals with confirming if the entered text is equal to the current word in the current write exercise.
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
        var wordParent = document.getElementById("wordParent");
        wordParent.children[this.answer.length - 1].className = "failedWord uncurrent";
        wordParent.className = "wordParent expandedParent";

        var trueAnswer = document.createElement("p");
        trueAnswer.innerHTML = this.correctAnswer[this.answer.length - 1];
        wordParent.children[this.answer.length - 1].appendChild(trueAnswer);
      }
    }

    input.value = "";
  }
  //verifyOu() accepts two strings and returns true if the strings are exactly the same except for the ou and oo parts. eg. "bouze" and "booze" return true, "bour" and "boo" return false, "a" and "b" return false. basically a more complex == that ignores ous and oos
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
  //kanji() generates a kanji exercise and displays it
  static kanji() {
    document.getElementById("kanjiProblem").style.display = "block";
    document.getElementById("kanjiInput").value = "";
    document.getElementById("kanjiPrompt").parentElement.style.backgroundColor = "rgb(255,255,255)";
    //get kana index
    if (!this.options.hiragana) {
      var kanaIndex = 0; //katakana
    } else if (!this.options.katakana) {
      var kanaIndex = 1; //hiragana
    } else {
      var kanaIndex = randNum(1);
    }
    //pick prompt type
    var prompt = [];
    for (var i = 0; i < this.options.kanji.prompt.length; i++) {
      if (this.options.kanji.prompt[i]) {
        prompt.push(i);
      }
    }
    prompt = prompt[randNum(prompt.length - 1)];
    //pick option type
    var option = [];
    for (var i = 0; i < this.options.kanji.option.length; i++) {
      if (this.options.kanji.option[i] && i != prompt) {
        option.push(i);
      }
    }
    var key = ["kanji","meaning","romaji","wordType"]; //object properties that correspond to each type
    option = key[option[randNum(option.length - 1)]];
    if (this.options.kanjiRomaji) {
      key[2] = "romaji";
    } else {
      key[2] = ["katakanaReading","reading"][randNum(1)];
    }
    var wordListCopy = [...wordList];
    var randIndex = randNum(wordList.length - 1);
    var word = wordListCopy[randIndex];
    wordListCopy.splice(randIndex,1);
    prompt = word[key[prompt]];
    this.correctAnswer = word[option];

    var instruction = {
      kanji:"Which kanji matches the following prompt?",
      meaning:"Which meaning matches the following prompt?",
      romaji:"Type the pronunciation that matches the following prompt.",
      wordType:"What word type matches the following prompt?"
    }
    instruction = instruction[option];
    document.getElementById("kanjiInstruction").innerHTML = instruction;

    if (option == "romaji") {
      document.getElementById("kanjiChoices").style.display = "none";
      document.getElementById("kanjiInput").style.display = "block";
      this.kanjiProblemType = "input";
    } else {
      document.getElementById("kanjiChoices").style.display = "block";
      document.getElementById("kanjiInput").style.display = "none";
      this.kanjiProblemType = "";
    }

    var options = [word[option]];
    for (var i = 0; i < 4; i++) {
      randIndex = randNum(wordListCopy.length - 1);
      options.push(wordListCopy[randIndex][option]);
      wordListCopy.splice(randIndex,1);
    }
    options = shuffleArray(options);

    var optionElements = document.getElementById("kanjiChoices").children;
    for (var i = 0; i < 5; i++) {
      optionElements[i].children[0].innerHTML = options[i];
    }

    document.getElementById("kanjiPrompt").innerHTML = prompt;
  }
  //kanjiValidate() is similar to rapidValidate() but validates kanji answers instead instead
  static kanjiValidate(answer) {
    if (this.verifyOu(answer,this.correctAnswer) || answer == this.correctAnswer) {
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(115,255,15,0.3)";
      this.answers.push({
        correct:true,
        answered:answer,
        trueAnswer:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    } else {
      console.log(answer);
      console.log(this.correctAnswer);
      clearTimeout(this.timeout);
      document.getElementById("problemParent").style.backgroundColor = "rgba(255,60,60,0.3)";
      this.answers.push({
        correct:false,
        answered:answer,
        trueAnswer:this.correctAnswer,
        problemType:this.currentProblem
      });
      this.randomProblem();
    }
    this.timeout = setTimeout(function(){
      document.getElementById("problemParent").style.backgroundColor = "";
    },300);
  }
}
