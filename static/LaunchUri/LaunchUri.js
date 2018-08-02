function launchUri (uri, successCallback, noHandlerCallback, unknownCallback) {
	var res, parent, popup, iframe, timer, timeout, blurHandler, timeoutHandler, browser;

	function callback (cb) {
		if (typeof cb === 'function') cb();
	}

	function createHiddenIframe (parent) {
		var iframe;
		if (!parent) parent = document.body;
		iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		parent.appendChild(iframe);
		return iframe;
	}

	function removeHiddenIframe(parent) {
		if (!iframe) return;
		if (!parent) parent = document.body;
		parent.removeChild(iframe);
		iframe = null;
	}

	browser = { isChrome: false, isFirefox: false, isIE: false };

	if (window.chrome && !navigator.userAgent.match(/Opera|OPR\//)) {
		browser.isChrome = true;
	} else if (typeof InstallTrigger !== 'undefined') {
		browser.isFirefox = true;
	} else if ('ActiveXObject' in window) {
		browser.isIE = true;
	}

	// Proprietary msLaunchUri method (IE 10+ on Windows 8+)
	if (navigator.msLaunchUri) {
		navigator.msLaunchUri(uri, successCallback, noHandlerCallback);
	}
	// Blur hack (Chrome)
	else if (browser.isChrome) {
		blurHandler = function () {
			window.clearTimeout(timeout);
			window.removeEventListener('blur', blurHandler);
			callback(successCallback);
		};
		timeoutHandler = function () {
			window.removeEventListener('blur', blurHandler);
			callback(noHandlerCallback);
		};
		window.addEventListener('blur', blurHandler);
		timeout = window.setTimeout(timeoutHandler, 500);
		window.location.href = uri;
	}
	// Catch NS_ERROR_UNKNOWN_PROTOCOL exception (Firefox)
	else if (browser.isFirefox) {
		iframe = createHiddenIframe();
		try {
			// if we're still allowed to change the iframe's location, the protocol is registered
			iframe.contentWindow.location.href = uri;
			callback(successCallback);
		} catch (e) {
			if (e.name === 'NS_ERROR_UNKNOWN_PROTOCOL') {
				callback(noHandlerCallback);
			} else {
				callback(unknownCallback);
			}
		} finally {
			removeHiddenIframe();
		}
	}
	// Open popup, change location, check wether we can access the location after the change (IE on Windows < 8)
	else if (browser.isIE) {
		popup = window.open('', 'launcher', 'width=0,height=0');
		popup.location.href = uri;
		try {
			// Try to change the popup's location - if it fails, the protocol isn't registered
			// and we'll end up in the `catch` block.
			popup.location.href = 'about:blank';
			callback(successCallback);
			// The user will be shown a modal dialog to allow the external application. While
			// this dialog is open, we cannot close the popup, so we try again and again until
			// we succeed.
			timer = window.setInterval(function () {
				popup.close();
				if (popup.closed) window.clearInterval(timer);
			}, 500);
		} catch (e) {
			// Regain access to the popup in order to close it.
			popup = window.open('about:blank', 'launcher');
			popup.close();
			callback(noHandlerCallback);
		}
	}
	// No hack we can use, just open the URL in an hidden iframe and invoke `unknownCallback`
	else {
		iframe = createHiddenIframe();
		iframe.contentWindow.location.href = uri;
		window.setTimeout(function () {
			removeHiddenIframe(parent);
			callback(unknownCallback);
		}, 500);
	}
}