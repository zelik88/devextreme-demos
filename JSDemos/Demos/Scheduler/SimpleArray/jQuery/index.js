$(function(){
    $("#scheduler").dxScheduler({
        dataSource: data,
        views: ["week", "month"],
        currentView: "week",
        currentDate: new Date(2017, 4, 25),
        startDayHour: 9,
        height: 600
    }).dxScheduler("instance");
});