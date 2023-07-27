function manh1() {
    let y = parseInt(prompt("year"))
    let namNhuan1 = false
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                namNhuan1 = true
            }
        } else {
            namNhuan1 = true
        }
    }
    if (namNhuan1) {
        alert(y+" là năm nhuận")
    } else {
        alert(y+" không phải năm nhuận")
    }
}