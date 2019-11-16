$(function(){
    initSellRankList(sellRankList)
    $('#sellRank').myScroll({
        speed: 30, //数值越大，速度越慢
    });
    $.timeProcessLine({
        container:"#timeProcess"
    })
    // 自定义滚动条
    customScroll('.custom-scroll')

    $.initLogisticsMapChart({
        domId:"sellMapChart",
        data:mapSeries
    })
    $.initGdpLineChart({
        domId:"sellIncreaseChart",
        smooth:false,
        yAxisName:"单位:%",
        data:sellIncreaseLineData
    })
    $.initGdpPieChart({
        domId:"brandPieChart",
        data:gdpPieData
    })
    $.initGdpPieChart({
        domId:"customerPieChart",
        data:gdpPieData
    })
    $.initSellBarChart({
        domId:"cityRankChart",
        data:learnRanklineChartData
    })
})

function customScroll(selector){
    var bars = '.jspHorizontalBar, .jspVerticalBar';
    $(selector).bind('jsp-initialised', function (event, isScrollable) {
        $(this).find(bars).hide();
    }).jScrollPane().hover(
        function () {
            $(this).find(bars).stop().fadeTo('fast', 0.9);
        },
        function () {
            $(this).find(bars).stop().fadeTo('fast', 0);
        }
    );	
}

function initSellRankList(data){
    var $list = $("#sellRank").find("ul");
    var str = "";
    $.each(data,function(index,value){
        str += "<li><i>"+(index+1)+"</i><span>"+value.name+"</span><b>"+value.value+"</b></li>"
    })
    $list.append(str);
}