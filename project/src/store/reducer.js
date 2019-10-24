import State from './state'

export default (prevState=State,action)=>{
    let newData = JSON.parse(JSON.stringify(prevState))
    let {type,params} = action
    switch (type) {
        case 'GET_IMGPATH':
            newData.imgUrl = params
            break;
        default:
            break;
    }
    return newData
}