import { getData } from "../Utility/LocalStorage"


const LoderAplied = async() => {
    const res = await fetch('/featuredList.json')
    const data = await res.json()
    const get = getData()
    const newArr = []
    for(const id in get) {
        const getEd = data.find(saveEd => saveEd._id == id) 
       
        if(getEd){
            const qun = get[id]
            getEd.quantity = qun
            newArr.push(getEd)
        }
    }
    return newArr
}


export default LoderAplied