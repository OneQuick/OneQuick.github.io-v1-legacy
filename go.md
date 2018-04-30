---
layout: index
title: jump page
---

redirect...

<script>
var list = {
	'home': '/',
	'feedback': '/feedback',
	'docs': '/docs',
	'change-log': '/download#change-log',
}

var jump = location.pathname.substring(4);
if(jump != "" && jump != "undefined") {
	location = list[jump];
}
</script>