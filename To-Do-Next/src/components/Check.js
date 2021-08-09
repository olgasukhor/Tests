import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels({ onClick }) {
    const [state, setState] = React.useState({
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                    onClick={onClick}


                />
            }
            label="Complete"
        />

    );
}
