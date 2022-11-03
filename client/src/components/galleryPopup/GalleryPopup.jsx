import './gallerypopup.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';

const GalleryPopup = ({ image }) => {

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className="gallerypopup">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="popup">
            <img src={image} alt="Nepal Helicopter Tours" />
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default GalleryPopup