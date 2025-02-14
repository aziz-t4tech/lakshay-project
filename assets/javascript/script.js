// header navigations
$(document).ready(function () {
    // header scroll
    $(window).scroll

    // Get the current page URL
    let currentPath = window.location.pathname.split("/").pop(); 

    // Remove active class from all header navigation links
    $(".nav-link").removeClass("active");

    // Add active class to the link that matches the current URL
    $(".nav-link").each(function () {
        if ($(this).attr("href") === currentPath) {
            $(this).addClass("active");
        }
    });

    // navigation links Animation
    // for header image
    
    gsap.from(".navbar .navbar-brand", {opacity: 0, x: 100, stagger: 0.2, duration: 1.5});

    // for navigation links
    gsap.from(".navbar .navbar-nav .nav-item", {opacity: 0, y: 50, stagger: 0.2, duration: 1});

    // for search icon
    gsap.from(".navbar .fa-magnifying-glass", {opacity: 0, x: -100, stagger: 0.2, duration: 1.5});
});


// search bar slider code
$(document).ready(function() {
    $('#searchSlider').click(() => {
        $('#searchBar').slideToggle();
    });
});

// home about code
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about p", {
  opacity: 0,
  y: -100,
  stagger: 2, // Reduced stagger for smoother effect
  duration: 1.5,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%", // Starts when #about reaches 80% of the viewport
    toggleActions: "play none none none" // Play animation once
  }
});

gsap.from("#about img", {
  opacity: 0,
  x: 200,
  stagger: 0.5,
  duration: 1.5,
  rotation: 180,
  scale: 2,
  ease: "power2.out", // Changed to power2.out for a smoother effect
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
    toggleActions: "play none none none"
  }
});

// home key-services content
// Register ScrollTrigger plugin

gsap.from("#key-services img", {
  y: -100,
  opacity: 0,
  stagger: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#key-services",
    start: "top 60%", // Triggers when #key-services reaches 80% of viewport
    toggleActions: "play none none none"
  }
});

gsap.from("#key-services ul li", {
  opacity: 0,
  y: -100,
  stagger: 0.5,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#key-services",
    start: "top 60%", // Adjusted for better timing
    toggleActions: "play none none none"
  }
});


// home certifications content

gsap.from("#certifications .CertificationsImg img", {
    y: 400,
    stagger: 1,
    duration: 2.7,
    ease: "power2.out",
    scrollTrigger: {
    trigger: "#certifications",
    start: "top 60%", // Triggers animation when #certifications reaches 80% of viewport
    toggleActions: "play none none none"
  }
});

gsap.from("#certifications ul li", {
    x: 700,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
    trigger: "#certifications",
    start: "top 60%",
    toggleActions: "play none none none"
  }
});


// jQuery Filtering Script
$(document).ready(function(){
    $("#projects .nav-link").click(function(){
        $("#projects .nav-link").removeClass("active");
        $(this).addClass("active");
        let filter = $(this).data("filter");
        $(".project-item").hide();
        if (filter == "all") {
            $(".project-item").fadeIn();
        } else {
            $("." + filter).fadeIn();
        }
    });
});

// about us page code

gsap.from("#about-us p", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    duration: 1.5,
    ease: "bounce.out",
    scrollTrigger: {
    trigger: "#about-us", // Corrected trigger
    start: "top 80%", // Animation starts when #about-us enters 80% of viewport
    toggleActions: "play none none none" // Play animation only once
  }
});

gsap.from("#about-us img", {
  opacity: 0,
  x: 200,
  stagger: 0.5,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#about-us", // Corrected trigger
    start: "top 80%",
    toggleActions: "play none none none"
  }
});


gsap.from(".MissionAndVision .leftContent", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    duration: 1.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".MissionAndVision", // Corrected trigger
      start: "top 80%", // Animation starts when #about-us enters 80% of viewport
      toggleActions: "play none none none" // Play animation only once
    }
  });
  
  gsap.from(".MissionAndVision .rightContent", {
    opacity: 0,
    x: 200,
    stagger: 0.5,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".MissionAndVision", // Corrected trigger
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });


gsap.from(".SisteroCncerns .leftContent", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    duration: 1.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".SisteroCncerns", // Corrected trigger
      start: "top 80%", // Animation starts when #about-us enters 80% of viewport
      toggleActions: "play none none none" // Play animation only once
    }
  });
  
  gsap.from(".SisteroCncerns .rightContent", {
    opacity: 0,
    x: 200,
    stagger: 0.5,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".SisteroCncerns", // Corrected trigger
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });


// project page
gsap.from("#projects ul li", {
    opacity: 0,
    x: -100,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#projects", // Corrected trigger
      start: "top 80%", // Animation starts when #about-us enters 80% of viewport
      toggleActions: "play none none none" // Play animation only once
    }
  });


gsap.from("#project-list .col-md-4", {
    opacity: 0,
    x: -100,
    stagger: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#projects", // Corrected trigger
      start: "top 80%", // Animation starts when #about-us enters 80% of viewport
      toggleActions: "play none none none" // Play animation only once
    }
  });
  
  //services page
  gsap.from("#WorkCategories .col-md-3", {
      opacity: 0,
      y: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      ease: "bounce",
      scrollTrigger: {
        trigger: "#WorkCategories", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });


  gsap.from("#ServicesDetails .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#ServicesDetails", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#kalpProject .col-md-6 img", {
      opacity: 0,
      x: 100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#kalpProject", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#BiharICT .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#BiharICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#RajasthanICT .col-md-6 img", {
      opacity: 0,
      x: 100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#RajasthanICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#OdishaICT .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#OdishaICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#SatelliteEducation .col-md-6 img", {
      opacity: 0,
      x: 100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#SatelliteEducation", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#HimachalICT .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#HimachalICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#UttrakhandSmartClass .col-md-6 img", {
      opacity: 0,
      x: 100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#UttrakhandSmartClass", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#PCMCICT .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#PCMCICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#JharkhandICT .col-md-6 img", {
      opacity: 0,
      x: 100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#JharkhandICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });

  gsap.from("#ChhattisgarhICT .col-md-6 img", {
      opacity: 0,
      x: -100,
      stagger: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#ChhattisgarhICT", // Corrected trigger
        start: "top 80%", // Animation starts when #about-us enters 80% of viewport
        toggleActions: "play none none none" // Play animation only once
      }
    });
