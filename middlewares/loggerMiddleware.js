const fs = require('fs');


function logHandler(message){
    let messageanddate=currentDate()+" " + message
    const existe = fs.existsSync('log.txt');
    console.log(existe)
    if (!existe) {
        fs.writeFile('log.txt', messageanddate , (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('El archivo se creó correctamente');
            }
          });

    }else{
        fs.appendFile('log.txt','\n' + messageanddate, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('El contenido se agregó correctamente');
            }
          });
    }
    
}

function currentDate(){
    const date = new Date();

const formattedDate = date.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
return formattedDate;
}


module.exports = { logHandler }