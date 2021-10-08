import { TextField } from '@material-ui/core';
import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formСontrol: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        minHeight: '40px',
        margin: '5px',
        padding: '3px 7px',
        fontSize: '17px',
    },

}));


const AddNews = ({ onAdd }) => {

    const classes = useStyles();
    const [header, setHeader] = useState('')
    const [day, setDay] = useState('')
    const [text, setText] = useState('')



    const onSubmit = (e) => {
        e.preventDefault();
        if (!header) {
            alert('Будь ласка, напишіть заголовок до новини')
            return
        }
        onAdd({ text, day, header })
        setText('')
        setDay('')
        setHeader('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Заголовок</label>
                <TextField
                    className={classes.input}
                    value={header}
                    onChange={e => setHeader(e.target.value)}
                    type="text"
                    placeholder='Заголовок'
                />
            </div>
            <div className="form-control">
                <label>Дата</label>
                <TextField
                    className={classes.input}
                    value={day}
                    onChange={e => setDay(e.target.value)}
                    type="text"
                    placeholder='Дата' />
            </div>
            <div className="form-control">
                <label>Новина</label>
                <TextField
                    className={classes.input}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type="text"
                    placeholder='Текст'
                    multiline
                    minRows={2}
                    maxRows={10}
                />
            </div>


            <input type="submit" value='Зберегти' className='btn btn-block' />
        </form>
    )
}

export default AddNews

