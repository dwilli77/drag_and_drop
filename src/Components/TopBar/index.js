import React from 'react'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TopBar = props => {
  return (
    <header>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={props.gridMode}
              onChange={props.onChange}
              value="gridMode"
              name="gridMode"
              color="primary"
            />
          }
          label="Grid Mode"
        />
        </FormGroup>
    </header>
  )
}

export default TopBar;