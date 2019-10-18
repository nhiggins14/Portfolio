
$(document).on('click','.L1',function() {
    $('p.boxText').css('display','flex'),
    $('.C1').css('display','none'),
    $('.R1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.L1').addClass('geoBlockActive'),
    $('.L1Title').addClass('titleActive')
}
);

$(document).on('click','.geoBlockActive',function() {
    $('p.boxText').css('display','none'),
    // dig into it right here
    $('.C1').css('display','block'),
    $('.R1').css('display','block'),
    $('#rowCon1').removeClass('rowContainerActive'),
    $('.L1').removeClass('geoBlockActive'),
    $('.L1Title').removeClass('titleActive')
});


$(document).on('click','.C1',function() {
    $('p.boxText').css('display','flex'),
    $('.L1').css('display','none'),
    $('.R1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.C1').addClass('geoBlockActive'),
    $('.C1Title').addClass('titleActive')
}
);
$(document).on('click','.geoBlockActive',function() {
    $('p.boxText').css('display','none'),
    $('.L1').css('display','block'),
    $('.R1').css('display','block'),
    $('#rowCon1').removeClass('rowContainerActive'),
    $('.C1').removeClass('geoBlockActive'),
    $('.C1Title').removeClass('titleActive')
});


$(document).on('click','.R1',function() {
    $('p.boxText').css('display','flex'),
    $('.L1').css('display','none'),
    $('.C1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.R1').addClass('geoBlockActive'),
    $('.R1Title').addClass('titleActive')
}
);

$(document).on('click','.geoBlockActive',function() {
    $('p.boxText').css('display','none'),
    $('.L1').css('display','block'),
    $('.C1').css('display','block'),
    $('#rowCon1').removeClass('rowContainerActive'),
    $('.R1').removeClass('geoBlockActive'),
    $('.R1Title').removeClass('titleActive')
});


// $('.C1').on('click', function () {
//     $('p.boxText').css('display','flex'),
//     $('.L1').css('display','none'),
//     $('.R1').css('display','none'),
//     $('#rowCon1').addClass('rowContainerActive'),
//     $('.C1').addClass('geoBlockActive'),
//     $('.C1Title').addClass('titleActive')
// })
// $('.R1').on('click', function () {
//     $('p.boxText').css('display','flex'),
//     $('.L1').css('display','none'),
//     $('.C1').css('display','none'),
//     $('#rowCon1').addClass('rowContainerActive'),
//     $('.R1').addClass('geoBlockActive'),
//     $('.R1Title').addClass('titleActive')
// })



$(document).on('click','.L3',function() {
    $('.C3').css('display','none'),
    $('.R3').css('display','none'),
    $('.R3').removeClass('blueHover'),
    // $('.L3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.L3').addClass('geoAciveCaseStudy'),
    $('.L3Title').addClass('titleBotActive'),
    $('.caseStudyText').css('display','flex')
}
);

$(document).on('click','.geoAciveCaseStudy',function() {
    $('.C3').css('display','block'),
    $('.R3').css('display','block'),
    // $('.L3').css(' background-image', 'url(../images/Box\ L-3.svg)'),
    $('#rowCon3').removeClass('rowContainerActive'),
    $('.L3').removeClass('geoAciveCaseStudy'),
    $('.L3Title').removeClass('titleBotActive'),
    $('.caseStudyText').css('display','none')
});



$(document).on('click','.C3',function() {
    $('.L3').css('display','none'),
    $('.R3').css('display','none'),
    // $('.L3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.C3').addClass('geoAciveCaseStudy'),
    $('.C3Title').addClass('titleBotActive')
}
);

$(document).on('click','.geoAciveCaseStudy',function() {
    $('.L3').css('display','block'),
    $('.R3').css('display','block'),
    // $('.L3').css(' background-image', 'url(../images/Box\ L-3.svg)'),
    $('#rowCon3').removeClass('rowContainerActive'),
    $('.C3').removeClass('geoAciveCaseStudy'),
    $('.C3Title').removeClass('titleBotActive')
});

$(document).on('click','.R3',function() {
    $('.L3').css('display','none'),
    $('.C3').css('display','none'),
    // $('.L3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.R3').addClass('geoAciveCaseStudy'),
    $('.R3Title').addClass('titleBotActive')
}
);

$(document).on('click','.geoAciveCaseStudy',function() {
    $('.L3').css('display','block'),
    $('.C3').css('display','block'),
    // $('.L3').css(' background-image', 'url(../images/Box\ L-3.svg)'),
    $('#rowCon3').removeClass('rowContainerActive'),
    $('.R3').removeClass('geoAciveCaseStudy'),
    $('.R3Title').removeClass('titleBotActive')
});





// Row 2 Gif Reveals

$(document).on('click','.L2',function() {
    $('.gif1').css('display','block'),
   $('.L2').addClass('gifActive')
}
);


$(document).on('click','.gifActive',function() {
    $('.gif1').css('display','none'),
    $('.L2').removeClass('gifActive')
}
);




$(document).on('click','.C2',function() {
    $('.gif2').css('display','block'),
   $('.C2').addClass('gifActive')
}
);


$(document).on('click','.gifActive',function() {
    $('.gif2').css('display','none'),
    $('.C2').removeClass('gifActive')
}
);

$(document).on('click','.R2',function() {
    $('.gif1').css('display','block'),
   $('.R2').addClass('gifActive')
}
);


$(document).on('click','.gifActive',function() {
    $('.gif1').css('display','none'),
    $('.R2').removeClass('gifActive')
}
);


