setTimeout(() => {
  let btnWhatsapp = document.getElementById("btnOnlMsg");
  btnWhatsapp.style.visibility = "visible";
}, 1000);

const openMessageBox = () => {
  let messageBox = document.getElementById("messageBox");
  let btnOnlMsg = document.getElementById("btnOnlMsg");
  btnOnlMsg.style.visibility = "hidden";
  messageBox.style.visibility = "visible";
  document.getElementById("messageAlert").style.visibility="hidden";
  messageCount=messages.length;
};

const closeMessageBox = () => {
  document.getElementById("messageBox").style.visibility = "hidden";
  document.getElementById("btnOnlMsg").style.visibility = "visible";
  messageCount=messages.length;
};

let messages = [
  {
    userName: "Admin",
    messageText: "Merhaba size nasıl yardımcı olabilirim",
  },
  {
    userName: "Murat",
    messageText: "merhaba bir konu üzerinden bilgi almak istiyorum",
  },
  {
    userName: "Admin",
    messageText: "Tabi buyurun sizi dinliyorum",
  },
  {
    userName: "Murat",
    messageText: "bu kodları nasıl yazıyorsunuz?",
  },
  {
    userName: "Admin",
    messageText: "İzleyin ve görün",
  },
];

const messagess = (messages) => {
  messages.forEach((message) => {
    let messageLine = document.createElement("p");
    messageLine.classList = "messageLine";
    messageLine.innerText = message.messageText;

    if (message.userName == "Admin") {
      messageLine.style.alignSelf = "flex-start";
      messageLine.style.backgroundColor = "beige";
    } else {
      messageLine.style.alignSelf = "flex-end";
      messageLine.style.backgroundColor = "lightgreen";
    }

    document.getElementById("messageBoxContent").appendChild(messageLine);
  });
};

const showMessage = () => {
  let btnWhatsappMessage = document.getElementById("whatsappMessage");
  setTimeout(() => {
    btnWhatsappMessage.style.visibility = "visible";
  }, 300);
};

const messageResetAndWriting = () => {
  document.getElementById("messageBoxContent").innerHTML = "";
  document.getElementById("messageBoxContentAdmin").innerHTML = "";
  messagessAdmin(messages);
  messagess(messages);
};

const sendMessage = () => {
    let messageText = document.getElementById("txtMessage");
    messages.push({ userName: "Murat", messageText: messageText.value });
    messageText.value = "";
    messageResetAndWriting();
  };
  

const sendMessageAdmin = () => {
  let messageTextAdmin = document.getElementById("txtMessageAdmin");
  messages.push({ userName: "Admin", messageText: messageTextAdmin.value });
  
  document.getElementById("messageAlert").style.visibility="visible"
  document.getElementById("messageAlert").innerHTML=messageTextAdmin.value;
  messageResetAndWriting();
  messageTextAdmin.value = "";
};

const messagessAdmin = (messages) => {
  messages.forEach((message) => {
    let messageLine = document.createElement("p");
    messageLine.classList = "messageLine";
    messageLine.innerText = message.messageText;

    if (message.userName != "Admin") {
      messageLine.style.alignSelf = "flex-start";
      messageLine.style.backgroundColor = "beige";
    } else {
      messageLine.style.alignSelf = "flex-end";
      messageLine.style.backgroundColor = "lightgreen";
    }

    document.getElementById("messageBoxContentAdmin").appendChild(messageLine);
  });
};


let messageCount = 4;
setInterval(() => {
  if (document.getElementById("messageBox").style.visibility!="visible" && messages.length > messageCount) {
    let messageAlert = document.getElementById("messageAlert");
    messageAlert.innerHTML = messages[messages.length-1].messageText;
    if (messageAlert.style.visibility == "hidden")
    {messageAlert.style.visibility = "visible";}
    else messageAlert.style.visibility = "hidden";
  }
}, 3000);

messageResetAndWriting();


