export default {
    getPath(path){
        let action = {
            type:'GET_IMGPATH',
            params:path
        }
        // console.log(action.params,'action')
        return action
    },
    getTxt(params){
        let action={
            type:'TXT',
            params:params
            
        }
        return action;
    }
}