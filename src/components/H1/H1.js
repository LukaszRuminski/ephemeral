import React from 'react'
import PropTypes from 'prop-types'
import { MainStyle } from './H1.styles'

const H1 = ({ title, color }) => (
    <MainStyle color={color}>{title}</MainStyle>
)

H1.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}

export default H1
