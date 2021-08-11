const verifTime = (req, res, next) => {
    const date = new Date();

    // The day Monday to Friday
    let day = date.getDay();
    let temp = false;
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: temp = true;
    }

    // The hour from 9 to 17
    let hour = date.getHours()

    // Testing the day and the hour
    if (hour >= 9 && hour <= 17 && temp === true)
        next();
    else res.render('error')
}

module.exports = verifTime