import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from "./Header"

storiesOf('Header', module)
    .add('primary', () => (
        <Header />
    ))
    .add('secondary', () => (
        <Header secondary/>
    ))
    .add('withoutLogo', () => (
        <Header withoutLogo/>
    ))
    .add('secondary withoutLogo', () => (
        <Header secondary withoutLogo/>
    ))
