import React,{useState} from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Box from '@material-ui/core/Box';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ConfirmDialog from '../ConfirmDialog';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { deleteSubject } from '../../../actions/subjectActions';
import { setOpen } from '../../../actions/subjectActions'

const CardMenu = (props) => {

  const deletePost = () => {
    props.deleteSubject(props.data.id);
  };

  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <React.Fragment>
        <Box justifyContent="space-evenly" display="flex" alignItems="center" width="100%">
            <Button onClick={() => props.setOpen()} component={Link} to={`/subject/${props.data.id}`}>
              <EditRoundedIcon/>
            </Button>
            <Button onClick={()=>setConfirmOpen(true)}>
              <DeleteRoundedIcon/>
            </Button>
            <Button>
              <InfoRoundedIcon/>
            </Button>
            <ConfirmDialog
              title="Delete Subject?"
              open={confirmOpen}
              setOpen={setConfirmOpen}
              onConfirm={deletePost}
            >
              Are you sure you want to delete this Subject?
            </ConfirmDialog>
          </Box>
    </React.Fragment>
  )
}

export default connect(null, {
  deleteSubject, setOpen 
})(CardMenu);
