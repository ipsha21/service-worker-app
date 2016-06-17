var endpoint;
var text;

navigator.serviceWorker.register('service-worker.js')
  .then(function(registration){
		return registration.pushManager.getSubscription().then(
			function(subscription){
				if (subscription)
				{
					return subscription;
				}
				return registration.pushManager.subscribe({ userVisibleOnly: true });
			});

	}).then(function(subscription){
    console.log(JSON.stringify(subscription.toJSON()));
	});
