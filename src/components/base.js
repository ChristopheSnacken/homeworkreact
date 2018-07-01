import React, {PureComponent} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { bases } from '../products'
import { chooseBase } from '../actions'
import { connect } from 'react-redux'

class ChooseBase extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      base: {
        name: '25cm NY Style',
        price: 8.99
      }


    }
  }


  handleChange = event => {
    const choosenBase = bases.find(base => base.name === event.target.value)
    this.setState({
      base: choosenBase
    })
    this.props.chooseBase(choosenBase)
    };

  render() {
    return (
      <div >
        <FormControl component="fieldset" required >
          <FormLabel component="legend">BASE</FormLabel>
          <RadioGroup
            aria-label="base"
            name="base"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {bases.map(base => {
              return (
                <FormControlLabel value={base.name} control={<Radio color="primary"/>} label={base.name} />
              )})}


          </RadioGroup>
        </FormControl>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base

  }
}

export default connect(mapStateToProps, { chooseBase })(ChooseBase);
