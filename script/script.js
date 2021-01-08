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
  KanaExercise.initialize();
  processWords();
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
  var randomRoll = PlanetHandler.seededRandFloat(max);
  //PlanetHandler.seededRandFloat is from Icarus, use a different rng if using for something else
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
  console.log(y + "px");
}
function randNum(max) {
  return Math.round(Math.random() * max);
}
function processWords() {
  var arrayWordList = rawWordList.split("\n");
  for (var i = 0; i < arrayWordList.length; i++) {
    var rawWordObject = arrayWordList[i].split(",");
    var wordObject = {
      kanji:rawWordObject[0],
      reading:rawWordObject[1],
      politeForm:rawWordObject[2],
      meaning:rawWordObject[3],
      meaningTwo:rawWordObject[4],
      wordType:rawWordObject[5],
      note:rawWordObject[6]
    }
    arrayWordList[i] = wordObject;
  }
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
        console.log("found");
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
class KanaExercise {
  static initialize() {
    this.options = {
      time:true,
      hiragana:true,
      katakana:true,
      japaneseTyping:true,
      rapid:{enabled:true,chance:65},
      translate:{enabled:true,chance:15},
      word:{enabled:true,chance:15},
      paragraph:{enabled:false,chance:5},
    }
    var ratios = document.getElementsByTagName("input");
    for (var i = 0; i < ratios.length; i++) {
      ratios[i].addEventListener("input", function (e) {
        KanaExercise.updatePercentage(this);
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
    KanaExercise.updatePercentage(ratioCounterpart.children[1]);
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
    var problemTypes = ["rapid","translate","word","paragraph"];
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
      KanaExercise.warning("Cannot start without any kana enabled.");
      canStart = false;
    }
    if (!this.options.rapid.enabled && !this.options.translate.enabled && !this.options.word.enabled && !this.options.paragraph.enabled) {
      KanaExercise.warning("Cannot start when all problem types are disabled.")
    }
    if (this.options.rapid.chance == "invalid" && this.options.rapid.enabled || this.options.translate.chance == "invalid" && this.options.translate.enabled || this.options.word.chance == "invalid" && this.options.word.enabled  || this.options.paragraph.chance == "invalid" && this.options.paragraph.enabled) {
      KanaExercise.warning("Cannot start when problem type chances are invalid.")
    }
  }
  static randomProblem() {

  }
  static rapid() {

  }
}
