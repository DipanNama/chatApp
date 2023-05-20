
// // const socket = io("https://chatapp-production-1db7.up.railway.app",{ transports : ['websocket'] })

// const form = document.getElementById("send-container")
// const messageInput = document.getElementById("messageInput")
// const messageContainer = document.querySelector(".container")



// const append = (message,position,time) => {
//     const messageElement = document.createElement('div');
//     const timeElement = document.createElement('label')
//     messageElement.innerText = message;
//     timeElement.innerText = time;
//     messageElement.classList.add('message')
//     timeElement.classList.add('time')
//     messageElement.classList.add(position)
//     messageElement.append(timeElement)
//     messageContainer.append(messageElement)
// }

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
//         meridiem = "am";
//     }
//     if(minutes <= 9){
//         minutes = `0${minutes}`
//     }
//     let time = `${hours}:${minutes} ${meridiem}`
//     // console.log(time)
//     return time;
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const message = messageInput.value;
//     append(`You: ${message}`, 'right', time())
//     socket.emit('send', message)
//     messageInput.value = ''
//     messageContainer.scrollTo(0, messageContainer.scrollHeight);
// })


// // Getting the username out of the URLparameters

// const data = window.location.search;
// const urlParams = new URLSearchParams(data);
// const name = urlParams.get('username');
// // const name = prompt("Enter your name to join: ");
// socket.emit('new-user-joined',name);

// socket.on('user-joined', name => {
//     if(name === null){
//         console.log("Error")
//     }
//     else{
//         append(`${name} joined the chat`, 'left', time())
//     }
// })

// socket.on('receive', data => {
//     if(data.name === null){
//         console.log("Error")
//     }
//     else{
//         append(`${data.name}: ${data.message}`, 'left', data.time)  
//     }
// })

// socket.on('left', name => {
//     if(name === null){
//         console.log("Error")
//     }
//     else{
//         append(`${name} has left the chat`, 'left', time())  
//     }
// })

console.log("client file working");