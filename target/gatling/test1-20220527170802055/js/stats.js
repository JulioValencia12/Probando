var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "207",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "101"
    },
    "meanResponseTime": {
        "total": "154",
        "ok": "207",
        "ko": "101"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "154",
        "ok": "207",
        "ko": "101"
    },
    "percentiles2": {
        "total": "181",
        "ok": "207",
        "ko": "101"
    },
    "percentiles3": {
        "total": "202",
        "ok": "207",
        "ko": "101"
    },
    "percentiles4": {
        "total": "206",
        "ok": "207",
        "ko": "101"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.167",
        "ko": "0.167"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles2": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles3": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles4": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
        "ko": "-"
    }
}
    },"req_request-1-redir-7e85b": {
        type: "REQUEST",
        name: "request_1 Redirect 1",
path: "request_1 Redirect 1",
pathFormatted: "req_request-1-redir-7e85b",
stats: {
    "name": "request_1 Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "meanResponseTime": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "percentiles2": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "percentiles3": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "percentiles4": {
        "total": "101",
        "ok": "-",
        "ko": "101"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "-",
        "ko": "0.167"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
