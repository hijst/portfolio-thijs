Hi there, welcome to my first blog on [thijsvisser.dev](https://www.thijsvisser.dev)!
On here, I plan to
blog about software engineering, tech, career, and who knows: maybe some of my personal interests besides code?
As per tradition, this first post is going to
cover how this portfolio website was built.  


## Frameworks

At my job, I got some experience using Angular and React, but have not gotten very proficient
at either.
So, obviously, I will take this opportunity to deepen my skills in one of those when
creating this portfolio, right? ... right?

Sike!
I'm using `SvelteKit`, diving in the deep once more. 
At this point in my career I am
trying out new things as often as / more than I can handle, and preferably use things that make me excited to code.  

### SvelteKit

SvelteKit is a web framework using `Svelte` (duh) as its component framework and `Vite` as its build
tool. It was made by Rich Harris, the creator of Svelte himself. As for the difference between Svelte
and SvelteKit, he said: "If Svelte is like React, then SvelteKit is like Next".
In Svelte, you write your code in `.svelte` files,
which consist of three sections that we should all be
familiar with: the HTML, the CSS and the Javascript (or Typescript in this case).

While I have enjoyed working with React, sometimes it feels like a framework that consists of a bunch of
ad-hoc decisions slapped together with duct tape. I got interested after seeing some Svelte examples because
to me it looked like an intuitive way to combine the three parts mentioned above.  


### SkeletonUI

SkeletonUI is a UI framework made for SvelteKit that makes use of `Tailwind`.
I've been loving Tailwind, and was enthusiastic about the look of the components in Skeleton.
I'm neither a great designer nor a CSS wizard 🪄, so I'm more than happy to let Skeleton do
the heavy lifting for me here.


I can agree with the sentiment that tailwind can make your HTML code look ugly at times,
but since I run this project alone, and most of the styles come from Skeleton, it is not a problem for me.
The majority of styles I apply myself are related to positioning, and for those tags I found it really nice to see them 
right there in my HTML.

The background, colors, header, footer, fonts, and light switch are examples of elements I got from Skeleton.
If I ever want to change the look and feel of the page, I can simply modify my Skeleton theme and all should
still look great and coherent!

## Setting up the project

Setting up a project with SvelteKit + SkeletonUI is simple as can be with the Skeleton CLI, just run:

```zsh
npm create skeleton-app@latest my-skeleton-app
```
<br>
And don't forget to go for the Typescript option 😉.  

SvelteKit uses file-based routing, and my `src` package for this site looks something like this:

```sveltehtml
├── app.css
├── app.d.ts
├── app.html
├── app.postcss
├── lib
└── routes
    ├── +layout.svelte
    ├── +layout.ts
    ├── +page.svelte
    └── blog
        ├── +page.svelte
        ├── [slug]
        │   ├── +page.svelte
        │   └── +page.ts
        └── stores
            └── posts.store.ts

```

The `posts.store.ts` file contains references to slugs and other metadata of blogposts such as this one.
The posts themselves are written in markdown files,
and located in the `static/blog` directory.

One of the attributes on a post is `isPublished`, which enables me to write many posts in advance, commit them,
and publish them later.

## Deployment

I use [Netlify](https://www.netlify.com/)
to automatically redeploy whenever I push to my [GitHub repo](https://github.com/hijst/portfolio-thijs).
This is as easy as having a `netlify.toml` file in my projects directory:

```toml
[ build ]
    command = "npm run build"
    publish = "build"
```



