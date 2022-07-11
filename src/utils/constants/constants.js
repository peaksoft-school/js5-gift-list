import { ReactComponent as Bron } from '../../assets/icons/bron.svg'
import { ReactComponent as Charity } from '../../assets/icons/Charity.svg'
import { ReactComponent as Compolaints } from '../../assets/icons/complaintss.svg'
import { ReactComponent as Friends } from '../../assets/icons/friends.svg'
import { ReactComponent as Lenta } from '../../assets/icons/Lenta.svg'
import { ReactComponent as List } from '../../assets/icons/List.svg'
import { ReactComponent as Mailinglist } from '../../assets/icons/mailing_list.svg'
import { ReactComponent as MyHalidays } from '../../assets/icons/myPrazniki.svg'

export const RolePaths = {
    USER: [
        {
            pathName: 'Лента',
            path: '/lenta',
            icon: <Lenta />,
        },
        {
            pathName: 'Друзья',
            path: '/friends',
            icon: <Friends />,
        },
        {
            pathName: 'Список желаний',
            path: '/wish_list',
            icon: <List />,
        },
        {
            pathName: 'Забронированные',
            path: '/bookeds',
            icon: <Bron />,
        },
        {
            pathName: 'Мои праздники',
            path: '/my_halidays',
            icon: <MyHalidays />,
        },
        {
            pathName: 'Благотворительность',
            path: '/charity',
            icon: <Charity />,
        },
    ],
    ADMIN: [
        {
            pathName: 'Пользователи',
            path: '/users',
            icon: <Friends />,
        },
        {
            pathName: 'Благотворительность',
            path: '/charity_users',
            icon: <Charity />,
        },
        {
            pathName: 'Жалобы',
            path: '/complaints',
            icon: <Compolaints />,
        },
        {
            pathName: 'Рассылка',
            path: '/mailing',
            icon: <Mailinglist />,
        },
    ],
}
