
var options= {

	type:"basic",
	title:"Make sure to take care of yourself!",
	message:"It's time to meditate! Try some of the videos in our meditation section.",
	iconUrl:"notification.png"

};






chrome.notifications.create(options, callback);
	console.log("Popup done!");



function callback() {
    alert("hello");
}