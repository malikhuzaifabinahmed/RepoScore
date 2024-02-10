import React from 'react'
import { useUserDispatch } from '../context/UserContext'
import { receiveToken, doInit } from '../context/UserContext'
export default function SyncRedux() {
    let userDispatch = useUserDispatch()

    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            receiveToken(token, userDispatch)
            doInit()(userDispatch)
        }
    }, [])
    return
}
