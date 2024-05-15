const fs = require('fs');

const readStream= fs.createReadStream('./docs/blog4.txt', { highWaterMark: 1024, encoding: 'utf-8'});
const writeStream= fs.createWriteStream('./docs/blog5.txt');

// readStream.on('data', (chunk)=>{
//     console.log('----- NEW CHUNK -----')
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);