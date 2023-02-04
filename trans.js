let elements = document.getElementsByTagName('p')

let chordIn=[]
for(let i=0;i<elements.length;i++){
chordIn.push(elements[i].innerText)
}
 console.log(chordIn)


function transfer(){
  //  var e = document.getElementById("value_root");
   // var rootKey = e.options[e.selectedIndex].value;
   // document.getElementById("output_key").innerHTML = 
   // `${rootKey}키를 선택하셨습니다.`

   let selected = document.querySelector('input[type=radio][name=root]:checked');
    let root=selected.value;
//input the chord and root key


//let root = rootKey

const chordNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

//change the chordNames
let k = chordNames.indexOf(root)
for(let i =0; i<k; i++){
chordNames.push(chordNames[0])
chordNames.shift()
}

const chordObj={
  "1" : `${chordNames[0]}`,
  "2" : `${chordNames[2]}m<sup>7</sup>`,
  "3" : `${chordNames[0]}/${chordNames[4]}`,
  "4" : `${chordNames[5]}`,
  "5" : `${chordNames[7]}`,
  "5/4" : `${chordNames[7]}/${chordNames[5]}`,
  "5dom7" : `${chordNames[7]}<sup>7</sup>`,
  "5m" : `${chordNames[7]}m`,
  "6b" : `${chordNames[4]}<sup>7b9</sup>/${chordNames[8]}`,
  "6" : `${chordNames[9]}m<sup>7</sup>`,
  "7b" : `${chordNames[10]}`,
  "7bM7" : `${chordNames[10]}M<sup>7</sup>`,
  "7" : `${chordNames[7]}/${chordNames[11]}`,
  "4/1": `${chordNames[5]}/${chordNames[0]}`,
  "5/1": `${chordNames[7]}/${chordNames[0]}`,
  "1/5": `${chordNames[0]}/${chordNames[7]}`,
  "7b/1": `${chordNames[10]}/${chordNames[0]}`,
  "3m" : `${chordNames[4]}m<sup>7</sup>`,
  "3m/5" : `${chordNames[4]}m/${chordNames[7]}`,
  "3dom7" : `${chordNames[4]}<sup>7</sup>`,
  "4/5" : `${chordNames[5]}/${chordNames[7]}`,
  "5b" : `${chordNames[2]}<sup>7</sup>/${chordNames[6]}`,
  "4m" : `${chordNames[5]}m<sup>6</sup>`,
  "4m/1" : `${chordNames[5]}m<sup>6</sup>/${chordNames[0]}`
}

//chordin to chordout
const chordOut=chordIn.map(function(chord){
      return chordObj[chord]})

for(let i=0;i<elements.length;i++){
elements[i].innerHTML=`${chordOut[i]}`
}


}

transfer();

//document.getElementById('submit').onclick = transfer


function action_coords(event) {

  var x1 = event.clientX;

  var y1 = event.clientY;

  var x2 = event.offsetX;

  var y2 = event.offsetY;

  var x3 = event.screenX;

  var y3 = event.screenY;

  var coords = "clientX: " + x1 + ", clientY: " + y1 + "<br/>";

  coords += "offsetX: " + x2 + ", offsetY: " + y2 + "<br/>";

  coords += "screenX: " + x3 + ", screenY: " + y3;

  document.getElementById("debug_out").innerHTML = coords;

}
