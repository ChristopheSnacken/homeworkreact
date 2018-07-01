import React, {PureComponent} from 'react'

import ChooseBase from './base'
import ChooseSauce from './sauce'
import ChooseDrone from './drone'
import TotalCalculator from './total'

import Divider from '@material-ui/core/Divider';
import ChooseToppings from './toppings'


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './pizza.css'


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Pizza extends PureComponent {

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
   return (


      <div className = "body" >
        <div>
        <br/>
        <TotalCalculator className= "Total"/>
        <br/>
        <br/>
         <ExpansionPanel className="choose" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
           <ExpansionPanelSummary>
             <Typography className={classes.heading}>Base</Typography>
             <Typography className={classes.secondaryHeading}>What kind of base do you wish?</Typography>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
             <Typography >
               <ChooseBase />
             </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel className="choose" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
           <ExpansionPanelSummary >
             <Typography className={classes.heading}>Sauce</Typography>
             <Typography className={classes.secondaryHeading}>
               What kind of sauce do you wish to have?
             </Typography>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
             <Typography>
               <ChooseSauce />
             </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel className="choose" expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
           <ExpansionPanelSummary >
             <Typography className={classes.heading}>Toppings</Typography>
             <Typography className={classes.secondaryHeading}>
               Beware! You may only choose a maximum of 3 toppings?
             </Typography>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
             <Typography>
               <ChooseToppings />
             </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel className="choose" expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
           <ExpansionPanelSummary >
             <Typography className={classes.heading}>Delivery </Typography>
             <Typography className={classes.secondaryHeading}>
               Wicked drone delivery will only cost you 10% extra on the total amount
             </Typography>
           </ExpansionPanelSummary>
           <ExpansionPanelDetails>
             <Typography>
               <ChooseDrone />
             </Typography>
           </ExpansionPanelDetails>
         </ExpansionPanel>

         <Divider inset />
         <br/>

         <Button variant="outlined" color="primary" >
           BUY ME NOW
         </Button>


      </div>
     </div>
   )
  }
}



export default withStyles(styles)(Pizza);
