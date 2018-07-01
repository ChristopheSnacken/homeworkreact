import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import { chooseToppings } from '../actions/index';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';


import './toppings.css'

import FormLabel from '@material-ui/core/FormLabel';

import { toppings } from '../products'



class ChooseToppings extends PureComponent  {
  constructor(props) {
    super(props)
    this.state = {
      toppings: [],

    }
  }

  handleChange = event => {
    const { toppings } = this.state
    if (toppings.length < 3) {

      const choosenToppings = [...toppings, event.target.value]
      this.setState({ toppings: choosenToppings})
      this.props.chooseToppings(choosenToppings)
    } else {
      const choosenToppings = [toppings[1],toppings[2], event.target.value]
        this.setState({ toppings: choosenToppings})
        this.props.chooseToppings(choosenToppings)

      }

  };


  render() {


    return (
      <div >



        <FormControl component="fieldset" required >
          <FormLabel component="legend">TOPPINGS</FormLabel>
          <RadioGroup
            aria-label="base"
            name="base"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          >
            {toppings.map(topping => {
              return (
                <FormControlLabel value={topping} control={<Radio color="primary"/>} label={topping} />
              )})}

          </RadioGroup>
        </FormControl>





      </div>
    );
  }
}

ChooseToppings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};



export default connect(null,  { chooseToppings })(ChooseToppings);
