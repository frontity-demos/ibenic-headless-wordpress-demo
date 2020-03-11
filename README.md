# Headless WordPress + React with Frontity

Proof of Concept of how Frontity can simplify the development of a project using Headless Wordpress + React
The goal of this repo is to compare the project explained in this set of articles

1. [Headless WordPress: Loading Posts & Pagination](https://www.ibenic.com/headless-wordpress-loading-posts-pagination/)
2. [Headless WordPress: React Router Pagination](https://www.ibenic.com/headless-wordpress-react-router-pagination/)
3. [Headless WordPress: Displaying a Single Article](https://www.ibenic.com/headless-wordpress-displaying-articles/)

with the code needed for the same type of project with Frontity

## The project

After, the three articles the final project should have the following features

- use a Headless WP as the source of data (backend)
- display the list of posts (per pages)
  - cache results
  - display number of pages
  - go to specific page through proper route
- display a single post from a Headless WP (referencing it from its slug)
  - handle error when page is not found
  
## The `create-react-app` implementation

At ibenic.com, we can find a set of articles that explains how to achieve this project through the following articles

1. [Headless WordPress: Loading Posts & Pagination](https://www.ibenic.com/headless-wordpress-loading-posts-pagination/)
2. [Headless WordPress: React Router Pagination](https://www.ibenic.com/headless-wordpress-react-router-pagination/)
3. [Headless WordPress: Displaying a Single Article](https://www.ibenic.com/headless-wordpress-displaying-articles/)

As I don't have access to the original code I have created an alternative version of the explanations given in each article

This implementation uses [`create-react-app`](https://create-react-app.dev/) to create the boilerplate needed to start coding w/ React

##### 1. Headless WordPress: Loading Posts & Pagination

- 📄 Original Article → https://www.ibenic.com/headless-wordpress-loading-posts-pagination/
- 💻 Code → https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Loading-Posts-Pagination
- 🌎 Online → https://ibenic-headless-wordpress-demo-1.now.sh/
- 🎁 CodeSandbox → https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Loading-Posts-Pagination

##### 2. Headless WordPress: React Router Pagination

- 📄 Original Article → https://www.ibenic.com/headless-wordpress-react-router-pagination/
- 💻 Code → https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-React-Router-Pagination
- 🌎 Online → https://ibenic-headless-wordpress-demo-2.now.sh/
- 🎁 CodeSandbox → https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-React-Router-Pagination

##### 3. Headless WordPress: Displaying a Single Article

- 📄 Original Article → https://www.ibenic.com/headless-wordpress-displaying-articles/
- 💻 Code → https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Displaying-Single-Article
- 🌎 Online → https://ibenic-headless-wordpress-demo-3.juanmaguitar.now.sh
- 🎁 CodeSandbox → https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Displaying-Single-Article

This last one (Headless WordPress: Displaying a Single Article) is the final the version of the project, so we're going to compare this [final version](https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Displaying-Single-Article) w/ the [frontity version](https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/frontity-codesandbox)

## The `frontity` implementation

- 💻 Code → https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/frontity-codesandbox
- 🎁 CodeSandbox → https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/frontity-codesandbox

To create the frontity version we've done...

#### 1. Create the boilerplate

Create the boilerplate w/ the command `npx frontity create frontity-implementation`

#### 2. Do a few changes in the code 

As the boilerplate install a default theme we can just adapt it to get the final behaviour we want

1. We've edited `frontity.settings.js` to add a new source of data and to remove elements of the menu

2. We've edited `packages/mars-theme/src/components/list/pagination.js` to add buttons per pages so we can go directly to a specific page (and add some styles)

And that's all! 🎉 These are all the changes we've done from the boilerplate to get the desired behaviour → https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/commit/9aefef69c40cbbadf617d53c16fe4b55080ff91d

## The comparison

Taking into account that frontity is a framework completely focused on the creation of apps using React + Headless WP, we've been able to get the behaviour we want with just [a few modifications](https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/commit/9aefef69c40cbbadf617d53c16fe4b55080ff91d) from the boilerplate 

Plus, with Frontity our app/site gets [more features by default](https://docs.frontity.org/frontity-features)

|                                    | create-react-app implementation | frontity implementation |
|------------------------------------|---------------------------------|-------------------------|
| connect react app to Headless WP   | ✅                               | ✅                       |
| pagination                         | ✅                               | ✅                       |
| access post by slug                | ✅                               | ✅                       |
| routes                             | ✅                               | ✅                       |
| cache requests                     | ✅                               | ✅ optimized!            |
| 404 not found                      | ✅                               | ✅                       |
| boilerplate focused on Headless WP | ❌                               | ✅                       |
| SSR                                | ❌                               | ✅                       |
| Best Lighthouse score              | ❌                               | ✅                       |
| SEO Head Tags              | ❌                               | ✅                       |


----

Oks, you've catched my attention 🧐
I'll give it a try to Frontity!! 🤠

But... **How do I know what changes I have to do in Frontity to get the behaviour I want?**

Well, The great thing about Frontity is that is completely focused in connecting React apps w/ Headless Wordpress so by default you get a starting point boilerplate w/ the typical behaviours you'll want in a React + Headless WP app (get info from WP API, pagination, access to a post by its slug, and more...)

From there you can start customizing the code to add more behaviours and create amazing sites and apps using the stack React + Headless WP

To know more about Frontity you can have a look at:

<ul>
  <li>📖 <strong>Docs</strong>: this is the place to learn how to build amazing sites with Frontity. <a href="https://docs.frontity.org/getting-started">Get started!</a></li>
  <li>👨‍👩‍👧‍👦 <strong>Community</strong>: use our forum to share any doubts, feedback and meet great people. This is your place too to share <a href="https://community.frontity.org/c/dev-talk-questions">how are you planning to use Frontity!</a></li>
  
</ul>

If you'd like to share your feedback or have any questions, feel free to reach out to us on our community forum - there you can directly mention my user [@juanma](https://community.frontity.org/u/juanma) so I get a notification right away 

You can also find me in:

- [![Generic badge](https://img.shields.io/badge/frontity_community-@juanma-blue.svg)](https://community.frontity.org/u/juanma)
- [![Generic badge](https://img.shields.io/badge/twitter-@juanmaguitar-green.svg)](https://twitter.com/juanmaguitar/)

