if (typeof stat_extra_id === 'undefined') {
    var stat_extra_id = 0;
}
if (typeof stat_type === 'undefined') {
    var stat_type = 0;
}
$.ajax({
    timeout: 5000,
    type: 'post',
    dataType: 'json',
    data: {
        extra_id: stat_extra_id,
        type: stat_type,
        url: window.location.href,
    },
    url: '/index/stat/browse.html',
});