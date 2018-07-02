import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseDrone } from '../actions'
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class ChooseDrone extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      drone: false
    }

  }

  handleChange(event) {
    const { drone } = this.state
    this.setState({ drone: !drone })
    this.props.chooseDrone(!drone)
  }





  render() {
   return (
     <div >


       <FormControl component="fieldset" >
         <FormLabel component="legend">DRONE DELIVERY OPTION:</FormLabel>
         <label>
         <Radio
          checked= {this.state.drone}
          onChange={this.handleChange.bind(this)}
          value={this.state.drone}
          name="radio-button-demo"
          aria-label="drone"
          label=" +10%"
        />
        YES PLEASE
        </label>

        {/* <label>
        <Radio
         checked= {!this.state.drone}
         onChange={this.handleChange.bind(this)}
         value={this.state.drone}
         name="radio-button-demo"
         aria-label="drone"
         label=" +10%"
       />
       HELL NO
       </label> */}



       </FormControl>

     </div>
   )
  }
}

  export default connect(null, { chooseDrone })(ChooseDrone)
