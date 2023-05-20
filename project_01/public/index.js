// // This is the Node server which will handle my socket.io connection

// const io = require('socket.io')(8000)

// const users = {};

// const time = () => {
//     const date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let meridiem = "am";
//     if(hours > 12){
//         hours = hours - 12;
//         meridiem = "pm"
//     }
//     else if (hours === 0){
//         hours = 12;
//         meridiem = am;
//     }
//     if(minutes <= 9){
//         minutes = `0${minutes}`
//     }
//     let time = `${hours}:${minutes} ${meridiem}`
//     return time;
// }


// io.on('connection', socket => {
//     socket.on('new-user-joined', name => {
//         // console.log("New user ", name)
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined', name);
//     });

//     socket.on('send', message => {
//         socket.broadcast.emit('receive', {message: message, name: users[socket.id],time: time()})
//     });

//     socket.on('disconnect', () => {
//         socket.broadcast.emit('left', users[socket.id])
//         delete users[socket.id];
//     });

// })

console.log("index file working");