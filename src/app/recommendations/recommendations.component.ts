
import { Component, OnInit } from '@angular/core';

interface Recommendation {
  title: string;
  profile?:string;
  subtitle: string;
  text: string;
}

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendations: Recommendation[] = [

    { title: 'Vicentiu Baciou',
      profile:'https://www.linkedin.com/in/vicentiubacioiu',
      subtitle: 'Lead Architect at Snap-on',
      text: `
      I had the opportunity to work with Ioana for almost 5 years (at Cognizant Softvision and then at Snap-on). Ioana is someone you can count on, very hard working and result oriented.
      <br>Her expertise with Web development is varied, having strong front-end programming skills (JavaScript, TypeScript and Angular), but a very good understanding of basic programming principles on other technologies as well (such as SQL, OOP.) 
      At a technical level, she managed to finish complex tasks independently, often working without supervision or even as a single developer on the project. Problem solver, she gets past most issues before asking for help.
      <br>As for work ethic, she's one of the most dedicated developers I've worked with, also being very reliable when it was needed the most. Productivity recommends her, deliverables were ready in time with a high quality coding standard being followed.
      <br>Communicates well whenever it's about the daily status, problems encountered, or a change in scope. Has a fresh, positive attitude towards the project and the team.
      <br>I think Ioana would bring good value as a software developer in any team, small or large, due to her dedication, proven results and technical skills.`
    },
    { title: 'Iulian Dinu',
      profile: 'https://www.linkedin.com/in/iulian-dinu-162267b9/',
      subtitle: 'Lead of Frontend Development at American Greetins',
      text: `
      I am very pleased to write this recommendation on behalf of Ioana Mihailescu in my capacity as Technical Lead of the Front End Development Team of American Greetings Romania.
      <br>Ioana worked as a Frontend Developer and her responsibilities included requirements analysis, design and implementation of complex Web applications using a variety of technologies.
      <br>She and I have collaborated directly and indirectly on various projects, in all of which she showed superior quality work, excellent collaboration with colleagues from within and outside the
      team, great understanding of roles within the process pipeline and in time project delivery.
      <br>I highly recommend Ioana for any position in the IT field that involves complexity and creativity, with high quality requirements.
      <br>She is an exceptionally bright and hardworking
      person who will do her very best to do an outstanding job while tackling any problems that might arise.` 
    },
    { title: 'Maria Tudor',
      profile:'https://www.linkedin.com/in/maria-tudor-3a503a99',
      subtitle: 'Talent Acquisition at American Greetins',
      text: `
      I had the pleasure to work with Ioana twice at this point. I managed her recruitment process when I was part of American Greetings team in Bucharest. 
      <br>She amazed me right from the first discussion. Her humor, her dedication, her passion for everything she was doing made her a great asset to our team, 
      not only from a business point of view but also from a human one. 
      <br>She is always ready to help, to contribute, to add value and to learn. 
      <br>I am sure that any team would be tremendously lucky to have Ioana. I consider myself lucky for being able to learn from her. ` 
    },
    { title: 'Catalin Baciu',
      profile:'https://www.linkedin.com/in/catalin-baciu-95925b17',
      subtitle: 'Enterprise Data Arhitect at 1&1 Internet Development',
      text: `
      I am very pleased to recommend Ioana as a former colleague during our shared time at 1&1.
      <br>Ioana worked on the Data Warehouse team and her responsibilities were data analysis, data loading and transformation.
      <br>We worked together on a couple of projects and she demonstrated great attention to detail and excellent understanding of both business and technical processes. 
      She has excellent collaboration skills and a positive team attitude while sharing her knowledge and working with others.
      <br>I strongly recommend Ioana for any role related to IT and Software Development especially for complex and creative roles that I know will get the best out of her. She takes great pride in the quality of her work and I know that she will be a great addition to any team.  ` 
    }
  ];

  currentIndex = 0;

  ngOnInit() {
    this.showSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.recommendations.length - 1;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.recommendations.length - 1) ? this.currentIndex + 1 : 0;
    this.showSlide(this.currentIndex);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
  }
}
