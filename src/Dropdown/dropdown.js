import classes1 from './dropdown.module.css';
import {
    Select, MenuItem, FormControl, InputLabel, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper

} from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200
    }
}));
const Dropdown = props => {
    const classes = useStyles();
    const [menuValue, setValues] = useState('');
    const changeHandler = (event) => {
        setValues(event.target.value);

        const textvalue = event.currentTarget.myValue;
        console.log(textvalue);
    }
    return (
        <>
            <h1>Select the value from list</h1>
            <FormControl className={classes.formControl}>
                <InputLabel>Country</InputLabel>
                <Select onChange={changeHandler}>
                    <MenuItem value={'India'}>IND</MenuItem>
                    <MenuItem value={'America'} myValue={'AMER'}>AMER</MenuItem>
                    <MenuItem value={'Australia'}>AUS</MenuItem>
                    <MenuItem value={'Germany'}>DEU</MenuItem>
                    <MenuItem value={'Italy'}>IT</MenuItem>
                    <MenuItem value={'Japan'}>JPN</MenuItem>
                </Select>
                <TableContainer component={Paper}>
                <Table className={classes1.table}>
                    <TableHead>
                        <TableCell>Name</TableCell>
                        {/* <TableCell>ShortName</TableCell> */}
                    </TableHead>
                    <TableBody>
                        <TableCell>{menuValue}</TableCell>
                        {/* <TableCell>{menuValue}</TableCell> */}
                    </TableBody>
                </Table>
            </TableContainer>
        </FormControl>
        </>
    );
};

export default Dropdown;