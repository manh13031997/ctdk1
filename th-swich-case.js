function manh() {

    let date = new Date();
    let day = date.getDay();
    if (day === 0) {
        day = "chủ nhật";
    } else if (day === 3) {
        day = "thứ tư";
    }
    document.write(day);
}
