const h = require('react-hyperscript')
const React = require('react')

const Guess = React.createClass({
  getInitialState: function () {
    return {
      guess: '',
      number: '',
      userNumber: '',
      cpuNumber: ''
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
  getRand: function(l,h){
    return Math.floor(Math.random() * (h - l + 1)) + l;
  },
  genNumber: function (e) {
    e.preventDefault
    var ranInt =  this.getRand();
    this.setState ({
      number: ranInt,
      guess: this.state.guess
    })
  },
  compareNum : function (e) {
    e.preventDefault
      if (this.state.number === this.state.guess) {
      alert('You\'re right!')
      } else {
      alert('Try again!')
    }
  },
  chooseNumber: function(e){
    console.log(e.target.value)
    this.setState({
      userNumber: parseInt(e.target.value),
      cpuNumber: this.state.cpuNumber
    })
  },
  cpuGuess: function(e){
    if(e){
      e.preventDefault
    }
    var num = this.getRand(1,10)
    if(this.state.userNumber === num){
      alert('You got it!')
    }else{
      alert('you got it wrong')
      var hint = prompt("Higher or Lower?")
      this.cpuGuess()
    }

  },
  render: function () {
    return (
    h('div', [
      h('form.pa3', [
        h('input', {
          onChange: this.updateGuess,
          placeholder: 'Guess 1 - 10',
        }),
        h('button.pill', {
          onClick: this.compareNum,
        }, 'Guess!'),
        h('button.pill', {
          onClick: this.genNumber
        }, 'Get Number')
      ]),
      h('form.pa3',[
        h('input',{
          onChange: this.chooseNumber,
          placeholder: "select 1-10",
        }),
        h('button',{
          onClick: this.cpuGuess
        },'Computer Guess')
      ])
    ])
  )}
})

module.exports = Guess


// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower
