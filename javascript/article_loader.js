
const warning_s_tag="((WARNING))"
const note_s_tag="((NOTE))"
const warning_e_tag="((.WARNING))"
const note_e_tag="((.NOTE))"
const high1_tag="((H1))"
const high2_tag="((H2))"
const image_tag="((IMAGE))"


let h1t
let h2t
let notet
let warnt



function decodeGDMRDOCS(text){
    let formatedtext={};
    
    let textbuffer=text;
    
    let H1TagPos=[];
    let H2TagPos=[];
    let NoteTagPos=[];
    let WarningTagPos=[];
    let Islice=0;
    while (true){
        const high1tago=textbuffer.indexOf(high1_tag);
        if (high1tago==-1){
            break;
        }
        else{
            H1TagPos.push( [high1tago+high1_tag.length-1]);
            Islice=high1tago+high1_tag.length-1;
        }
    }
    
    Islice=0;
    while (true){
        const high2tago=textbuffer.slice(Islice,textbuffer.length).indexOf(high2_tag);
        if (high2tago===-1){
            break;
        }
        else{
            H2TagPos.push(high2tago+high2_tag.length-1);
            Islice=high2tago+high2_tag.length-1;
        }
    }

    Islice=0;
    while (true){
        const notetagori=textbuffer.slice(Islice,textbuffer.length).indexOf(note_s_tag);
        if (notetagori==-1){
            break;
            
        }
        else{
           const notetagend=textbuffer.slice(Islice,textbuffer.length).indexOf(note_e_tag)
           const note2tagori=textbuffer.slice(notetagori+note_s_tag.length-1,textbuffer.length).indexOf(note_s_tag);
           
           if (notetagori != -1){
               
               NoteTagPos.push(
                   [Math.min(notetagori,note2tagori),
                   notetagend]
                   );
                Islice= notetagend+note_e_tag.length-1;
           }
           else {
               
            NoteTagPos.push(
                   [notetagori,
                   notetagend]
                   );
            Islice= notetagend+note_e_tag.length-1;
               
           }
        }
        
    }
    
    Islice=0;
    while (true){
        const warntagori=textbuffer.slice(Islice,textbuffer.length).indexOf(note_s_tag);
        if (warntagori==-1){
            break;
            
        }
        else{
           const warntagend=textbuffer.slice(Islice,textbuffer.length).indexOf(warning_e_tag)
           const warn2tagori=textbuffer.slice(warntagori+note_s_tag.length-1,textbuffer.length).indexOf(warning_s_tag);
           
           if (warn2tagori != -1){
               
               NoteTagPos.push(
                   [Math.min(warntagori,warn2tagori),
                   warntagend]
                   );
                Islice= warntagend+warning_e_tag.length-1;
           }
           else {
               NoteTagPos.push(
                   [warntagori,
                   warntagend]
                   );
                Islice= warntagend+warning_e_tag.length-1;
               
           }
        }
        
    }
    
    
    console.log("H1: ",H1TagPos);
    console.log("H2: ",H2TagPos);
    console.log("Note: ",NoteTagPos);
    console.log("Warning: ",WarningTagPos);

    h1t=H1TagPos;
    h2t=H2TagPos;
    notet=NoteTagPos;
    warnt=WarningTagPos;


    while (true){
        break;
    }
    
    
}


function addWarningBlock(){}

function addNoteBlock(){}

function addH1Line(){}

function addH2Line(){}

function addImage(){}


async function loadServerFile(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const textContent = await response.text();
    console.log(textContent);
  } catch (error) {
    console.error("Failed to load file:", error);
  }
}

// Usage:
//loadServerFile('/path/to/your/file.txt');



decodeGDMRDOCS("((H1))abc\n((H2))abc\n((NOTE))\nabcdefghijkabcdefghijk\nabcdefghijkabcdefghijk\n((.NOTE))");
