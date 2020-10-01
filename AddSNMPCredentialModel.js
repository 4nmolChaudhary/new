import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import AddSNMPCredentialForm from './AddSNMPCredentialForm'
import { modalStyle, useModalStyles } from './helpers/stylingObject'

export default function AddSNMPCredentialModel() {
  const classes = useModalStyles()
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.mb}>
      <Button variant='contained' color='primary' size='large' startIcon={<AddIcon />} onClick={() => setOpen(true)}>
        Add SNMP Credentials
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description'>
        <div style={modalStyle} className={classes.paper}>
          <AddSNMPCredentialForm open={open} closeForm={() => setOpen(false)} />
        </div>
      </Modal>
    </div>
  )
}
