chrome.runtime.sendMessage({popupOpen: true});
var BGPage = chrome.extension.getBackgroundPage();

function saveComment () {
	var comment = document.getElementById('comment').value;
	BGPage.logComment(comment);
	chrome.runtime.sendMessage
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click',saveComment);
});
