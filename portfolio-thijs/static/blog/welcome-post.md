<br/>

Hi there, welcome to my first blog on [thijsvisser.dev](www.thijsvisser.dev)! On here, I plan to
blog about software engineering, tech, career, and who knows: maybe some of my personal interests besides code?
As per tradition, this first post is going to
cover how this portfolio website was built.  


## Frameworks

At my job I got some experience using Angular and React, but have not gotten very proficient
at either.
So obviously I will take this opportunity to deepen my skills in one of those when
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
ad-hoc decisions slapped together with duct tape. I got hyped after seeing some Svelte examples because
to me it looked like an intuitive way to combine the three parts mentioned above.  


### SkeletonUI

SkeletonUI is a UI framework made for SvelteKit that makes use of `Tailwind`.
I've been loving Tailwind, and was enthusiastic about the look of the components in Skeleton.
I'm neither a great designer nor a CSS wizard 🪄, so I'm more than happy to let Skeleton do
the heavy lifting for me here.

## Setting up a project

Setting up a project with SvelteKit + SkeletonUI is simple as can be with the Skeleton CLI, just run:

```zsh
npm create skeleton-app@latest my-skeleton-app
```
<br>
And don't forget to go for the Typescript option 😉
