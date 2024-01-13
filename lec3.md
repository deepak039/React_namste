npx parcel index.html

what does this command means ->
this command means that we are executing the npm pakage parcel and we give source file as index .html

What is eact element?
=> 

Jsx and react are are differnt nd itnot part odf react we can also write code without jsx simply make it easier

## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.



 React code without JSX 


 const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React"
);

same thing with jsx we can write as 
//with using jsx
const jsxheading = <h1>Namste React</h1>L

JSX has html like syntax

const jsxheading = <h1>Namste React</h1> => This is not valid javascript code
### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```




// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => It basically create react element
// REeactDOm.createElement() => convert react element ito html

// .render() will replace  not append

// without using Jsx
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

//with using jsx
// JSX is not html
// html like syntax

// JSX (transpiled before it reaches the js engine) - parcel -Babel(convert JSX to JAVASCRIPT code )
// JSX => React>createElemet =>ReactElemnt-JS Object => HTMLElement(render)

// REactElemnt
const jsxheading = <h1>Namste React</h1>;
// console.log(jsxheading);

// React Component

// class based component - OLD
// function based component -NEW

// React functional compoenent => is just javascript function
// React functional component is a function that return jsx code that it !

// const fn=()=> true;

// this two fun and fun2   are same

// const fn2 =() => {
//   return true;
// }

const Headingcomponent1 = () => {
  return <h1>Namste react functional componenet</h1>;
};

const Headingcomponent2 = () => <h1>Namste react functional componenet</h1>;

const Title = () => <h1 className="head">Namste react title componenet</h1>;


{100+200} // can run any javascript code inside it {}


// YOUR CODE READABLE BECAUSE OF JSX NOT REACT





const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      { jsxheading} 
      <h1 className="heading">Namste react functional componenet</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent></HeadingComponent>);
