const scrollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration:2000,

};

ScrollReveal().reveal('#logo', { origin: 'right',delay: 500, });

// ScrollReveal().reveal('#main2 h1', { origin: 'right',delay: 500, });


// // ScrollReveal().reveal('#main2 h1', {
// //     delay: 500,
// //     origin: 'right',
// //     duration: 500,
// //     reset: true
// // });

ScrollReveal().reveal("#header-content h2",{
    ...scrollRevealOption,
    origin:"left",
    delay:300,
})

ScrollReveal().reveal("#main2 h1",{
    ...scrollRevealOption,
    origin:"right",
    delay:500,
})

ScrollReveal().reveal("#main2 p",{
    ...scrollRevealOption,
    origin:"right",
    delay:700,
})

ScrollReveal().reveal("#main2 h5",{
    ...scrollRevealOption,
    origin:"right",
    delay:700,
})

ScrollReveal().reveal("#main1-images img",{
    ...scrollRevealOption,
    origin:"right",
    delay:1000,
})
ScrollReveal().reveal("#section1-images img",{
    ...scrollRevealOption,
    origin:"bottom",
    delay:1000,
})
ScrollReveal().reveal("#section1-content h1,p,a",{
    ...scrollRevealOption,
    origin:"left",
    delay:1000,
})

ScrollReveal().reveal("#gallery-images img",{
    ...scrollRevealOption,
    origin:"left",
    delay:1000,
})

ScrollReveal().reveal("#section2 h2,h1",{
    ...scrollRevealOption,
    origin:"left",
    delay:1000,
})
ScrollReveal().reveal("#register1",{
    ...scrollRevealOption,
    origin:"right",
    delay:1000,
})