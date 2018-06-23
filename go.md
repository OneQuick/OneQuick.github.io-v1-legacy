---
layout: index
title: jump page
sitemap: false
---

<script>
var list = {
	'home': '/',
	'feedback': '/feedback',
	'docs': '/docs',
	'support': '/support',
	'contact': '/support',
	'change-log': '/download#change-log',
}

var jump = location.search.substring(1);
if(jump != "" && jump != "undefined") {
	location = list[jump];
}
</script>