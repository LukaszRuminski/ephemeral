import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

const Home = ({ globalLabels }) => {
    return <div>
        <Markdown source={globalLabels.welcomeText} escapeHtml={false} />

        <h2>Pages</h2>
        <ul>
            <li><a href='mw-image'>Modern Image</a></li>
            <li><a href='mw-video'>Modern Video</a></li>
        </ul>
    </div>
}

Home.propTypes = {
    globalLabels: PropTypes.shape({
        welcomeText: PropTypes.string.isRequired
    })
}

export default Home
