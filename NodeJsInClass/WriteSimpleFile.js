function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getBar(index, max) {
  var bar = "[";
  var space = "-";
  bar = bar + space.repeat(index);
  bar = bar + "0";
  bar = bar + space.repeat(max - index - 1);
  bar = bar + "]";
  return bar;
}

async function loadingBar(barLength) {
  while (true) {
    for (var i = 0; i < barLength; i++) {
      console.clear();
      console.log(getBar(i, barLength));
      await sleep(100);
    }
  }
}

loadingBar(20);
