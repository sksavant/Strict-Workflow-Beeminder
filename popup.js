chrome.runtime.sendMessage({popupOpen: true});
var BGPage = chrome.extension.getBackgroundPage();

function saveComment () {
	var comment = document.getElementById('comment').value;
	chrome.runtime.sendMessage({comment: comment});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click',saveComment);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	if (message.displayComment) {
		document.getElementById('comment').value = message.displayComment;
	}

});
