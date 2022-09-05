---
layout: ../../layouts/Post.astro
title: "How to create a frontmatter snippet in VS Code"
metaTitle: "How to create a frontmatter snippet in VS Code"
metaDesc: How to create snippets for your markdown in Visual Studio Code to save time and reduce typographic errors
image: /images/snippet-example.png
date: 2022-09-05
tags: 
- astro
- visual studio code
top: false
---

I needed to speed up the way in which I start a new article on this blog as I always find myself referring to an old article to copy and paste the frontmatter across, which has become a bit annoying and tedious. Snippets are an excellent feature in VSC and I don't use them enough, so that was that, time to set at least one up.

1. CMD+SHIFT+P / CTRL+SHIFT+P
2. Type in snippets when the drop-down appears
3. Select markdown.json
4. Paste the code below, in to the file

```json
{
	"frontmatter": {
		"prefix": "frt",
		"body": [
			"---",
			"layout: ../../layouts/Post.astro",
			"title: $1",
			"metaTitle: $2",
			"metaDesc: $3",
			"image: /images/$4.jpg",
			"date: $5",
			"tags: $6",
			"- hampshire",
			"top: false",	
			"---"
		]
	}
}
```

So the next time I create a markdown file in my posts folder, type in "frt" and hit enter. You can tab through the entries and type in the field data nice and easy!