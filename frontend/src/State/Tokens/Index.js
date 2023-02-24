
export const user = localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')): null

export const customToken = user && Object.prototype.hasOwnProperty.call(user,'result')
 