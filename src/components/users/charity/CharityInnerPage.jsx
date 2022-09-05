// import { useState, useEffect } from 'react'

import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { getSingleCharityById } from '../../../store/slices/GiftActions'
import InnerPage from '../../ui/charity/InnerCardCharity'

const CharityInnerPage = () => {
    const state = useSelector((state) => state.addCharity.single)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleCharityById(id))
    }, [])

    return (
        <Container>
            {/* breadCrambs */}
            {state && (
                <div>
                    <div>Благотворительность /</div>
                    <strong>{state.gift.name}</strong>
                </div>
            )}

            {state && <InnerPage notMy data={state} />}
        </Container>
    )
}
export default CharityInnerPage
const Container = styled.div`
    width: 1086px;
    margin: 30px auto;
`
