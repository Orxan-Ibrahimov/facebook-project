let faceMenuListItems = document.querySelectorAll('.facemenu-list-item > a');
let chatBody = document.querySelector('.chat-body');
let message = document.querySelector('.chat-footer .textarea span');
let emojiBox = document.querySelector('.chat-footer .emoji-container');
let emoji = document.querySelector('.chat-footer #emoji');
let sendbtn = document.querySelector('#send');


window.addEventListener('load', function (params) {


    // submenu's open/close operation at faceMenulist
    faceMenuListItems.forEach(faceMenuListItem => {
        faceMenuListItem.addEventListener('click', function (params) {
            let subfacemenu = faceMenuListItem.nextElementSibling;
            if (subfacemenu.style.display != 'block')
                subfacemenu.style.display = 'block';
            else
                subfacemenu.style.display = 'none';
        });
    });

     //Send Message when click send button
     sendbtn.addEventListener('click', function(params) {
        params.preventDefault();
        if (message.textContent.length != 0){
            CreateButon(chatBody,message);
        }      

    });

    message.addEventListener('focus', function(params) {       
        //Send Message when user press Enter button at message input's onfocus     
        message.onkeypress = function(event) {
                 if (event.keyCode === 13) {
                event.preventDefault();

                if (message.textContent.length != 0){
                     CreateButon(chatBody,message);
                }                            
            }        
        }     
    });

    //emoji list Crete/remove operation
    emoji.addEventListener('click', function (event) {
        event.preventDefault();

        let emojiList = CreateEmojiList();
        if (emoji.parentElement.querySelector('.emoji-container') == null)
            emoji.parentElement.appendChild(emojiList);
        else
            emoji.parentElement.querySelector('.emoji-container').remove();
    });
});

// Function that Create message element in chat 
function CreateButon(list,input) {
    let messageBox = document.createElement('div');
    messageBox.classList.add('message-sent');

    let message = document.createElement('p');
    message.classList.add('message');
    message.textContent = input.textContent;

    messageBox.appendChild(message);

    list.appendChild(messageBox);
}

//Function that Create emoji list 
function CreateEmojiList() {
    let emojiList = document.createElement('ul');
    emojiList.classList.add('emoji-container');

    for (let index = 128512; index < 128568; index++) {
        let emoliListItem = document.createElement('li');
        emojiList.appendChild(emoliListItem);


        let emojiLink = document.createElement('a');
        emoliListItem.appendChild(emojiLink);

        let emojiSpan = document.createElement('span');
        emojiSpan.innerHTML = '&#' + index;
        emojiLink.appendChild(emojiSpan);

        emojiLink.addEventListener('click', function (params) {
            message.textContent += emojiSpan.textContent;
        });

    }
    return emojiList;

}