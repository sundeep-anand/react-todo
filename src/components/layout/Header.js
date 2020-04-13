import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, FormattedDate } from 'react-intl'

export default function Header(props) {
    return (
        <header style={headerStyle} >
            <h1>
                <FormattedMessage 
                    id="app.header"
                    defaultMessage="TodoList"
                /></h1>
            <Link style={linkStyle} to="/">Home</Link> | {' '}
            <Link style={linkStyle} to="/about">About</Link>
            <br/>
            <FormattedDate 
                value={props.date}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
            />
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
