const h = require('react-hyperscript')
const React = require('react')

const Guess = React.createClass({
  getInitialState: function () {
    return {
      guess: '',
      number: '',
      cpuNumber: '',
      low: 1,
      high: 10
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
    // if low
    //return Math.floor(Math.random() * (this.userNumber - (cpuNumber + 1) + 1)) + (cpuNumber + 1);
    // if higher
    //return Math.floor(Math.random() * ((cpuNumber - 1) - this.userNumber + 1)) + (this.userNumber + 1);

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
  startGame: function (e) {
    e.preventDefault
    this.setState({
      cpuNumber: this.getRand(1,10),
      high: this.state.high,
      low: this.state.low
    }, _ => {
      alert(this.state.cpuNumber)
    })
  },
  updateLower: function (e) {
    e.preventDefault
    var num = this.state.cpuNumber
    this.setState({
      high: this.state.cpuNumber - 1,
      low: this.state.low,
      cpuNumber: this.getRand(this.state.low, num - 1)
    }, _ => {
      alert(this.state.cpuNumber)
    })
  },
  updateHigher: function (e) {
    e.preventDefault
    var num = this.state.cpuNumber
    this.setState({
      high: this.state.high,
      low: this.state.cpuNumber + 1,
      cpuNumber: this.getRand(num + 1, this.state.high)
    }, _ => {
      alert(this.state.cpuNumber)
    })
  },
  endGame: function (e) {
    e.preventDefault
    this.setState({
      high: 10,
      low: 1,
      cpuNumber: ''
    }, _ => {
      alert('You did it, computer.')
    })
  },

  // cpuGuess: function(e){
  //   if(e){
  //     e.preventDefault
  //   }
  //   var num = this.getRand(1,10)
  //   console.log(num)
  //   if (this.state.userNumber === num){
  //     alert('You got it!')
  //   } else {
  //     alert('you got it wrong')
  //     this.cpuGuess()
  //   }
  //
  // },
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
        h('button',{
          onClick: this.startGame,
        }, 'Start'),
        h('button',{
          onClick: this.endGame,
        }, 'Yes'),
        h('button',{
          onClick: this.updateLower,
        }, 'Lower'),
        h('button',{
          onClick: this.updateHigher,
        }, 'Higher')
      ])
    ])
  )}
})

module.exports = Guess


// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower
