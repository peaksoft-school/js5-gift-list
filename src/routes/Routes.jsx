import React, { Suspense, lazy } from 'react'

import styled from '@emotion/styled'
import { Routes, Route, useLocation } from 'react-router-dom'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import { array, text } from '../components/users/WishList'
import EditInnerPage from '../components/users/wishList/EditInnerPage'
import PageLayout from '../layout/PageLayout'

const Lenta = lazy(() => import('../components/users/Lenta'))
const WishList = lazy(() => import('../components/users/WishList'))
const InnerPage = lazy(() => import('../components/users/wishList/InnerPage'))
const Complaints = lazy(() => import('../components/admin/Complaints'))
const Mailing = lazy(() => import('../components/admin/Mailing'))
const Users = lazy(() => import('../components/admin/Users'))
const Bookeds = lazy(() => import('../components/users/Bookeds'))
const Charity = lazy(() => import('../components/users/Charity'))
const MyHalidays = lazy(() => import('../components/users/MyHalidays'))
// eslint-disable-next-line prettier/prettier
const CharityUsers = lazy(() => import('../components/admin/CharityUsers'))
const Friends = lazy(() => import('../components/users/Friends'))
const AllRoutes = () => {
    const loc = useLocation()
    console.log(loc)
    const id = loc.pathname.split('/').filter((p) => p)
    console.log(id[1])
    const newarr = array.filter((i) => i.id === id[1])
    console.log(newarr)
    return (
        <PageLayout>
            <Suspense
                fallback={
                    <SpinnerLoading>
                        <LoadingSpinner />
                    </SpinnerLoading>
                }
            >
                <Routes>
                    <Route path="/lenta" element={<Lenta />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/wish_list" element={<WishList />} />
                    <Route
                        path="/wish_list/:wishListId"
                        element={newarr.map((el) => (
                            <InnerPage
                                key={el.id}
                                image={el.img}
                                nameGift={el.nameGift}
                                date={el.date}
                                holiday={el.holiday}
                                toBook={el.toBooking}
                                avatar={el.avatar}
                                aboutGift={text}
                            />
                        ))}
                    />
                    <Route path="/wish_list/edit" element={<EditInnerPage />} />
                    <Route path="/bookeds" element={<Bookeds />} />
                    <Route path="/my_halidays" element={<MyHalidays />} />
                    <Route path="/charity" element={<Charity />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/mailing" element={<Mailing />} />
                    <Route path="/charity_users" element={<CharityUsers />} />
                </Routes>
            </Suspense>
        </PageLayout>
    )
}

export default AllRoutes
const SpinnerLoading = styled('div')`
    margin-left: 50%;
`
