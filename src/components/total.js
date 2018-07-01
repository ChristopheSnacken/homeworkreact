import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class TotalCalculator extends PureComponent {

  render() {
    const { base, sauce, toppings, drone } = this.props.Pizza

    const total = base.price + sauce.price + toppings.length * 0.5

    return (

      <Card >

         <CardContent>
           <Typography gutterBottom variant="headline" component="h2">
             Your pizza:
           </Typography>
           <Typography component="p">
             <List component="nav">
               <Typography component="p">
                 base
               </Typography>
               <ListItem button>{base.name}</ListItem>
               <Divider />
               <Typography  component="p">
                 sauce
               </Typography>
               <ListItem button>{sauce.name}</ListItem>
               <Divider />
               <Typography  component="p">
                 toppings
               </Typography>
               <ListItem button>{toppings.join(', ')}</ListItem>
               <Divider />
               <Typography  component="p">
                 Total amount to pay
               </Typography>
               <ListItem button>
                   {drone && <p>Euro {(total * 1.1).toFixed(2)}</p>}
                   {!drone && <p>Euro {total.toFixed(2)}</p>}
               </ListItem>

             </List>
           </Typography>
         </CardContent>

     </Card>
    )
  }
}

const mapStateToProps = ({ Pizza }) => {
  return { Pizza }
}

export default connect(mapStateToProps)(TotalCalculator)
