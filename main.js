var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Ac tortor vitae purus faucibus ornare suspendisse sed. Purus semper eget duis at. Condimentum mattis pellentesque id nibh. Tellus mauris a diam maecenas sed."
var censor = ["Lorem", "ipsum", "elit", "eiusmod"];
for (var i = 0; i < censor.length; i++) {
  do {
    text = text.replace(censor[i], "XXX");
  } while (text.includes(censor[i]));
}

document.writeln(text);
