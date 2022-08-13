import InnerPage from './InnerCardCharity'
import inner from './innerImg.png'

const innerData = {
    img: inner,
    // avatar: ,
    subcategory: 'Сумка',
    addDate: '12.04.2022',
    userName: 'Аида Каримова',
    toBook: 'Б/У',
    category: 'школьные',
    status: 'в ожидании',
    state: 'Б/У',
    nameGift: 'Iphone 13 Pro',
    aboutGift:
        'Дисплей Super Retina XDR с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.',
}
const AboutGiftMore = () => {
    return <InnerPage data={innerData} />
}
export default AboutGiftMore
