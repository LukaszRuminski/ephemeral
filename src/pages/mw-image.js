import React from 'react'
import MWImage from '../components/mw-image'

const images = [
    'ace-youtil/ro-RO/lqvtnxzl3epkpvr8drkv',
    'ace-youtil/ro-RO/plmiq10gf3jvtkrgokuk',
    'ace-youtil/ro-RO/vu0hjpq185arrww5oqhz',
    'ace-youtil/ro-RO/qymugjyrwtbnzz8dezju'
]

const MWImagePage = () => {
    return (
        <MWImage images={images}/>
    )
}

export default MWImagePage