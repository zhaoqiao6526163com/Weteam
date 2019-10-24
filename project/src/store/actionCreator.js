export default {
    getPath(path){
        let action = {
            type:'GET_IMGPATH',
            params:path
        }
        // console.log(action.params,'action')
        return action
    }
}