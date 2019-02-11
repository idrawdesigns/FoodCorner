import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import './Header.css'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

function FloatingActionButtons(props) {
  const { classes } = props
  return (
    <div>
      <Fab
        color="secondary"
        aria-label="Add"
        className={classes.fab}
        id="fala"
        onClick={() => console.log('manze umeniclck')}
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FloatingActionButtons)
