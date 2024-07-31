import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateUrlOnScroll();
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateUrlOnScroll();
  }

  updateUrlOnScroll() {
    const sections = [
      { id: 'about-me', path: '/about-me' },
      { id: 'recommendations', path: '/recommendations' },
      { id: 'oneandone-internet', path: '/oneandone-internet' },
      { id: 'american-greetings', path: '/american-greetings' },
      { id: 'cognizant', path: '/cognizant' },
      { id: 'snapon', path: '/snapon' },
    ];

    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    let foundSection = false;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
          if (this.router.url !== section.path) {
            this.router.navigate([section.path], { replaceUrl: true });
          }
          foundSection = true;
          break;
        }
      }
    }

    // Scenario if no section is found
    if (!foundSection && this.router.url !== sections[0].path) {
      this.router.navigate([sections[0].path], { replaceUrl: true });
    }
  }
}
