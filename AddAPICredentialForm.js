import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Formsy from 'formsy-react';
import { useRef, useState } from 'react';
import { TextFieldFormsy } from '@fuse/core/formsy';
import DeviceAPICredential from './DeviceAPICredential';
const options = [
    {
        value: 'version1',
        label: 'Version 1/2c',
    },
    {
        value: 'version2',
        label: 'Version 1/2b',
    },
    {
        value: 'version3',
        label: 'Version 1/2a',
    },

];
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        height: '100%',
        width: '100%',
    },
    label: {
        alignSelf: 'center',
        width: '25%',
        paddingRight: '1em'
    },
    saveButton: {
        margin: '1em 0 1em 0',
        float: 'right'

    },
    cancelButton: {
        margin: '1em 0 1em 0',
        float: 'left'
    },
    header: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.dark,
    },
    width_100: {
        width: '100%'
    }
}));
export default function AddAPICredentialForm() {

    const classes = useStyles();
    const [option, setOption] = React.useState('version1');
    const handleChange = (event) => {
        setOption(event.target.value);
    };
    const [title, setTitle] = useState('')
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    function disableButton() {
        setIsFormValid(false);
    }

    function enableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(model) {
        console.info('submit', model);
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.header} gutterBottom variant="h5" component="h2">
                    ADD API Credentials
                </Typography>
                <div>
                    <Formsy className={classes.root}
                        onValidSubmit={handleSubmit}
                        onValid={enableButton}
                        onInvalid={disableButton}
                        ref={formRef}>
                        <div className="flex mb-20">
                            <div className={clsx(classes.label)}>
                                <label>Description</label>
                            </div>
                            <TextFieldFormsy
                                className={classes.width_100}
                                type="text"
                                name="description"
                                validations={{
                                    minLength: 8,
                                }}
                                validationErrors={{
                                    minLength: 'Provide valid Description..!',
                                }}
                                id="description"
                                variant="outlined"
                                required
                            />
                        </div>
                        <div className="flex mb-20">
                            <div className={clsx(classes.label)}>
                                <label>Devices</label>
                            </div>
                            <TextField
                                className={classes.width_100}
                                type="text"
                                name="devices"
                                helperText="Matches: 57 Device(s)"
                                id="devices"
                                variant="outlined"
                            />
                        </div>
                        <div className="flex mb-20">
                            <div className={clsx(classes.label)}>
                                <label>Version</label>
                            </div>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                value={option}
                                SelectProps={{
                                    native: true,
                                }}
                                style={{ width: '100%' }}
                                onChange={handleChange}
                                variant="outlined"
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                        <div className="flex mb-20">
                            <div className={clsx(classes.label)}>
                                <label>Community String</label>
                            </div>
                            <TextFieldFormsy
                                className={classes.width_100}
                                type="text"
                                name="community_string"
                                validations={{
                                    minLength: 8,
                                }}
                                validationErrors={{
                                    minLength: 'Provide Valid Community String..!',
                                }}
                                id="community_string"
                                variant="outlined"
                                required
                            />
                        </div>
                    </Formsy>
                </div>
                <div>
                    <DeviceAPICredential />
                </div>
                <Divider />
                <div>
                        <Button className={classes.cancelButton} variant="contained" color="primary">
                            CANCEL
                    </Button>
                    </div>
                    <Button className={classes.saveButton}
                        type="submit"
                        variant="contained"
                        color="primary"
                        aria-label="LOG IN"
                        disabled={!isFormValid}
                    >
                        SAVE
                    </Button>
            </CardContent>
        </Card>
    )
}