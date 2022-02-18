const letterArry = [
  { name: "A", id: "a", soundtype: "one" },
  { name: "B", id: "b", soundtype: "two" },
  { name: "C", id: "c", soundtype: "three" },
  { name: "D", id: "d", soundtype: "four" },
  { name: "E", id: "e", soundtype: "five" },
  { name: "F", id: "f", soundtype: "six" },
  { name: "G", id: "g", soundtype: "seven" },
  { name: "H", id: "h", soundtype: "eight" },
  { name: "I", id: "i", soundtype: "nine" },
  { name: "J", id: "j", soundtype: "ten" },
];

let eleOne = document.getElementById("main");

const html =  letterArry.map((i) => {
  return `<span class = 'listitem'>
                  <span id= ${i.id} class="item">
                      ${i.name} ${i.soundtype}
                  </span>
              </span>`
});

eleOne.innerHTML = html.join(' ')