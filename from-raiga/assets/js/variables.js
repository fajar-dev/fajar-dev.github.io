const variables = { 
  quotes: [
    { quote: '', author: "from: raiga" },
   ],

  nicknames: ["wilda"],
  generated: ["SELAMAT ULANG TAHUN !!"],
};
const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateTypeIt = (el, speed, cursor, arr) => {
    const typeit = new TypeIt(el, { speed, cursor, lifeLike: true });
    const lengthValue = arr.length;
    let i = 0;
    for (i; i < lengthValue; i++) {
        let key = arr[i];
        let val = parseInt(key.slice(1))
        if (key.startsWith("^")) typeit.pause(val);
        else if (key.startsWith("<")) {
            if (key.length == 1) typeit.delete();
            else typeit.delete(val);
        }
        else typeit.type(key);
    }
    typeit.go();
}


const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 8000,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "./assets/img/balloons.png",
        width: 60,
        height: 60,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 14,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 80,
      color: "#000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.3,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
