import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const exercises = [
      {name: "Foo", content: "foobar"},
      {name: "Foo2", content: "foobar foobar"},
      {name: "Foo3", content: "foobar times 3"},
    ].map(e=>{e["selected"]=false;return e}); 
    this.state = {
      exercises: exercises
    };
  }
  toggle(exercise_index) { return () => {
    var exercises = this.state.exercises;
    exercises[exercise_index].selected = !exercises[exercise_index].selected;
    this.setState({exercises:exercises});
  }}
  selected_exercise_content() {
    return this.state.exercises.filter(e=>e.selected).map(e=>e.content).join("\n\n");
  }
  render() {
    return (
      <div className="App">
        <div>
          <ul>
           {this.state.exercises.map((exercise,index) => {
             return <li><label><input type="checkbox" checked={exercise.selected} onClick={this.toggle(index)}/>{exercise.name}</label></li>
           })}
          </ul>
          <form action="https://www.overleaf.com/docs" method="post" target="_blank">
            <input id="encoded_snip" type="hidden" name="encoded_snip" value={this.selected_exercise_content()} />
            <input type="submit" value="Open in Overleaf"/>
          </form>
          <pre>{this.selected_exercise_content()}</pre>
        </div>
      </div>
    );
  }
}

export default App;
