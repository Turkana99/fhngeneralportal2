import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initParticles();
    }
  }

  initParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 300, // Number of particles
          density: {
            enable: true,
            value_area: 1100, // Higher value makes particles spread out more
          },
        },
        color: {
          value: '#ffffff', // Color of particles
        },
        shape: {
          type: 'circle', // Shape of particles (circle, edge, triangle, polygon, star, image)
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5, // Number of sides if shape is polygon
          },
          image: {
            src: 'img/github.svg', // Image source if shape is image
            width: 50, // Width of the image
            height: 50, // Height of the image
          },
        },
        opacity: {
          value: 0.5, // Opacity of particles
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3, // Size of particles
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true, // Connects particles with lines
          distance: 150, // Distance at which particles are connected
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true, // Enables movement of particles
          speed: 6, // Speed of particles
          direction: 'none', // Direction of movement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
          random: false, // Randomizes particle movement direction
          straight: false, // Particles move in straight lines if true
          out_mode: 'out', // Defines what happens when particles move out of canvas (out, bounce)
          bounce: false, // Enables bouncing off canvas edges
          attract: {
            enable: false, // Attracts particles to a specific point
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas', // Area of interaction (canvas, window)
        events: {
          onhover: {
            enable: true, // Enables interaction on hover
            mode: 'repulse', // Interaction mode on hover (grab, bubble, repulse)
          },
          onclick: {
            enable: true, // Enables interaction on click
            mode: 'push', // Interaction mode on click (push, remove, bubble)
          },
          resize: true, // Recalculates particle density upon window resize
        },
        modes: {
          grab: {
            distance: 400, // Distance particles are able to grab the line (or link)
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400, // Distance at which bubbles spawn
            size: 40, // Size of bubbles
            duration: 2, // Duration of bubble animation
            opacity: 8, // Opacity of bubbles
            speed: 3, // Speed of bubbles
          },
          repulse: {
            distance: 85, // Distance at which particles are repulsed
            duration: 1, // Duration of repulsion animation
          },
          push: {
            particles_nb: 2, // Number of particles pushed
          },
          remove: {
            particles_nb: 2, // Number of particles removed
          },
        },
      },
      retina_detect: true, // Enables retina display support
    });
  }








  
}
