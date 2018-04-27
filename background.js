
chrome.alarms.create("the20",{periodInMinutes: 20})

chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
        if (btnIdx === 0) {
            chrome.notifications.clear(notifId);
        }
    
});

function currTime(){
	var d = new Date();
	var ampm = d.getHours() >= 12 ? 'pm' : 'am';
	var hour = d.getHours() % 12;
	if (hour === 0)
		hour = 12;
	var minute = d.getMinutes();
	var second = d.getSeconds();
	return hour + ":" + minute + ":" + second;
}

chrome.alarms.onAlarm.addListener(function(){
		chrome.notifications.getAll(function(notifs){
			for (var notification in notifs){
				chrome.notifications.clear(notification);
			}
		});
		
		
		
		var  NotificationOptions = {
			type: "basic",
			title: "Take a break!",
			iconUrl: "icon19.png",
			message: "Look 20 feet away for 20 seconds!",
			contextMessage: currTime(),
			eventTime: Date.now(),
			requireInteraction: true,
			buttons: [{
				title: "I did it!",
				iconUrl: "icon19.png"
			}],
		};
		console.log(Date.now());
        chrome.notifications.create(NotificationOptions);
    });