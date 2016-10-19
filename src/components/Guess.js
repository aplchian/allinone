const h = require('react-hyperscript')
const React = require('react')

const Guess = React.createClass({
  getInitialState: function () {
    return {
      guess: '',
      number: ''
    }
  },
  updateGuess: function (e) {
    this.setState ({
      guess: parseInt(e.target.value),
      number: this.state.number
    })
    console.log('guess', this.state.guess)
    console.log('number', this.state.number)
  },
  genNumber: function (e) {
    e.preventDefault
    var ranInt =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // console.log(ranInt)
    this.setState ({
      number: ranInt,
      guess: this.state.guess
    })
    // console.log(this.state)
  },
  compareNum : function (e) {
    e.preventDefault
      if (this.state.number === this.state.guess) {
      alert('You\'re right!')
      } else {
      alert('Try again!')
    }
  },
  render: function () {
    return (
    h('div', [
      h('form.pa3', [
        h('input', {
          onChange: this.updateGuess,
          placeholder: 'Guess 1 - 10',
          //value: this.state.guess,
        }),
        h('button.pill', {
          onClick: this.compareNum,
        }, 'Guess!'),
        h('button.pill', {
          onClick: this.genNumber
        }, 'Get Number')
      ])
    ])
  )}
})
module.exports = Guess

// have the computer randomly select number 1 - 10
// and have the user try to guess the number
// and the computer will respond higher or lower
// until

// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower

//
