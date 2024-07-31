import { Component, OnInit } from '@angular/core';

interface Section {
  title: string;
  description: string;
  image: string;
  class?: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  sections: Section[] = [
    {
      title: 'About Me',
      description: `I'm a Senior Frontend Developer, who loves to manipulate pixels.
      I'm passionate about accessibility, UX, algorithms, and computer science and for the last 7+ years, I've been creating responsive websites and applications using HTML, CSS, JavaScript, Typescript, Angular and modern libraries/frameworks. 
      `,
      image: '../assets/images/aboutme_square.png'
    },
    {
      title: 'My Career',
      description: `
      I started as an ETL developer focusing on SQL, migrations, and data manipulation before earning my Engineering Computer Science Degree.
      My passion for frontend development grew while assisting various departments within the company.<br>At American Greetings, I began my frontend
       career with HTML, CSS, and JavaScript. Since then, I've led migrations, managed teams, and developed responsive web apps with Angular, Typescript,
       while focusing in workflow optimization, code reviews, and mentoring.`,
      image: '../assets/images/maiawork.png',
      class: 'myCareer'
    },
    {
      title: 'My Hobbies',
      description: `The second thing that brings me joy is art. Animals and nature come first.
      Traveling is a key part of who I am, exploring new places, learning about different cultures, and seeing the world. Even on my travels, 
      I'm always trying to make more time to read, but as a cinephile, movies take a lot of my time.<br>
      Additionally, I enjoy taking pictures and baking, especially since they help me decompress. (Assuming I don't set the kitchen on fire)
      `,
      image: '../assets/images/passions.png',
      class: 'myHobbies'
    },
  ];

  selectedSection: Section = this.sections[0];

  ngOnInit() {
  }

  selectSection(section: Section) {
    this.selectedSection = section;
  }
}
