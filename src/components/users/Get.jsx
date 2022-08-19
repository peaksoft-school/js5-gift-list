import { appFetch } from '../../api/CustomFetch'

const Get = () => {
    const datas = {
        name: 'string',
        photo: 'string',
        categoryId: 0,
        subCategoryId: 0,
        status: 'USED',
        description: 'string',
    }
    appFetch({ url: '/api/gifts', method: 'POST', body: JSON.stringify(datas) })

    // console.log(data)
    return <div> </div>
}
export default Get
