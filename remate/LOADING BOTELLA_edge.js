/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'VASO_VACIO2',
                type: 'image',
                rect: ['-561px', '-765px','2380px','2380px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VASO%20VACIO.svg",'0px','0px'],
                transform: [[],[],[],['0.01316','0.01316']]
            },
            {
                id: 'BOTELLA2',
                type: 'image',
                rect: ['10px', '-1942px','1654px','4621px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BOTELLA2.svg",'0px','0px'],
                transform: [[],[],[],['0.03203','0.03203']]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['618px', '435px','23px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.95453']]
            },
            {
                id: 'Rectangle2Copy3',
                type: 'rect',
                rect: ['671px', '435px','23px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.95453']]
            },
            {
                id: 'VASO_VACIO2Copy3',
                type: 'image',
                rect: ['-561px', '-765px','2380px','2380px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VASO%20VACIO.svg",'0px','0px'],
                transform: [[],[],[],['0.01316','0.01316']]
            },
            {
                id: 'Rectangle2Copy',
                type: 'rect',
                rect: ['618px', '435px','23px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.95453']]
            },
            {
                id: 'VASO_VACIO2Copy7',
                type: 'image',
                rect: ['-411px', '-765px','2380px','2380px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VASO%20VACIO.svg",'0px','0px'],
                transform: [[],[],[],['0.01316','0.01316']]
            },
            {
                id: 'Rectangle2Copy5',
                type: 'rect',
                rect: ['618px', '435px','23px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.95453']]
            },
            {
                id: 'VASO_VACIO2Copy6',
                type: 'image',
                rect: ['-461px', '-765px','2380px','2380px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"VASO%20VACIO.svg",'0px','0px'],
                transform: [[],[],[],['0.01316','0.01316']]
            },
            {
                id: 'Rectangle2Copy4',
                type: 'rect',
                rect: ['618px', '435px','23px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['0.95453']]
            },
            {
                id: 'LOGO_COPA',
                display: 'block',
                type: 'image',
                rect: ['-628px', '-1110px','2130px','2820px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LOGO%20COPA.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2Copy4}": [
                ["style", "top", '435px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["transform", "scaleX", '0.95453'],
                ["style", "height", '3px'],
                ["style", "left", '718px'],
                ["style", "width", '23px']
            ],
            "${_VASO_VACIO2}": [
                ["style", "top", '-765px'],
                ["transform", "scaleY", '0.01316'],
                ["style", "height", '2380px'],
                ["transform", "scaleX", '0.01316'],
                ["style", "left", '-508px'],
                ["style", "width", '2380px']
            ],
            "${_VASO_VACIO2Copy7}": [
                ["style", "top", '-765px'],
                ["transform", "scaleY", '0.01316'],
                ["style", "height", '2380px'],
                ["transform", "scaleX", '0.01316'],
                ["style", "left", '-411px'],
                ["style", "width", '2380px']
            ],
            "${_VASO_VACIO}": [
                ["style", "left", '-1701px'],
                ["style", "top", '-1701px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '435px'],
                ["style", "height", '3px'],
                ["transform", "scaleX", '0.95453'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "left", '671px'],
                ["style", "width", '23px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '435px'],
                ["style", "height", '3px'],
                ["transform", "scaleX", '0.95453'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "left", '618px'],
                ["style", "width", '23px']
            ],
            "${_BOTELLA2}": [
                ["style", "top", '-1942px'],
                ["transform", "scaleY", '0.03203'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '4621px'],
                ["transform", "scaleX", '0.03203'],
                ["style", "left", '10px'],
                ["style", "width", '1654px']
            ],
            "${_LOGO_COPA}": [
                ["style", "top", '-1110px'],
                ["style", "opacity", '0'],
                ["style", "left", '-628px'],
                ["style", "display", 'block']
            ],
            "${_VASO_VACIO2Copy6}": [
                ["style", "top", '-765px'],
                ["transform", "scaleY", '0.01316'],
                ["style", "height", '2380px'],
                ["transform", "scaleX", '0.01316'],
                ["style", "left", '-461px'],
                ["style", "width", '2380px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '435px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["transform", "scaleX", '0.95453'],
                ["style", "height", '3px'],
                ["style", "left", '671px'],
                ["style", "width", '23px']
            ],
            "${_VINO}": [
                ["style", "top", '-1021px'],
                ["style", "left", '-1534px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1200px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "top", '435px'],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["transform", "scaleX", '0.95453'],
                ["style", "height", '3px'],
                ["style", "left", '768px'],
                ["style", "width", '23px']
            ],
            "${_VASO_VACIO2Copy3}": [
                ["style", "top", '-765px'],
                ["transform", "scaleY", '0.01316'],
                ["style", "height", '2380px'],
                ["transform", "scaleX", '0.01316'],
                ["style", "left", '-561px'],
                ["style", "width", '2380px']
            ],
            "${_BOTELLA3}": [
                ["style", "left", '-1620px'],
                ["style", "top", '-1110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid6", tween: [ "style", "${_Rectangle2Copy}", "height", '22px', { fromValue: '3px'}], position: 1250, duration: 1250 },
                { id: "eid36", tween: [ "style", "${_Rectangle2Copy4}", "height", '22px', { fromValue: '3px'}], position: 6500, duration: 1250 },
                { id: "eid3", tween: [ "style", "${_Rectangle2}", "height", '22px', { fromValue: '3px'}], position: 4000, duration: 1250 },
                { id: "eid9", tween: [ "style", "${_VASO_VACIO2}", "left", '-508px', { fromValue: '-508px'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Rectangle2Copy5}", "top", '416px', { fromValue: '435px'}], position: 9250, duration: 1250 },
                { id: "eid35", tween: [ "style", "${_Rectangle2Copy4}", "top", '416px', { fromValue: '435px'}], position: 6500, duration: 1250 },
                { id: "eid5", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,92,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 4000, duration: 1250 },
                { id: "eid44", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-130deg', { fromValue: '0deg'}], position: 0, duration: 1250 },
                { id: "eid71", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-129deg', { fromValue: '-130deg'}], position: 1250, duration: 1250 },
                { id: "eid72", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-97deg', { fromValue: '-129deg'}], position: 2500, duration: 500 },
                { id: "eid73", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-105deg', { fromValue: '-97deg'}], position: 3000, duration: 1000 },
                { id: "eid74", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-133deg', { fromValue: '-105deg'}], position: 4000, duration: 250 },
                { id: "eid75", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-128deg', { fromValue: '-133deg'}], position: 4250, duration: 1000 },
                { id: "eid76", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-95deg', { fromValue: '-128deg'}], position: 5250, duration: 1250 },
                { id: "eid77", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-136deg', { fromValue: '-95deg'}], position: 6500, duration: 250 },
                { id: "eid78", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-134deg', { fromValue: '-136deg'}], position: 6750, duration: 1000 },
                { id: "eid79", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-87deg', { fromValue: '-134deg'}], position: 7750, duration: 500 },
                { id: "eid80", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-133deg', { fromValue: '-87deg'}], position: 8250, duration: 1000 },
                { id: "eid81", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-130deg', { fromValue: '-133deg'}], position: 9250, duration: 1250 },
                { id: "eid82", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '-117deg', { fromValue: '-130deg'}], position: 10500, duration: 250 },
                { id: "eid83", tween: [ "transform", "${_BOTELLA2}", "rotateZ", '0deg', { fromValue: '-117deg'}], position: 10750, duration: 1250 },
                { id: "eid43", tween: [ "style", "${_BOTELLA2}", "top", '-1966px', { fromValue: '-1942px'}], position: 0, duration: 1250 },
                { id: "eid63", tween: [ "style", "${_BOTELLA2}", "top", '-1969px', { fromValue: '-1966px'}], position: 1250, duration: 1250 },
                { id: "eid85", tween: [ "style", "${_BOTELLA2}", "top", '-1943px', { fromValue: '-1969px'}], position: 2500, duration: 9500 },
                { id: "eid10", tween: [ "style", "${_Rectangle2}", "left", '671px', { fromValue: '671px'}], position: 4000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Rectangle2Copy5}", "height", '22px', { fromValue: '3px'}], position: 9250, duration: 1250 },
                { id: "eid7", tween: [ "style", "${_Rectangle2Copy}", "top", '416px', { fromValue: '435px'}], position: 1250, duration: 1250 },
                { id: "eid4", tween: [ "style", "${_Rectangle2}", "top", '416px', { fromValue: '435px'}], position: 4000, duration: 1250 },
                { id: "eid42", tween: [ "style", "${_BOTELLA2}", "left", '-140px', { fromValue: '10px'}], position: 0, duration: 1250 },
                { id: "eid65", tween: [ "style", "${_BOTELLA2}", "left", '-87px', { fromValue: '-140px'}], position: 2500, duration: 1500 },
                { id: "eid66", tween: [ "style", "${_BOTELLA2}", "left", '-86px', { fromValue: '-87px'}], position: 4000, duration: 1250 },
                { id: "eid67", tween: [ "style", "${_BOTELLA2}", "left", '-40px', { fromValue: '-86px'}], position: 5250, duration: 1250 },
                { id: "eid68", tween: [ "style", "${_BOTELLA2}", "left", '-39px', { fromValue: '-40px'}], position: 6500, duration: 1250 },
                { id: "eid69", tween: [ "style", "${_BOTELLA2}", "left", '-36px', { fromValue: '-39px'}], position: 7750, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_BOTELLA2}", "left", '10px', { fromValue: '-36px'}], position: 8750, duration: 500 },
                { id: "eid84", tween: [ "style", "${_BOTELLA2}", "left", '16px', { fromValue: '10px'}], position: 9250, duration: 2750 },
                { id: "eid37", tween: [ "style", "${_Rectangle2Copy4}", "left", '718px', { fromValue: '718px'}], position: 6500, duration: 0 },
                { id: "eid34", tween: [ "color", "${_Rectangle2Copy4}", "background-color", 'rgba(255,92,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 6500, duration: 1250 },
                { id: "eid41", tween: [ "style", "${_Rectangle2Copy5}", "left", '768px', { fromValue: '768px'}], position: 9250, duration: 0 },
                { id: "eid38", tween: [ "color", "${_Rectangle2Copy5}", "background-color", 'rgba(255,92,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 9250, duration: 1250 },
                { id: "eid100", tween: [ "style", "${_LOGO_COPA}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "color", "${_Rectangle2Copy}", "background-color", 'rgba(255,92,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 1250, duration: 1250 },
                { id: "eid99", tween: [ "style", "${_LOGO_COPA}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000 }            ]
        }
    }
},
"BOTELLA": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'BOTELLA',
                    rect: ['-2308px', '-1296px', '5130px', '2880px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.1', '0.1']],
                    fill: ['rgba(0,0,0,0)', 'images/BOTELLA.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '288px'],
                ["style", "width", '513px']
            ],
            "${_BOTELLA}": [
                ["style", "top", '-1296px'],
                ["style", "left", '-2308px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4490374");
