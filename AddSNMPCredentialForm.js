import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Formsy from 'formsy-react'
import { useRef, useState } from 'react'
import { TextFieldFormsy } from '@fuse/core/formsy'
import DevicesRequiredSNMP from './DevicesRequiredSNMP'
import axios from 'axios'
import { REACT_APP_API_HOST } from '../../app/store/types'
import { useFormStyles } from './helpers/stylingObject'
import { optionsForForm } from './helpers/options'

export default function AddSNMPCredentialForm(props) {
  const classes = useFormStyles()

  const [version, setVersion] = React.useState('version1')
  const [isFormValid, setIsFormValid] = useState(false)
  const formRef = useRef(null)

  const [getDescription, setDescription] = useState('')
  const [getDevices, setDevices] = useState('')
  const [getCommunity, setCommunity] = useState('')

  function handleSubmit() {
    const added_snmp_details = {
      network_id: 0,
      description: getDescription,
      devices: getDevices.split(','),
      version: version,
      community: getCommunity,
    }
    console.info('submit', added_snmp_details)
    axios
      .post(`${REACT_APP_API_HOST}/postsnmpcredentials`, added_snmp_details)
      .then(res => {
        console.log('RESPONSE RECEIVED: ', res)
      })
      .catch(err => {
        console.log('AXIOS ERROR: ', err)
      })
    props.closeForm()
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.header} gutterBottom variant='h5' component='h2'>
          ADD SNMP Credentials
        </Typography>
        <div>
          <Formsy className={classes.root} onValidSubmit={handleSubmit} onValid={() => setIsFormValid(true)} onInvalid={() => setIsFormValid(false)} ref={formRef}>
            <div className='flex mb-20'>
              <div className={clsx(classes.label)}>
                <label>Description</label>
              </div>
              <TextFieldFormsy className={classes.width_100} type='text' name='description' onChange={event => setDescription(event.target.value)} validations={{ minLength: 1 }} validationErrors={{ minLength: 'Provide valid Description..!' }} id='description' variant='outlined' required />
            </div>

            <div className='flex mb-20'>
              <div className={clsx(classes.label)}>
                <label>Devices</label>
              </div>
              <TextField className={classes.width_100} type='text' name='devices' onChange={event => setDevices(event.target.value)} helperText='Matches: 57 Device(s)' id='devices' variant='outlined' />
            </div>
            <div className='flex mb-20'>
              <div className={clsx(classes.label)}>
                <label>Version</label>
              </div>
              <TextField id='version' select value={version} SelectProps={{ native: true }} style={{ width: '100%' }} onChange={event => setVersion(event.target.value)} variant='outlined'>
                {optionsForForm.map(option => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className='flex mb-20'>
              <div className={clsx(classes.label)}>
                <label>Community String</label>
              </div>
              <TextFieldFormsy className={classes.width_100} type='text' name='community_string' onChange={event => setCommunity(event.target.value)} validations={{ minLength: 1 }} validationErrors={{ minLength: 'Provide Valid Community String..!' }} id='community_string' variant='outlined' required />
            </div>

            <div>
              <DevicesRequiredSNMP />
            </div>
            <div>
              <Button open={props.open} onClick={props.closeForm} className={classes.cancelButton} variant='contained' color='primary'>
                CANCEL
              </Button>
            </div>
            <Button className={classes.saveButton} type='submit' variant='contained' color='primary' aria-label='LOG IN' disabled={!isFormValid}>
              SAVE
            </Button>
          </Formsy>
        </div>
      </CardContent>
    </Card>
  )
}
