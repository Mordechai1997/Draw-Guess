const path = require('path');

const get404 = ((req, res, next) => { // './views/index.html' כל פעם שהניתוב לא יהיה נכון הוא יטען את הקובץ 
    res.status(404).sendFile(path.join(__dirname, '../views', 'index.ejs'));
})
module.exports = { get404 };