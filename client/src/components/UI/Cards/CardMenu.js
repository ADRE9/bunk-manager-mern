import React from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Box from '@material-ui/core/Box';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { deleteSubject } from '../../../actions/subjectActions';

const CardMenu = (props) => {

  const onDeleteClick = () => {
    props.deleteSubject(props.data.id);
  }

  return (
    <React.Fragment>
        <Box justifyContent="space-evenly" display="flex" alignItems="center" width="100%">
            <Button>
              <EditRoundedIcon/>
            </Button>
            <Button onClick={()=>onDeleteClick()}>
              <DeleteRoundedIcon/>
            </Button>
            <Button>
              <InfoRoundedIcon/>
            </Button>
          </Box>
    </React.Fragment>
  )
}

export default connect(null, {
  deleteSubject
})(CardMenu);
