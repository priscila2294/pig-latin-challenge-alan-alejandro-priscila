import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "echo through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"

      })

    //  console.log("vowelsArray:", vowelsArray)

      let firstVowel = vowelsArray[0]

      //console.log("firstVowel", firstVowel);

      let vowelLocator = currentWord.indexOf(firstVowel)

      console.log("vowelLocator", vowelLocator);
      if(vowelLocator === 0 ){
        return `${ currentWord }way`
        //trying to get it to check if there is a "q" in the spot before the first vowel
      } else if(vowelLocator > 0 && currentWord.charAt(vowelLocator - 1) === "q" && firstVowel === "u") {
        let secondHalfQ = currentWord.substring(vowelLocator + 1)
        let firstHalfQ = currentWord.substring(0, vowelLocator + 1)
console.log("secondHalf", secondHalfQ);
console.log("firstHalf", firstHalfQ);
        return  secondHalfQ + firstHalfQ + "ay"
      }else if(vowelLocator > 0){
        let secondHalf = currentWord.substring(vowelLocator)
        let firstHalf = currentWord.substring(0, vowelLocator)

        return secondHalf + firstHalf + "ay"
      }
//if(vowelsArray !== ){

//}return add y to end
      // your code here!
//The first condition that we should address is if a word starts with a vaule we should just concat "way" at the end of the word using a + sign
// Indexof to find the first vowel.
// Then we would substring from that point on to get the rest of the word
// Then we somehow push the first part of the word before  the first vowel into the back of the array to make the word in pig latin
      // Remember: console.log is your friend :)


      // ACTION ITEM: update the value being returned to reflect the output of your code
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }


  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "echo through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    // inside the return is all our JSX tags
    return (
      <React.Fragment>
        <h1>Pig Latin Translator</h1>
        <img
          src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
          alt="pig with butcher cut names in pig latin"
          id="butcherPig"
        />
        <div id="box">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            id="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <p>{ this.state.phraseTranslated }</p>
        <footer>Coded by Alan Priscila Alejandro</footer>
      </React.Fragment>
    )
  }
}

export default App
