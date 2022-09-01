// import { useEffect, useState } from 'react'

// import styled from '@emotion/styled'
// import moment from 'moment'
// import { useSelector } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'

// import Button from '../../ui/Button'
// import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
// import ImagePicker from '../../ui/ImagePicker'
// import Input from '../../ui/Input'
// import Select from '../../ui/select/Select'
// import Textarea from '../../ui/Textarea'

// const ToEditInnerPage = () => {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const id = location.pathname.split('/')[2]
//     // const dispatch = useDispatch()
//     const { singleGift } = useSelector((state) => state.holidayUserGifts)
//     const [image, setImage] = useState('')
//     const [photo, setPhoto] = useState(null)
//     const [wishGift, setWishGift] = useState({
//         giftName: '',
//         giftLink: '',
//         description: '',
//     })
//     const [date, setDate] = useState('')
//     const [select, setSelect] = useState('')
//     // const [isPhoto, setIsPhoto] = useState(false)

//     useEffect(() => {
//         // dispatch(getWishWithId(id))
//     }, [singleGift?.wish?.photo])

//     useEffect(() => {
//         if (singleGift?.wish?.photo) {
//             setImage(singleGift?.wish?.photo)
//         }
//         setWishGift({
//             giftName: singleGift?.wish?.giftName,
//             giftLink: singleGift?.wish?.giftLink,
//             description: singleGift?.wish?.description,
//         })
//         setDate(singleGift?.wish?.giftDate)
//         setSelect(singleGift?.wish?.holidayName)
//     }, [singleGift?.wish?.photo])
//     const cancel = () => {
//         navigate(`/my_halidays/${id}`)
//     }
//     const holidayNameHandler = (e) => {
//         setSelect(e.name)
//     }
//     // const isPhotohandler = (e) => {
//     //     setIsPhoto(e)
//     // }
//     const editImageHandler = (file) => {
//         setPhoto(file)
//     }
//     const wishGiftHandler = (e) => {
//         setWishGift({
//             ...wishGift,
//             [e.target.name]: e.target.value,
//         })
//     }
//     const DateHandler = (e) => {
//         const newDate = moment(e).format('YYYY-MM-DD')
//         setDate(newDate)
//     }
//     wishGift.giftDate = date
//     wishGift.holidayName = select
//     // const putDataWishCard = (e) => {
//     //     e.preventDefault()
//     //     dispatch(
//     //         putWishCard({
//     //             id,
//     //             wishGift,
//     //             isnewPhoto: isPhoto,
//     //             photo: isPhoto ? photo : image,
//     //         })
//     //     )
//     //     navigate('/wish_list')
//     // }
//     return (
//         <WrapperAll>
//             <ImagePicker
//                 // oldPhotoBoolean={isPhotohandler}
//                 newFile={photo}
//                 onChange={editImageHandler}
//                 value={image}
//             />
//             <WrapperEdit>
//                 <H2>Добавление желаемого подарка</H2>
//                 <WrapperLabels>
//                     <Label> Название подарка</Label>
//                     <Label>Ссылка на подарок </Label>
//                 </WrapperLabels>
//                 <WrapperInputs>
//                     <Input
//                         name="giftName"
//                         width="396px"
//                         value={wishGift.giftName}
//                         onChange={wishGiftHandler}
//                     />
//                     <Input
//                         name="giftLink"
//                         width="396px"
//                         value={wishGift.giftLink}
//                         onChange={wishGiftHandler}
//                     />
//                 </WrapperInputs>
//                 <WrapperSelects>
//                     <DivSelect>
//                         <Select
//                             holidayName={singleGift?.wish?.holidayName}
//                             // options={holiday}
//                             label="Праздник"
//                             getValue={holidayNameHandler}
//                         />
//                     </DivSelect>
//                     <DivDatePicker>
//                         <ViewsDatePicker
//                             value={date}
//                             label="Дата праздника"
//                             onChange={DateHandler}
//                         />
//                     </DivDatePicker>
//                 </WrapperSelects>
//                 <Textarea
//                     name="description"
//                     label="Описание подарка"
//                     value={wishGift.description}
//                     onChange={wishGiftHandler}
//                 />
//                 <WrapperButton>
//                     <Button variant="outlined" onClick={cancel}>
//                         Отмена
//                     </Button>
//                     <Button variant="contained">
//                         {/* <Button variant="contained" onClick={putDataWishCard}> */}
//                         Добавить
//                     </Button>
//                 </WrapperButton>
//             </WrapperEdit>
//         </WrapperAll>
//     )
// }
// export default ToEditInnerPage
// const WrapperAll = styled('form')`
//     padding: 20px;
//     display: flex;
//     background: #fff;
//     width: 100%;
// `
// const WrapperEdit = styled('div')`
//     padding-left: 20px;
//     width: 808px;
// `
// const H2 = styled('h2')`
//     font-family: 'Inter', sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 22px;
//     margin: 0;
// `
// const WrapperLabels = styled('div')`
//     display: grid;
//     grid-template-columns: 430px 390px;
//     margin-top: 17px;
//     margin-bottom: 6px;
// `
// const Label = styled('label')`
//     font-family: 'Inter', sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 15px;
//     color: #464444;
// `
// const WrapperInputs = styled('div')`
//     display: grid;
//     grid-template-columns: 430px 395px;
//     margin-bottom: 20px;
//     & .Mui-focused .MuiOutlinedInput-notchedOutline {
//         border: 1px solid #8639b5;
//     }
// `
// const WrapperSelects = styled('div')`
//     display: grid;
//     grid-template-columns: 430px 390px;
// `
// const DivSelect = styled('div')`
//     width: 396px;
// `
// const DivDatePicker = styled('div')`
//     /* padding-top: 3px; */
// `
// const WrapperButton = styled('div')`
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 56px;
//     button {
//         width: 113px;
//         height: 37px;
//         font-family: 'Inter', sans-serif;
//         font-style: normal;
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 17px;
//         margin-left: 16px;
//         padding: 10px 26px 10px 26px;
//     }
// `
