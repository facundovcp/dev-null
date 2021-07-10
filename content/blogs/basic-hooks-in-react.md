---
title: React.js beginner Part 1 - Library Introduction and how React works
subtitle: This article will cover some background of React, advantages of his usage, how react works and basic concepts to understand better this JavaScript library.
date: 2021-07-10
slug: react-bgnner-p1-react-intro-hooks
author: Facundo Lopez
rating: 5
serie: Reactjs
# coverImage: https://cdn.sanity.io/images/55mm68d3/production/98d581fb1463a4ec94de31aa9ee7bb95ebc9c486-1400x933.jpg?h=600&fm=jpg&q=70
---

# React.js beginner Part 1 - Library introduction.

## The article will cover some background of React, advantages of his usage, how react works under the hood, and basic concepts to understand better this JavaScript library.

<!-- ![TODO: provide alt](https://cdn.sanity.io/images/55mm68d3/production/98d581fb1463a4ec94de31aa9ee7bb95ebc9c486-1400x933.jpg?h=600&fm=jpg&q=70)</div> -->

---

<div>

<!-- ## Table of contents:

- React.js library background.
- Advantages of using React.js.
- Principal Hooks overview: -->


## What is React.js?


React.js its a library made to build web applications. As a result, it's compared with other tools that developers use to build apps, like Angular, Vue, and many others.

Facebook created this library in 2011 for their own use. They also created JSX syntax.
React.js doesn’t use templates.Traditionally, web application UIs are built using templates or HTML directives.
React.js approaches building user interfaces differently by breaking them into components.

### > Why is React a library and not a framework?

Let's look at a project like Angular, which shares the same purpose as React. When you set up an Angular project, it is bootstrapped with nearly every single thing that you'll need to make a complete, large-scale app.
But what makes React a library and not a framework?
In short, everything that you need to make a complete application is included in your Angular project when it's generated. But that is not the case with React, **It relies on different libraries and packages.**
There is a robust ecosystem of React libraries that you can add to your React project to achieve whatever you're looking for. For example for HTTP request you could use promise based Axios package.

### > Why should we use React?
At this point you could be wondering why you should be using React. This is my opinion about why I use react:
- **React is Flexible:**


  Thanks to React's popularity and widespread usage, there is a ecosystem of React libraries that anyone can add and use on React projects. This helps to acchieve whatever you're looking for,
  we can say that there's almost one package or library for everything you will need.
> *"Learn React Once and Write Everywhere"*


One think that I would like to highlight from React is that it has a vast variety of platforms to build quality UIs. You could use React and **Electron** to create Desktop applications that are going to run on mac and windows, if you'r needing to create a mobile App **React Native** its going to also build on iOS and Android. Another example is this page, using React, **Gatsby** and **GraphQl** we can manage and generate static pages based on markdowns.

- **Reusable Components:**

Traditionally, developers couldn't manage reuse components effectively, because changes to any one
of the components would affect all copies of that component.
React.js isolates all components. This means you can have differents styles for each reusable component if you need it. This change will not affect to every component being used. This provides a reduction in development time.

- **Virtual DOM:**


Traditional DOM has an issue on how it constructs the DOM when it's process a change, it re-write the entire DOM tree. Modern websites and applications have complex and large DOM trees. Every time inputs or queries are made, a real DOM has to rewrite all the page, this is equal to waste of memory.

The virtual DOM is more efficient, performs faster. Instead of rewriting the entire DOM tree every time a change is made by an user, a virtual DOM only updates the element being used.
Is the primary reason this JavaScript framework can create high-performance UIs.

## How React Works Under the Hood:

At its core, react basically maintains a DOM tree for you. You describe what you want your tree to look, and react does the job of computing the differences between your tree and the real DOM and updates the DOM accordingly. All React does is helps you manage these DOM nodes.
This is a declarative approach to programming as opposed to vanilla Javascript where you manually have to mutate the DOM.
As a Library, React work with an entire network of tools working together. In the common scenario its going to be **Webpack**, **npm**, **node**, **JSX** and **Babel** but there are alternatives.


  - **React and JSX:**


JSX contribute to write HTML code on an easy way. It allows to put HTML on Javascript code and also use Javascript inside html. It looks like everything in the HTML tags but this is all about Javascript.


```javascript
//This is a simple JSX code inside the React component return method.
return (
  <div className="title">
   <h1>Hello World!</h1>
  </div>
 );
```
```javascript
//Babel Transform into Javascript code
return React.createElement(
  "div",
  null,
  React.createElement("h1", { class: "title" }, "Hello World!")
 );
```

In this way React Babel preset transform JSX code into javascript code. After import, React create an element like JSX code using the createElement method.
In react, app JSX babel preset will transform these expressions into actual Javascript code.


  - **React and Babel:**
  
  A lot of browsers don’t support the very newest javascript features. This time works Babel to transforms the newest features into a backward-compatible version of JavaScript in current and older browsers or environments.

```javascript
//ES6 code
const sum = (a,b)=>{
  return a+b;
}

//Babel compile
var sum = function sum(a, b) {
  return a + b;
};
```

  
- **React and Webpack:**
  
  Webpack is a module bundler for Javascript applications. It takes modules with dependencies and generates static assets representing those modules. It also brings a Dev server to use.
  In React, webpack traverses the file tree, accesses the source directory, and groups the files into multiple files.
  Every file is treated as a module. Also, the webpackdev server dependencies get these files and packages. It also keeps them from memory and from the server to the dom browser.


- **React, Node and npm:**


Node will bring the development server and environments configurations needed to use the React app, on production or develop.
Node Package Manager (npm) is a package manager through which one can install various packages ( modules ) needed for web development. It’s a CLI tool which gives access to it’s online repository which contains thousands of open-source libraries and tools.

## Resources

React.js documentation - _Introducing Hooks_: [https://reactjs.org/docs/hooks-intro.html]([https://reactjs.org/docs/hooks-intro.html)

React.js documentation - _Why did we build React.js?_: [https://reactjs.org/blog/2013/06/05/why-react.html](https://reactjs.org/blog/2013/06/05/why-react.htmll)
