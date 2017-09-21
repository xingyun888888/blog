//闪购（限时抢购）
/*
LoadFastBuy: function (other, i) {
    if (other.contentList) {
        var tag = "list" + i;
        var isRefresh = false;
        if ($("#" + tag).length > 0) {
            isRefresh = true;
        }

        Home.FastBuy.push({ id: tag, coId: other.columnID, end: other.endTime });
        var length = other.contentList.length;

        var html = '';
        if (!isRefresh) {
            html += '<div class="live-list panic-list" module="' + other.columnType + '">';
        }
        html += '<div class="hd">';
        if (other.isShowmore == g_const_isShowmore.YES) {
            html += '<span><a onclick="Home.GetLocationByShowmoreLinktype(\'' + other.showmoreLinktype + '\',\'' + other.showmoreLinkvalue + '\')">' + other.showmoreTitle + '&gt;&gt;</a></span>';
        }
        html += '<h2>' + other.columnName + '<font name="countDown">距离本次结束还有：<i>--</i>时<i>--</i>分<i>--</i>秒</font></h2>';
        html += '</div><div class="bd"><!--==结束的时候clas="end"做显示===--><div class="end" name="fastButEnd" style="display:none;">本场抢购<br>已结束</div><ul id="list' + i + '">';
        var stpl = $("#tmpFastBuy").html();
        Home.TempDataInit(tag);
        for (var j = 0; j < length; j++) {
            var other_content = other.contentList[j];
            var data = {
                "Link": "Home.GetLocationByShowmoreLinktype('" + other_content.showmoreLinktype + "','" + other_content.showmoreLinkvalue + "');",
                "Mark": Home.GetMarkHtml(other_content.productInfo.labelsList, other_content.productInfo.flagTheSea),
                "ImgUrl": g_GetPictrue(other_content.picture) || g_goods_Pic,
                "ProductName": Home.SubName(other_content.productInfo.productName),
                "SalePrice": other_content.productInfo.sellPrice,
                "OriginalPrice": other_content.productInfo.markPrice,
                "Discount": other_content.productInfo.discount.length > 0 ? "<span>" + other_content.productInfo.discount + "折</span>" : "",
                "BtnName": "立即抢购"
            };
            Home.TempDataInsert(tag, data);
        }
        html += '</ul><!--==禁止加class="static"==--><a class="prev static" onclick="Home.Previous(this);"></a><a class="next" onclick="Home.Next(this);"></a></div>';
        if (!isRefresh) {
            html += '</div>';
        }
        if (!isRefresh) {
            $("#mainContent").append(html);
        } else {
            $("#" + tag).parent().parent().html(html);
        }
        Home.PageInit(tag, stpl);
        Home.timeTag = tag;
        var timmer = self.setInterval(Home.ShowLeftTime, g_const_seconds);
        Home.flagCheapInterval.push({ k: tag, v: timmer });
    }
}



var tag = Home.timeTag;
var fast = "";
for (var i in Home.FastBuy) {
    var f = Home.FastBuy[i];
    if (f.id == tag) {
        fast = f;
    }
}
if (fast != "") {
    var date_last = Date.Parse(fast.end);
    var date_now = new Date();
    var ts = date_last.getTime() - date_now.getTime();  //时间差的毫秒数
    if (ts > 0) {
        var hours = Math.floor(ts / g_const_hours);
        var leftmillionseconds = ts % g_const_hours;
        var minutes = Math.floor(leftmillionseconds / g_const_minutes);
        leftmillionseconds = leftmillionseconds % g_const_minutes;
        var seconds = Math.floor(leftmillionseconds / g_const_seconds);

        var hourstring = "0" + hours.toString();
        hourstring = hourstring.substr(hourstring.length - 2, 2);
        var minutestring = "0" + minutes.toString();
        minutestring = minutestring.substr(minutestring.length - 2, 2);

        var secondstring = "0" + seconds.toString();
        secondstring = secondstring.substr(secondstring.length - 2, 2);
        $("#" + tag).parent().parent().find("font[name=countDown]").html('距离本次结束还有：<i>' + hourstring + '</i>时<i>' + minutestring + '</i>分<i>' + secondstring + '</i>秒');;
        if (hours == 0 && minutes == 0 && seconds == 0) {

            for (var i in Home.flagCheapInterval) {
                var timer = Home.flagCheapInterval[i];
                if (timer.k == tag) {
                    self.clearInterval(timer.v);
                }
            }
            $("#" + tag).parent().parent().find("div[name=fastButEnd]").show();
        }
    }
    else {
        for (var i in Home.flagCheapInterval) {
            var timer = Home.flagCheapInterval[i];
            if (timer.k == tag) {
                self.clearInterval(timer.v);
            }
        }
        $("#" + tag).parent().parent().find("div[name=fastButEnd]").show();
    }
} else {
    for (var i in Home.flagCheapInterval) {
        var timer = Home.flagCheapInterval[i];
        if (timer.k == tag) {
            self.clearInterval(timer.v);
        }
    }
    $("#" + tag).parent().parent().find("div[name=fastButEnd]").show();
}
}*/