export default{
    changeTable(params){
        let action={
            type:'CHANGE_TABLE',
            params:params
        }
        return action
    }
}