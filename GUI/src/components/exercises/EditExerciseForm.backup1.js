// THIS IS NOT CORRECT!


import React from 'react';
class EditExercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          exerciseName: props.exerciseName,
          exerciseCategory: props.exerciseCategory,
          exerciseDescription: props.exerciseDescription
        };
    }

    changeExerciseName(ev) {
        console.info(ev.target.value)
        this.setState(
            {exerciseName: ev.target.value}
        )
      }

     changeExerciseCategory(ev) {
        console.info(ev.target.value)
        this.setState(
            {exerciseCategory: ev.target.value}
        )
      }

      changeExerciseDescription(ev) {
        console.info(ev.target.value)
        this.setState(
            {exerciseDescription: ev.target.value}
        )
      }

      updateParent(){
          this.props.updateEvent(
            {
                arIndex: this.props.arIndex,
                exerciseName: this.state.exerciseName,
                exerciseCategory: this.state.exerciseCategory,
                exerciseDescription: this.state.exeerciseDescription
            }
          );
      }

      deleteParent(){
        this.props.deleteEvent(
            {
                arIndex: this.props.arIndex
            }
          );
      }
  
    render() {
      return (
        <div className="editExercise">
            <h2>Edit Exercise</h2>
            <div>
                <label>Exercise Name</label>
                <input type="text" id="exerciseName" value={this.state.exerciseName} onChange={(ev) => this.changeExerciseName(ev) }  />
            </div>
            <div>
                <label>Exercise Category</label>
                <input type="text" id="exerciseCategory" value={this.state.exerciseCategory} onChange={(ev) => this.changeExerciseCategory(ev) }  />
            </div>
            <div>
                <label>Exercise Description</label>
                <input type="text" id="exerciseDescription" value={this.state.exerciseDescription} onChange={(ev) => this.changeExerciseDescription(ev) }  />
            </div>
            <div>
                <button className="btn edit" onClick={(ev) => this.updateParent() }>Update</button>
            </div>
            <div>
                <button className="btn del" onClick={(ev) => this.deleteParent() }>Delete</button>
            </div>
        </div>
      );
    }
  }

  export default EditExercise;