var media_queries = [
    {
        "_comment": "less than 767px",
        "query": "(max-width: 767px)",
        "callback": function (mql) {
            if (mql.matches) {
                $("#meta").addClass("justify-content-center");
                $("#meta").removeClass("justify-content-end");
                $("#navigation").removeClass("justify-content-between");
            }
        }
    },
    {
        "_comment": "more than 768px",
        "query": "(min-width: 768px)",
        "callback": function (mql) {
            if (mql.matches) {
                $("#meta").removeClass("justify-content-center");
                $("#meta").addClass("justify-content-end");
                $("#navigation").addClass("justify-content-between");
            }
        }
    }
]
var mqls = media_queries.map(function(mq) {
    return [window.matchMedia(mq.query), mq.callback];
});
mqls.map(function([mql, callback]) {
    mql.addListener(callback);
    callback(mql);
});
