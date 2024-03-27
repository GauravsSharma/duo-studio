function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
init();
let crsr = document.querySelector("#cursor");
let main = document.querySelector("#main");
main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";

})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text h1",
    scroller: "#main",
    start: "top 15%",
    end: "top 0",
    scrub: 3
  }
});
tl.to(".text h1", {
  x: -60,
  duration: 2,
  delay: 1
}, "a")
tl.to(".text h2", {
  x: 60,
  duration: 2,
  delay: 1
}, "a")
tl.to("#page1 video", {
  width: "90%",
  duration: 2
}, "a")


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text h1",
    scroller: "#main",
    start: "top -127%",
    end: "top -130%",
    scrub: 3
  }
});
tl2.to("#main", {
  backgroundColor: "#fff",

}, "a")
tl2.from("#page2 h1", {
  y: 50,
  opacity: 0
})
tl2.from(".page2-text .col1 h2,.page2-text .col2 p,.page2-text .col2 button", {
  y: 50,
  opacity: 0
})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text h1",
    scroller: "#main",
    start: "top -500%",
    end: "top -520%",
    scrub: 3,
    // markers:true
  }
});
tl3.to("#main", {
  backgroundColor: "#0f0d0d",
})
tl3.from(".elem .text-div h1", {
  // opacity:1,
})

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let att = elem.getAttribute("data-image");
    crsr.style.width = "300px";
    crsr.style.height = "300px";
    crsr.style.borderRadius = "10px"
    crsr.style.background = `url(${att})`

  })
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent"
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%"
    crsr.style.background = `none`
    crsr.style.backgroundColor = `#edbfff`

  })
})

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text h1",
    scroller: "#main",
    start: "top -250%",
    end: "top -260%",
    scrub: 3,
    // markers:true
  }
});
tl4.from("#page3 h1", {
  opacity: 0,
  y: 60
})
tl4.from("#page3 .page3-div video", {
  opacity: 0,
  x: 60
})
tl4.from("#page3 .page3-div img", {
  opacity: 0,
  x: -60
})