import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import { REACT_APP_API_HOST } from '../../app/store/types'
import { useStyles } from './helpers/stylingObject'
import axios from 'axios'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    device_id: state.livedeviceiddata.livedeviceiddata.livedeviceidinfo,
  }
}

function AddSNMPCredentialGrid(props) {
  const [getAddSNMPCredentialGrid, setAddSNMPCredentialGrid] = useState()
  const [getTitle, setTitle] = useState('0 SNMP CREDENTIALS')

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${REACT_APP_API_HOST}/getsnmpcredentials`)
      const title = `${response.data.length} SNMP CREDENTIALS`
      setTitle(title)
      const formated_data = response.data.map(element => {
        return {
          snmp_desc: element.snmp_desc !== undefined ? element.snmp_desc : '',
          snmp_version: element.snmp_version !== undefined ? element.snmp_version : '',
          device_hostname: element.device_hostname !== undefined ? element.device_hostname.join(' , ') : '',
          custom: '*',
        }
      })
      setAddSNMPCredentialGrid(formated_data)
    })()
  }, [])

  const classes = useStyles()
  const [state] = useState({
    columns: [
      { title: 'Description', field: 'snmp_desc' },
      { title: 'Version', field: 'snmp_version' },
      { title: 'Device Using These Credentials', field: 'device_hostname' },
      { title: 'Custom', field: 'custom' },
    ],
  })

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <span>Have Credentials</span>
              <span className={classes.have_credentials}>57</span>
              <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              Need Credentials
              <span className={classes.need_credentials}>0</span>
              <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              Trying Credentials
              <span className={classes.trying_credentials}>0</span>
              <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.retry_bottom}>
        <b>Retry All SNMP Credentials</b>
      </div>
      <div className='pb-16'>
        <MaterialTable
          columns={state.columns}
          title={getTitle}
          data={getAddSNMPCredentialGrid}
          options={{
            headerStyle: {
              backgroundColor: '#EEE',
            },
            rowStyle: selectedRow => ({
              backgroundColor: selectedRow.tableData.id % 2 ? '#EEE' : '#FFF',
            }),
          }}
          actions={[
            {
              icon: 'update',
              tooltip: 'Update SNMP Credential',
              onClick: () => console.log('clicked'),
            },
            {
              icon: 'delete',
              tooltip: 'Delete SNMP Credential',
              onClick: () => console.log('clicked'),
            },
          ]}
        />
      </div>
    </>
  )
}
export default connect(mapStateToProps)(AddSNMPCredentialGrid)
