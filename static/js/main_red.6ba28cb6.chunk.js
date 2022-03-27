(this["webpackJsonpvoice-conversion"] = this["webpackJsonpvoice-conversion"] || []).push([[0], [, function(e, t, a) {}, , , , , , , , function(e, t, a) {
    e.exports = a(16)
}, , , , , function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(0),
        n = a.n(r),
        o = a(8),
        l = a.n(o);
    a(14), a(1);
    var s = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = e.u2,
            o = e.u3,
            l = e.u4,
            s = e.u5;
        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Ground truth:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Unsupervised Tacotron 2:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Supervised Tacotron 2:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "RR"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: l,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoPST(Proposed)"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: s,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    var u = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = e.u2,
            o = e.u3,
            l = e.t1,
            s = e.t2;
        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("p", {
            style: {
                padding: "1em"
            }
        }, n.a.createElement("font", {
            style: {
                fontWeight: "bold"
            }
        }, "Source speech: "), n.a.createElement("font", {
            style: {
                fontStyle: "italic"
            }
        }, '"', l, '"')), n.a.createElement("p", {
            style: {
                padding: "1em"
            }
        }, n.a.createElement("font", {
            style: {
                fontWeight: "bold"
            }
        }, "Stretched word/phrase: "), n.a.createElement("font", {
            style: {
                fontStyle: "italic"
            }
        }, '"', s, '"')), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "ABNORMAL:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "RR"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoPST(Proposed)"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    var _ = function(e) {
        e.root, e.reverse;
        var t = e.title,
            a = e.u1,
            r = (e.u2, e.u3),
            o = e.u4,
            l = e.u5;
        return n.a.createElement("div", {
            className: "wrapper"
        }, n.a.createElement("p", {
            className: "block-label"
        }, t), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "Source speech:"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: a,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))), n.a.createElement("div", {
            className: "rowv"
        }, n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoVC"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: r,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "RR"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: o,
            type: "audio/wav"
        }), "Your browser does not support the audio element.")), n.a.createElement("div", {
            className: "element"
        }, n.a.createElement("p", null, "AutoPST(Proposed)"), n.a.createElement("audio", {
            controls: !0
        }, n.a.createElement("source", {
            src: l,
            type: "audio/wav"
        }), "Your browser does not support the audio element."))))
    };
    a(15);
    var c = function(e) {
        return n.a.createElement("div", {
            id: "main"
        }, n.a.createElement("div", {
            className: "main-inner"
        }, n.a.createElement("h1", {
            className: "main-title"
        }, "Unsupervised Text-to-Speech Synthesis by Unsupervised Automatic Speech Recognition:", n.a.createElement("font", {
            className: "red"
        }, " Audio Demo")), n.a.createElement("div", {
            className: "introduction"
        }, n.a.createElement("p", null, "This demo webpage contains example audios generated by ", n.a.createElement("font", {
            className: "red"
        }, "Unsupervised Tacotron 2"), ", which is an unsupervised text-to-speech synthesis (TTS) algorithm trained on", n.a.createElement("font", {
            className: "red"
        }, " unpaired"), " speech and text data."), n.a.createElement("p", {
            style: {
                marginTop: "1.5em"
            }
        }, "In this demo, you will hear speech synthesis results between our ", n.a.createElement("font", {
            className: "red"
        }, "unsupervised TTS system"), " and a ", n.a.createElement("font", {
            className: "red"
        }, "supervised TTS sytem"), ". The generated utterances are from the following algorithms:"), n.a.createElement("ul", null, n.a.createElement("li", null, n.a.createElement("font", {
            className: "red"
        }, "Unsupervised Tacotron 2"), " \u2013 The proposed unsupervised TTS algorithm trained without any paired speech and text data"), n.a.createElement("li", null, n.a.createElement("font", {
            className: "red"
        }, "Supervised Tacotron 2"), " \u2013 A state-of-the-art supervised TTS algorithm trained with paired speech and text data", n.a.createElement("sup", null, "[1]"), "."), n.a.createElement("li", null, n.a.createElement("font", {
            className: "red"
        }, "Ground truth"), " \u2013 Ground truth speech utterance"))), n.a.createElement(s, {
            title: "English",
            u1: "./ground_truth/p245/p245_003001.wav",
            u2: "./ground_truth/p231_007.wav",
            u3: "./autovc/700000_1.0/p245_p231_003001.wav",
            u4: "./naive_rr/500000_1.0/p245_p231_003001.wav",
            u5: "./31_01/580000_1.0/p245_p231_003001.wav"
        }), n.a.createElement(s, {
            title: "Japanese",
            u1: "./ground_truth/p270/p270_003002.wav",
            u2: "./ground_truth/p231_007.wav",
            u3: "./autovc/700000_1.0/p270_p231_003002.wav",
            u4: "./naive_rr/500000_1.0/p270_p231_003002.wav",
            u5: "./31_01/580000_1.0/p270_p231_003002.wav"
        }), n.a.createElement(s, {
            title: "Hungarian",
            u1: "./ground_truth/p270/p270_024001.wav",
            u2: "./ground_truth/p239_007.wav",
            u3: "./autovc/700000_1.0/p270_p239_024001.wav",
            u4: "./naive_rr/500000_1.0/p270_p239_024001.wav ",
            u5: "./31_01/580000_1.0/p270_p239_024001.wav"
        }), n.a.createElement(s, {
            title: "Spanish",
            u1: "./ground_truth/p245/p245_001.wav",
            u2: "./ground_truth/p239_007.wav",
            u3: "./autovc/700000_1.0/p245_p239_001.wav",
            u4: "./naive_rr/500000_1.0/p245_p239_001.wav",
            u5: "./31_01/580000_1.0/p245_p239_001.wav"
        }), n.a.createElement(s, {
            title: "Finnish",
            u1: "./ground_truth/p270/p270_024002.wav",
            u2: "./ground_truth/p239_007.wav",
            u3: "./autovc/700000_1.0/p270_p239_024002.wav",
            u4: "./naive_rr/500000_1.0/p270_p239_024002.wav",
            u5: "./31_01/580000_1.0/p270_p239_024002.wav"
        }), n.a.createElement(s, {
            title: "German",
            u1: "./ground_truth/p231/p231_003001.wav",
            u2: "./ground_truth/p245_007.wav",
            u3: "./autovc/700000_1.0/p231_p245_003001.wav",
            u4: "./naive_rr/500000_1.0/p231_p245_003001.wav",
            u5: "./31_01/580000_1.0/p231_p245_003001.wav"
        })))
    };
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    l.a.render(n.a.createElement(c, null), document.getElementById("wrapper")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
        e.unregister()
    }))
}], [[9, 1, 2]]]);
//# sourceMappingURL=main.6ba28cb6.chunk.js.map


