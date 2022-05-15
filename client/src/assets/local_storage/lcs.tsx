const get_item_from_lcs = (item:any) => {
    const local_item = localStorage.getItem(item)
    if(local_item){
        return JSON.parse(local_item)
    }   
    return null
}

const set_item_to_lcs = (key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const remove_item_from_lcs = (item:string) =>{
    localStorage.removeItem(item)
}
export {get_item_from_lcs, set_item_to_lcs, remove_item_from_lcs};