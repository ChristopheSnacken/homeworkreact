import React, {PureComponent} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { chooseSauce } from '../actions';
import { connect } from 'react-redux';
import { sauces } from '../products'


class ChooseSauce extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sauce: {
        name: 'White sauce',
        price: 0.0
      }
    }
  }

  handleChange = event => {
    const choosenSauce = sauces.find(sauce => sauce.name === event.target.value)
    this.setState({
      sauce: choosenSauce
    })
    this.props.chooseSauce(choosenSauce)
  }

  render() {
    return (
      <div >
        <FormControl component="fieldset" required >
          <FormLabel component="legend">SAUCE</FormLabel>
          <RadioGroup
            aria-label="base"
            name="base"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          >
            {sauces.map(sauce => {
              return (
                <div>
                  <FormControlLabel value={sauce.name} control={<Radio color="primary"/>} label={sauce.name} />
                  + Euro {sauce.price}
              </div>
              )})}

          </RadioGroup>
        </FormControl>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sauce: state.sauce

  }
}

export default connect(mapStateToProps, { chooseSauce })(ChooseSauce);
