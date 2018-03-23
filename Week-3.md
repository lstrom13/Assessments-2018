### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
//- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications
//- React is a flexible library that plays the role of V in an MVC framework

//removed from list

 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 the smart(logic)tells the dumb(display) what to look like and what to do.

 //Googled Answer
 could not find anything on Google

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 yarn add, adds dependencies into your package.json file

 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component{
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
              ]
        }
      }

      render() {
        let recipes = this.state.recipes.map(function(recipe){
          return(
            <li key={recipe.name}>{recipe.name}</li>
          )
        })
        return (

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 attributes
  elements
  tables

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
state is a component that holds information from the class

 //Googled Answer
 A React component is like a state machine that represents an user interface. Every user action potentially triggers a change in that state machine. Then, the new state is represented by a different React element.

 React stores the component state in this.state. You can set the initial value of this.state in two different ways. Each one corresponding to the way you create the component:

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
props are set by the parent and the state is set by the child and the child can only grab from the state component

 //Googled Answer

 There are two types of data that control a component: props and state. Props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

  Props
  Most components can be customized with different parameters when they are created. These creation parameters are called props.

  Your own components can also use props. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Refer to this.props in your render function:

  import React, { Component } from 'react';
  import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

  class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }

  class LotsOfGreetings extends Component {
    render() {
      return (
        <View>
          <Pano source={asset('chess-world.jpg')}/>
          <View style={{transform: [{translate: [0, 0, -3]}]}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
          </View>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
  Using name as a prop lets us customize the Greeting component, so we can reuse that component for each of our greetings.

  State
  In general, you should initialize state in the constructor, and then call setState when you want to change it.

  import React, { Component } from 'react';
  import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

  class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = {showText: true};

      // Toggle the state every second
      setInterval(() => {
        this.setState({ showText: !this.state.showText });
      }, 1000);
    }

    render() {
      let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text>{display}</Text>
      );
    }
  }

  class BlinkApp extends Component {
    render() {
      return (
        <View>
          <Pano source={asset('chess-world.jpg')}/>
          <View style={{transform: [{translate: [0, 0, -3]}]}}>
            <Blink text='I love to blink' />
            <Blink text='Yes blinking is so great' />
            <Blink text='Why did they ever take this out of HTML' />
            <Blink text='Look at me look at me look at me' />
          </View>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
  State works the same way as it does in React, so for more details on handling state, you can look at the React.Component API.
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
