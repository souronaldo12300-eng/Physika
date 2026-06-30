
const warning_s_tag="((WARNING))"
const note_s_tag="((NOTE))"
const warning_e_tag="((.WARNING))"
const note_e_tag="((.NOTE))"
const high1_tag="((H1))"
const high2_tag="((H2))"
const image_tag="((IMAGE))"

function decodeGDMRDOCS(text){
    let formatedtext={};
    
    let textbuffer=text;
    
    let H1TagPos=[];
    let H2TagPos=[];
    let NoteTagPos=[];
    let WarningTagPos=[];
    let Islice=0;
    while (true){
        var high1tago=textbuffer.indexOf(high1_tag);
        if (high1tago===-1){
            break;
        }
        else{
            H1TagPos.push(high1tago+high1_tag.length-1);
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
        if (note2tagori==-1){
            break;
            
        }
        else{
           const notetagend=textbuffer.slice(Islice,textbuffer.length).indexOf(note_e_tag)
           const note2tagori=textbuffer.slice(note2tagori+note_s_tag.length-1,textbuffer.length).indexOf(note_s_tag);
           
           if (note2tagori != -1){
               
               NoteTagPos.push(
                   [Math.min(notetagori,note2tagori),
                   notetagend]
                   );
                Islice= notetagend+note_e_tag.length-1;
           }
           else {
               
               
           }
        }
        
    }
    
    
    
    
    textbuffer=text
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
loadServerFile('/path/to/your/file.txt');
