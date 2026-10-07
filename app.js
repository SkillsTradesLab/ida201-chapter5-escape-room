const svgData = s => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`;

const roomArt = [
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#071924"/>
<g opacity=".75" stroke="#54d5ff" fill="none">
<circle cx="240" cy="300" r="120" stroke-width="12"/><circle cx="240" cy="300" r="46" stroke-width="8"/>
<path d="M240 180v55M240 365v55M120 300h55M305 300h55M155 215l40 40M325 345l40 40M325 215l-40 40M195 345l-40 40" stroke-width="14" stroke-linecap="round"/>
</g>
<g transform="translate(505 190)" stroke="#ffd166" fill="none" stroke-width="12"><path d="M0 110h70l30-55 45 110 45-110 45 110 45-110 45 55h70"/><text x="115" y="225" fill="#ffd166" stroke="none" font-family="Arial" font-size="42">HEAT</text></g>
<g transform="translate(510 490)"><rect x="0" y="0" width="230" height="120" rx="18" fill="#ffffff0d" stroke="#ffffff33" stroke-width="4"/><path d="M38 60c25-55 50 55 75 0s50 55 75 0" fill="none" stroke="#65e59a" stroke-width="10"/><text x="50" y="104" fill="#65e59a" font-family="Arial" font-size="28">COIL</text></g>
<g transform="translate(870 240)"><circle cx="90" cy="90" r="82" fill="#ffffff08" stroke="#ff7373" stroke-width="8"/><circle cx="90" cy="90" r="32" fill="#ff7373"/><path d="M90 0v-55M90 180v55M0 90h-55M180 90h55" stroke="#ff7373" stroke-width="10"/><text x="30" y="230" fill="#ffb0b0" font-family="Arial" font-size="30">STATUS</text></g>
<text x="60" y="90" fill="#b9ccda" font-family="Arial" font-size="34">CLUE: ROTATE • MAGNETIC FIELD • HEAT • STATUS</text>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#071723"/>
<g transform="translate(100 160)"><rect width="380" height="420" rx="24" fill="#ffffff08" stroke="#54d5ff" stroke-width="6"/><text x="92" y="65" fill="#54d5ff" font-family="Arial" font-size="38">SMALL LOAD</text><path d="M80 150h90M210 150h90M170 100v100" stroke="#d5f7ff" stroke-width="10"/><circle cx="190" cy="300" r="65" fill="none" stroke="#54d5ff" stroke-width="10"/><text x="120" y="395" fill="#b9ccda" font-family="Arial" font-size="34">&lt; 20 A</text></g>
<g transform="translate(720 160)"><rect width="380" height="420" rx="24" fill="#ffffff08" stroke="#ffd166" stroke-width="6"/><text x="92" y="65" fill="#ffd166" font-family="Arial" font-size="38">LARGE LOAD</text><path d="M70 130h70M175 130h70M280 130h35M140 80v100M245 80v100" stroke="#fff1bf" stroke-width="10"/><circle cx="190" cy="300" r="65" fill="none" stroke="#ffd166" stroke-width="10"/><text x="120" y="395" fill="#d9d2b6" font-family="Arial" font-size="34">≥ 20 A</text></g>
<text x="390" y="720" fill="#65e59a" font-family="Arial" font-size="36">NO VOLTAGE → “NORMAL” POSITION</text>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#061824"/>
<g transform="translate(70 120)"><rect width="300" height="520" rx="22" fill="#ffffff08" stroke="#54d5ff" stroke-width="5"/><text x="42" y="65" fill="#54d5ff" font-family="Arial" font-size="34">MAIN POWER</text><path d="M90 170h120M150 170v110M95 280h110" stroke="#dff9ff" stroke-width="12"/><text x="52" y="370" fill="#b9ccda" font-family="Arial" font-size="28">DISCONNECT</text></g>
<g transform="translate(450 120)"><rect width="300" height="520" rx="22" fill="#ffffff08" stroke="#ffd166" stroke-width="5"/><text x="58" y="65" fill="#ffd166" font-family="Arial" font-size="34">BUTTON</text><circle cx="150" cy="220" r="78" fill="#ff737322" stroke="#ff7373" stroke-width="10"/><text x="95" y="232" fill="#ffbcbc" font-family="Arial" font-size="30">PRESS</text><path d="M70 420h70M160 420h70" stroke="#fff" stroke-width="10"/></g>
<g transform="translate(830 120)"><rect width="300" height="520" rx="22" fill="#ffffff08" stroke="#65e59a" stroke-width="5"/><text x="40" y="65" fill="#65e59a" font-family="Arial" font-size="34">THERMOSTAT</text><text x="75" y="205" fill="#fff" font-family="Arial" font-size="70">↑ T</text><path d="M70 290h70M160 290h70" stroke="#54d5ff" stroke-width="10"/><text x="38" y="380" fill="#b9ccda" font-family="Arial" font-size="26">COOL: closes ↑T</text><text x="38" y="430" fill="#b9ccda" font-family="Arial" font-size="26">HEAT: opens ↑T</text></g>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#071720"/>
<g transform="translate(70 160)"><rect width="240" height="130" rx="18" fill="#ffffff08" stroke="#ff7373" stroke-width="6"/><path d="M35 65h35l20-25 40 50 40-50 20 25h35" fill="none" stroke="#ffb1b1" stroke-width="8"/><text x="80" y="185" fill="#ffb1b1" font-family="Arial" font-size="32">FUSE</text></g>
<g transform="translate(390 110)"><rect width="330" height="500" rx="20" fill="#ffffff08" stroke="#ffd166" stroke-width="6"/><text x="50" y="60" fill="#ffd166" font-family="Arial" font-size="34">OVERLOAD</text><path d="M60 180c35-80 70 80 105 0s70 80 105 0" fill="none" stroke="#ffd166" stroke-width="11"/><text x="54" y="300" fill="#b9ccda" font-family="Arial" font-size="28">HEAT → thermal</text><text x="54" y="350" fill="#b9ccda" font-family="Arial" font-size="28">FIELD → magnetic</text><text x="54" y="430" fill="#65e59a" font-family="Arial" font-size="25">Starter = contactor</text><text x="54" y="468" fill="#65e59a" font-family="Arial" font-size="25">+ overload protection</text></g>
<g transform="translate(810 160)"><rect width="300" height="320" rx="20" fill="#ffffff08" stroke="#54d5ff" stroke-width="6"/><path d="M70 100c30-70 60 70 90 0M180 100c30-70 60 70 90 0" fill="none" stroke="#54d5ff" stroke-width="10"/><path d="M165 40v120" stroke="#dff9ff" stroke-width="5"/><text x="90" y="225" fill="#dff9ff" font-family="Arial" font-size="34">24 V</text><text x="54" y="285" fill="#b9ccda" font-family="Arial" font-size="28">CONTROL</text></g>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="#06151f"/>
<text x="60" y="80" fill="#54d5ff" font-family="Arial" font-size="36">FOLLOW THE CIRCUIT. FIND THE RIGHT MAP.</text>
<g transform="translate(80 150)" stroke="#54d5ff" fill="none"><path d="M0 0v420M400 0v420" stroke-width="10"/><text x="-5" y="-25" fill="#fff" stroke="none" font-family="Arial" font-size="34">L1</text><text x="375" y="-25" fill="#fff" stroke="none" font-family="Arial" font-size="34">L2</text><path d="M0 90h80m55 0h100l35-40 50 80 35-40H400" stroke-width="8"/><path d="M0 230h110m70 0h80" stroke-width="8"/><circle cx="325" cy="230" r="45" stroke-width="8"/><path d="M370 230h30" stroke-width="8"/><path d="M0 360h110l25-20 30 40 30-40 30 20H400" stroke-width="8"/></g>
<g transform="translate(610 150)"><rect width="500" height="420" rx="24" fill="#ffffff07" stroke="#ffd166" stroke-width="5"/><text x="50" y="70" fill="#ffd166" font-family="Arial" font-size="32">WHICH DIAGRAM?</text><text x="55" y="145" fill="#b9ccda" font-family="Arial" font-size="27">How / when / why → ?</text><text x="55" y="205" fill="#b9ccda" font-family="Arial" font-size="27">Physical location → ?</text><text x="55" y="265" fill="#b9ccda" font-family="Arial" font-size="27">Both views → ?</text><text x="55" y="325" fill="#b9ccda" font-family="Arial" font-size="27">Installer details → ?</text></g>
</svg>`
];

const rooms = [
{
 title:"Load Bay",
 kicker:"Room 1",
 code:"4",
 story:"The compressor room is dark. Identify the devices that actually do the work before the fan wall can restart.",
 bg:roomArt[0],
 questions:[
  {q:"What is the general term for electrical devices that consume electricity to do useful work?", a:["load","loads"], choices:["Loads","Switches","Conductors","Legends"]},
  {q:"What electrical device consumes energy to create rotating movement for compressors, fans, and pumps?", a:["motor","electric motor"], choices:["Motor","Fuse","Thermostat","Transformer"]},
  {q:"What device creates a magnetic field when energized and can cause action in a relay or valve?", a:["solenoid","solenoid coil"], choices:["Solenoid","Heater","Signal light","Disconnect switch"]},
  {q:"What load converts electrical energy into heat?", a:["heater","electric heater","resistance heater"], choices:["Heater","Relay","Pressure switch","Contactor"]},
  {q:"What device illuminates to show a condition such as equipment operating or an unsafe condition?", a:["signal light","indicator light","pilot light"], choices:["Signal light","Solenoid","Fuse","Motor"]}
 ]
},
{
 title:"Relay Control Room",
 kicker:"Room 2",
 code:"7",
 story:"The control rack is frozen between ON and OFF. Decode relays, contactors, and contact positions to restore control.",
 bg:roomArt[1],
 questions:[
  {q:"Which device is generally used for larger loads and is designed to carry 20 amperes or more?", a:["contactor"], choices:["Contactor","Relay","Thermostat","Fuse"]},
  {q:"Which device is generally used for smaller loads and is designed to carry fewer than 20 amperes?", a:["relay"], choices:["Relay","Contactor","Transformer","Magnetic starter"]},
  {q:"What term describes a relay or contactor coil when no voltage is supplied to it?", a:["de energized","deenergized","de-energized"], choices:["De-energized","Energized","Overloaded","Pilot duty"]},
  {q:"What do normally open contacts do when a relay or contactor is energized?", a:["close","they close","closes"], choices:["Close","Open","Melt","Reverse voltage"]},
  {q:"In relay/contactor terminology, what does one pole refer to?", a:["one set of contacts","a set of contacts","set of contacts","one contact set"], choices:["One set of contacts","One coil winding","One fuse","One power leg"]}
 ]
},
{
 title:"Switch Lab",
 kicker:"Room 3",
 code:"2",
 story:"The thermostat chamber is cycling the wrong way. Reset the switch logic before the room temperature runs away.",
 bg:roomArt[2],
 questions:[
  {q:"What switch is used to open and close the main power source to a piece of equipment or load?", a:["disconnect switch","disconnect"], choices:["Disconnect switch","Pressure switch","Relay","Signal light"]},
  {q:"What manually operated switch opens or closes contacts when a button is pressed and is often used with a magnetic starter?", a:["push button switch","push-button switch","pushbutton switch","push button"], choices:["Push-button switch","Thermostat","Disconnect switch","Pressure switch"]},
  {q:"A single-pole switch has how many sets of contacts?", a:["one","1","one set","1 set"], choices:["One","Two","Three","Four"]},
  {q:"On a temperature rise, what does a cooling thermostat do?", a:["close","closes"], choices:["Closes","Opens","Trips a fuse","Raises line voltage"]},
  {q:"On a temperature rise, what does a heating thermostat do?", a:["open","opens"], choices:["Opens","Closes","Energizes L1","Increases pressure"]}
 ]
},
{
 title:"Safety Chamber",
 kicker:"Room 4",
 code:"9",
 story:"Overcurrent alarms are flashing. Choose the protection devices and control voltage before the equipment is damaged.",
 bg:roomArt[3],
 questions:[
  {q:"What is the simplest type of overload device described in this chapter?", a:["fuse","a fuse"], choices:["Fuse","Relay","Contactor","Thermostat"]},
  {q:"A thermal overload is operated by what?", a:["heat"], choices:["Heat","Pressure","Humidity","Light"]},
  {q:"A magnetic overload is operated by what?", a:["magnetism","magnetic field","magnetic force"], choices:["Magnetism","Heat","Airflow","Refrigerant"]},
  {q:"What protection does a magnetic starter have that a contactor does not?", a:["overload protection","overload","motor overload protection"], choices:["Overload protection","A thermostat","A signal light","A second power source"]},
  {q:"What control-circuit voltage is commonly used in air-conditioning systems according to the chapter?", a:["24","24v","24 v","24 volts","24 volt"], choices:["24 volts","120 volts","208 volts","480 volts"]}
 ]
},
{
 title:"Diagram Archive",
 kicker:"Room 5",
 code:"5",
 story:"The exit controller accepts only the correct wiring map. Match each diagram to its job and trace the source lines.",
 bg:roomArt[4],
 questions:[
  {q:"Which wiring diagram tells how, when, and why a system works and is commonly used for troubleshooting?", a:["schematic","schematic diagram","schematic wiring diagram"], choices:["Schematic diagram","Pictorial diagram","Installation diagram","Factual diagram"]},
  {q:"Which diagram shows the actual internal wiring/layout and helps locate specific components or wires?", a:["pictorial","pictorial diagram","line diagram","label diagram"], choices:["Pictorial diagram","Schematic diagram","Installation diagram","Factual diagram"]},
  {q:"What diagram combines a pictorial diagram with a schematic diagram?", a:["factual","factual diagram"], choices:["Factual diagram","Installation diagram","Schematic diagram","Pictorial diagram"]},
  {q:"Which diagram gives installers details such as terminals, wire sizes, color coding, and breaker or fuse sizes?", a:["installation","installation diagram","installation wiring diagram"], choices:["Installation diagram","Schematic diagram","Pictorial diagram","Factual diagram"]},
  {q:"In a typical schematic, what are the two power-supply lines labeled?", a:["l1 and l2","l1 l2","l1 & l2","l1,l2"], choices:["L1 and L2","T1 and T2","R and C","HPS and LPS"]}
 ]
}
];

const TOTAL = rooms.reduce((n,r)=>n+r.questions.length,0);
const state = {
 room:0, q:0, firstTryKeys:0, answered:0, firstAttempt:true,
 startTime:null, timer:null, student:"", codes:Array(rooms.length).fill(null)
};

const $ = id => document.getElementById(id);
const screens = ["startScreen","gameScreen","roomCompleteScreen","finalScreen","escapedScreen"];
function show(id){ screens.forEach(s=>$(s).classList.toggle("hidden",s!==id)); }

function normalize(s){
 return String(s).toLowerCase()
  .replace(/[–—−]/g,"-")
  .replace(/[^a-z0-9]+/g," ")
  .trim()
  .replace(/\s+/g," ");
}
function accepted(input, answers){
 const n = normalize(input);
 return answers.some(a => n === normalize(a));
}
function shuffle(arr){
 const a=[...arr];
 for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
 return a;
}
function mmss(sec){
 const m=Math.floor(sec/60).toString().padStart(2,"0");
 const s=(sec%60).toString().padStart(2,"0");
 return `${m}:${s}`;
}
function elapsed(){
 if(!state.startTime) return 0;
 return Math.max(0,Math.floor((Date.now()-state.startTime)/1000));
}
function updateTimer(){
 $("hudTime").textContent=mmss(elapsed());
}
function updateHUD(){
 $("hudRoom").textContent = state.room < rooms.length ? `${state.room+1}/5` : "5/5";
 $("hudQuestion").textContent = `${state.answered}/${TOTAL}`;
 $("hudScore").textContent = state.firstTryKeys;
 $("progress").style.width = `${(state.answered/TOTAL)*100}%`;
}
function codeSlots(){
 $("codeSlots").innerHTML = rooms.map((r,i)=>{
   const v=state.codes[i];
   return `<div class="code-slot ${v?'unlocked':''}">${v||"?"}</div>`;
 }).join("");
}
function setRoomBackground(){
 const art=rooms[Math.min(state.room,rooms.length-1)].bg;
 $("roomBg").style.backgroundImage=`url("${svgData(art)}")`;
}
function renderClueBoard(){
 $("clueBoard").innerHTML=rooms[state.room].bg;
}
function currentQ(){ return rooms[state.room].questions[state.q]; }

function renderQuestion(){
 const r=rooms[state.room], q=currentQ();
 setRoomBackground();
 $("roomKicker").textContent=r.kicker;
 $("roomTitle").textContent=r.title;
 $("roomStory").textContent=r.story;
 $("roomNum").textContent=`ROOM ${state.room+1} / ${rooms.length}`;
 $("questionCount").textContent=`Lock ${state.q+1} of ${r.questions.length}`;
 $("question").textContent=q.q;
 $("answerInput").value="";
 $("answerInput").disabled=false;
 $("shortAnswerArea").classList.remove("hidden");
 $("mcqArea").classList.add("hidden");
 $("mcqArea").innerHTML="";
 $("feedback").textContent="";
 $("feedback").className="feedback";
 state.firstAttempt=true;
 renderClueBoard();
 codeSlots();
 updateHUD();
 setTimeout(()=>$("answerInput").focus(),50);
}

function sparkle(){
 for(let i=0;i<16;i++){
  const e=document.createElement("div"); e.className="spark"; e.textContent=Math.random()>.55?"⚡":"✦";
  e.style.left=(48+Math.random()*8)+"vw"; e.style.top=(42+Math.random()*8)+"vh";
  e.style.setProperty("--dx",`${(Math.random()-.5)*340}px`);
  e.style.setProperty("--dy",`${-80-Math.random()*260}px`);
  document.body.appendChild(e); setTimeout(()=>e.remove(),950);
 }
}
function correct(){
 if(state.firstAttempt) state.firstTryKeys++;
 state.answered++;
 $("feedback").textContent = state.firstAttempt ? "⚡ First-try key earned! Lock released." : "✓ Correct. Lock released.";
 $("feedback").className="feedback good";
 sparkle();
 updateHUD();
 setTimeout(()=>{
  if(state.q < rooms[state.room].questions.length-1){
   state.q++;
   renderQuestion();
  } else {
   roomComplete();
  }
 },900);
}
function firstWrong(){
 state.firstAttempt=false;
 $("feedback").textContent="Not quite. The lock has switched to multiple choice — use the background clue.";
 $("feedback").className="feedback bad";
 $("shortAnswerArea").classList.add("hidden");
 renderMCQ();
 const main=document.querySelector(".room-main");
 main.classList.remove("shake"); void main.offsetWidth; main.classList.add("shake");
}
function renderMCQ(){
 const q=currentQ();
 const buttons=shuffle(q.choices).map(c=>`<button class="option" data-choice="${c.replace(/"/g,"&quot;")}">${c}</button>`).join("");
 $("mcqArea").innerHTML=buttons;
 $("mcqArea").classList.remove("hidden");
 [...$("mcqArea").querySelectorAll(".option")].forEach(btn=>{
  btn.addEventListener("click",()=>{
   const val=btn.dataset.choice;
   if(accepted(val,q.a)){ correct(); }
   else{
    btn.classList.add("wrong"); btn.disabled=true;
    $("feedback").textContent="That option did not release the lock. Try another clue.";
    $("feedback").className="feedback bad";
   }
  });
 });
}
function submitShort(){
 const val=$("answerInput").value.trim();
 if(!val){ $("feedback").textContent="Enter an answer first."; $("feedback").className="feedback bad"; return; }
 if(accepted(val,currentQ().a)) correct(); else firstWrong();
}
function roomComplete(){
 const r=rooms[state.room];
 state.codes[state.room]=r.code;
 codeSlots();
 $("completeTitle").textContent=`${r.title} Restored`;
 $("bigCode").textContent=r.code;
 $("completeText").textContent= state.room < rooms.length-1
   ? "Remember the digit. The next room is now unlocked."
   : "That was the final room digit. The master exit keypad is ready.";
 $("nextRoomBtn").textContent=state.room < rooms.length-1 ? "Open the Next Door →" : "Go to Final Keypad →";
 show("roomCompleteScreen");
 updateHUD();
}
function goNext(){
 if(state.room < rooms.length-1){ state.room++; state.q=0; show("gameScreen"); renderQuestion(); }
 else { renderFinal(); }
}
function renderFinal(){
 $("roomBg").style.backgroundImage=`url("${svgData(roomArt[4])}")`;
 $("finalCodeEntry").innerHTML = rooms.map((_,i)=>`<input class="digit" maxlength="1" inputmode="numeric" aria-label="Code digit ${i+1}" />`).join("");
 const digs=[...$("finalCodeEntry").querySelectorAll(".digit")];
 digs.forEach((d,i)=>{
  d.addEventListener("input",()=>{ d.value=d.value.replace(/\D/g,"").slice(0,1); if(d.value&&i<digs.length-1)digs[i+1].focus(); });
  d.addEventListener("keydown",e=>{ if(e.key==="Backspace"&&!d.value&&i>0)digs[i-1].focus(); });
 });
 show("finalScreen");
 setTimeout(()=>digs[0]?.focus(),60);
}
function attemptEscape(){
 const code=[...$("finalCodeEntry").querySelectorAll(".digit")].map(d=>d.value).join("");
 const expected=rooms.map(r=>r.code).join("");
 if(code===expected){
   clearInterval(state.timer);
   $("statKeys").textContent=`${state.firstTryKeys}/${TOTAL}`;
   $("statTime").textContent=mmss(elapsed());
   const who=state.student?`${state.student}, y`:"Y";
   $("escapeMessage").textContent=`${who}ou restored every HVAC room and unlocked the final door.`;
   show("escapedScreen"); $("progress").style.width="100%"; sparkle(); sparkle();
 }else{
   $("finalFeedback").textContent="ACCESS DENIED. Recheck the five room digits in room order.";
   $("finalFeedback").className="feedback bad";
   document.querySelector("#finalScreen").classList.remove("shake"); void document.querySelector("#finalScreen").offsetWidth; document.querySelector("#finalScreen").classList.add("shake");
 }
}
function start(){
 state.student=$("studentName").value.trim();
 state.startTime=Date.now();
 state.timer=setInterval(updateTimer,1000);
 show("gameScreen"); renderQuestion(); updateTimer();
}
function resetGame(){
 if(!confirm("Reset the entire escape room and clear all progress?")) return;
 clearInterval(state.timer);
 state.room=0; state.q=0; state.firstTryKeys=0; state.answered=0; state.firstAttempt=true; state.startTime=null; state.codes=Array(rooms.length).fill(null);
 $("hudTime").textContent="00:00"; updateHUD(); $("studentName").value=state.student||"";
 show("startScreen");
 $("roomBg").style.backgroundImage=`url("${svgData(roomArt[0])}")`;
}
$("startBtn").addEventListener("click",start);
$("submitAnswer").addEventListener("click",submitShort);
$("answerInput").addEventListener("keydown",e=>{if(e.key==="Enter")submitShort();});
$("nextRoomBtn").addEventListener("click",goNext);
$("escapeBtn").addEventListener("click",attemptEscape);
$("resetBtn").addEventListener("click",resetGame);
$("playAgainBtn").addEventListener("click",()=>{state.student="";resetGame();});
$("roomBg").style.backgroundImage=`url("${svgData(roomArt[0])}")`;
updateHUD();
