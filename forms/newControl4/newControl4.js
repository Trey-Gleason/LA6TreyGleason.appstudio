/*
// I changed the appearance to primary as well as changed the number of items in the dropdown
drpPlaces.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(s + " " + drpPlaces.selection);
};