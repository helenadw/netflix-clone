import React from 'react'
import {ReleaseBody, Spinner, LockBody, Picture} from './styles/loading'

export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody {...restProps} />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}