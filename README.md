# React + Redux Blog application

This small application is part of the code written while I attended [this great course](https://www.udemy.com/react-redux/) on React and Redux.

## Themes

There are many themes touched by this execise, and here comes a small list of what it's worth to remember for me.

#### React and Redux
React and Redux are two completeley separated frameworks with different goals. [React](https://reactjs.org/) is a great library "for building user interfaces", while [Redux](https://redux.js.org/) is a state container. They work great together, because React greatly benefits of a global state manager like Redux to separate the state-related logic from its blocks - or more precisely, containers.
To bind the two together, a 3rd library called `react-redux` is needed. It exposes a function called `connect` that is used just to *connect* a React component to the global state.

#### Axios
[Axios](https://github.com/axios/axios) is a tiny library created to provide a promise based HTTP client to any application. Inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) from AngularJS, it is a wonderful resource to make HTTP requests inside your application. Who doesn't do it nowadays? :)

#### Redux Form
[Redux Form](https://redux-form.com/) is a great way to manage a form's state into Redux, and it comes with a fantastic documentation! Just like `react-redux`, it provides a bridge between React and Redux, this time with the more specific goal of supporting everything form related.

#### React Router
[React Router](https://github.com/ReactTraining/react-router) is an easy way to map different routes on the same web application and serve the related content without forcing the browser to reload the entire page. It's important to remember to use the Switch component from React Router to avoid to load more than one route at a time.

## Getting Started
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/alcappello/react-blog.git
> cd react-blog
> npm install
> npm start
```
