export function trimPostLength(text) {
    if(text.length > 300){
        return text.slice(0, 300) + '...'
    }
    return text
}

export function formatDate(dateString) {
    const dateObj = new Date(dateString)
    const dateYear = (dateObj.getFullYear()).toString().slice(2, 4)
    return `${dateObj.getDate()}/${dateObj.getMonth()+1}/${dateYear}`
}