function bookList (input) {
    let pages = Number(input[0]);
    let readPagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = pages / readPagesForHour;
    let hoursADay = totalTime / days;
    
    console.log(hoursADay);
}
bookList(["212", "20", "2"])