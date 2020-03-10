# Headless WordPress + React with Frontity

Proof of Concept of how Frontity can simplify the development of a project using Headless Wordpress + React
The goal of this repo is to compare the code explained in this set of articles

1. [Headless WordPress: Loading Posts & Pagination](https://www.ibenic.com/headless-wordpress-loading-posts-pagination/)
2. [Headless WordPress: React Router Pagination](https://www.ibenic.com/headless-wordpress-react-router-pagination/)
3. [Headless WordPress: Displaying a Single Article](https://www.ibenic.com/headless-wordpress-displaying-articles/)

with the code needed for the same type of project with Frontity

## The project

After, the three articles the final project should have the following features

- use a Headless WP as the source od data (backend)
- display the list of posts (per pages)
  - cache results
  - display number of pages
  - go to specific page through proper route
- display a single post from a Headless WP (referencing it from its slug)
  - handle error when page is not found
  
## The `ibenic.com` implementation

In the [blog](www.ibenic.com), we can find a set of articles that explains how to achieve this project through the following articles

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

This last one (Headless WordPress: Displaying a Single Article) is the final the version of the project, so we're going to compare this [final version](https://github.com/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Displaying-Single-Article) w/ the frontity version

## The `frontity` implementation




- 📄 Based on → https://www.ibenic.com/headless-wordpress-displaying-articles/
- 🌎 Online → https://ibenic-headless-wordpress-demo-3.juanmaguitar.now.sh
- 🎁 CodeSandbox → https://codesandbox.io/s/github/frontity-juanmaguitar/ibenic-headless-wordpress-demo/tree/Headless-WordPress-Displaying-Single-Article