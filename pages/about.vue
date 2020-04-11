<template>
  <main class="container">
    <section class="section hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-size-1">Hi, I’m Pedro Cruz 👋</h1>
            <p class="is-size-5">
              Since the beginning of my journey as a frontend developer with
              design skills, I’ve built several products for all companies I’ve
              worked for, collaborated with talented people to create digital
              products for both business and consumer use. I’m quietly
              confident, avid learner, and positive thinkerer. I love to see
              tech conferences on youtube, learning new things about coding,
              love to travel with my wife to anywhere in the world. Have a nice
              dog and love to get out of home with my friends. I've been
              organizing freeCodeCamp meetups in Lisbon for the past years and I
              love to mentor new people to start their careers as software
              developers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Resume
      :education="education"
      :skills="skills"
      :tools="tools"
      :pdfBtn="downloadBtn"
      :workExperience="workExperience"
    />
  </main>
</template>

<script>
import Resume from '~/components/organisms/Resume'

export default {
  name: 'About',
  components: {
    Resume
  },
  data() {
    return {
      education: [
        {
          title: 'Udemy',
          date: 'From the beggining',
          courses: [
            'VueJS 2 - The complete guide with Vuex and VueRouter',
            'GraphQL with React',
            'Advanced React and Redux',
            'Modern React with Redux',
            'The Complete Nodejs Developer Course',
            'Node with React'
          ]
        },
        {
          title: 'KCSIT',
          date: '2016',
          courses: [
            'Android Basic Course',
            'iOS Basic Course',
            'SCRUM',
            'Javascript',
            'Presentation Techniques and Meetings Management',
            'Web-apps Secutiry'
          ]
        },
        {
          title: 'Alphappl',
          date: '2014 - "Be a developer"',
          courses: [
            'C',
            'C#',
            'HTML/CSS/JS',
            'Bootstrap',
            'PHP',
            'ASP.NET',
            'Windows Phone 8 Apps'
          ]
        },
        {
          title: 'Restart',
          date: '2012',
          courses: [
            'Quark Express',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Adobe After Effects'
          ]
        },
        {
          title: 'Computer Science Degree (Uncompleted) IPS - EST',
          date: '2009 - 2011',
          courses: ['']
        }
      ],
      skills: [
        'HTML5/CSS3/JS',
        'SASS/LESS',
        'React',
        'styled-components',
        'Redux',
        'Gatsby',
        'Vue',
        'Nuxt',
        'Vuex',
        'Bootstrap',
        'Bulma',
        'UI/UX'
      ],
      tools: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe XD',
        'Sketch',
        'VScode'
      ],
      downloadBtn: {
        url: 'cv.pdf',
        name: 'Download PDF',
        class: 'download'
      },
      workExperience: [
        {
          company: 'Piksel',
          from: '07/2019',
          to: '04/2020',
          position: 'Frontend Developer (Contractor)',
          description:
            'Working as a freelancer remote frontend developer for video streaming CMS with react, styled-components, jest, enzyme, storybook'
          // responsabilities: [
          //   'Bug fixing',
          //   'Helped maintain documentation for the project',
          //   'Worked with React, styled-components, Jest, Storybook'
          // ]
        },
        {
          company: 'Airbeem',
          from: '05/2019',
          to: '06/2019',
          position: 'Frontend Developer (Contractor)',
          description:
            'Developed a product with a team about video streaming as a freelancer remote frontend developer. The stack used was Nuxt, Bulma, Sass, Jest, Storybook'
          // responsabilities: [
          //   'Working on new features for a Video Streaming app',
          //   'Worked with Nuxt, Bulma, Sass, Jest, Storybook'
          // ]
        },
        {
          company: 'RentLovers',
          from: '07/2018',
          to: '06/2019',
          position: 'Frontend Developer | UI/UX Designer',
          description:
            'Responsible for UI/UX layers for the platform and clean code as a frontend developer. Used Sketch + Adobe Illustrator for branding and web app design and React/styled-components for frontend development.'
          // responsabilities: [
          //   'Responsible for UI/UX Layers',
          //   'Responsible for Frontend development, used the best coding practices',
          //   'Builted a platform to connect landlords with renters'
          // ]
        },
        {
          company: 'diconium',
          from: '11/2018',
          to: '02/2019',
          position: 'Software Engineer',
          description:
            'I had 2 projects during the time I have been at diconium. One worked as a team leader of the project, on the retail market developed with javascript, jQuery, JavaSpring and Less. The other project, on the automotive business area, worked with React, Sass, webpack, Apollo GraphQL, Node'
          // responsabilities: [
          //   'Leading an old project on retail market (eCommerce project), worked with JavaSpring, javascript, css, jQuery and Less',
          //   'Worked as frontend developer for a mechanical parts eCommerce, worked with React, Sass, webpack, Apollo GraphQL, Node'
          // ]
        },
        {
          company: 'Grupo Impresa',
          from: '05/2016',
          to: '11/2018',
          position: 'Frontend Developer',
          description:
            'I had a lot of projects about media brands like Expresso, SIC, SICnoticias, VISÃO, BLITZ. I was responsible only for maintaining the websites and complete issues from superiors. Developed with Twig templating, Symphony framework (PHP), javascript(es5+), Sass, Less'
          // responsabilities: [
          //   'Worked on new features / bug fixes on every branding website of a specific niche.',
          //   'Developed with javascript (es5+), Twig Templating, Symphony Framework (PHP)'
          // ]
        },
        {
          company: 'KCSIT',
          from: '02/2015',
          to: '05/2016',
          position: 'Junior Consultant',
          description:
            'Have built a backoffice for companies seeing analytics values for their own brands. I developed with HTML5/CSS3/JS(vanilla), handlebars, jQuery, Bootstrap'
          // responsabilities: [
          //   'Developed a new Backoffice for social marketing about a specific company.',
          //   'Built on HTML5/CSS3/JS(vanilla)/Bootstrap, jQuery, handlebars'
          // ]
        },
        {
          company: 'Viatecla',
          from: '10/2014',
          to: '01/2015',
          position: 'Junior Software Developer',
          description:
            'I had made a design and code backoffice for international conference on the tourism business area. From their sponsors, the backoffice gives the opportunity to schedule meetings with clients or possible investor where they meet during the event. Developed with HTML5/CSS3/JS(vanilla), jQuery, Bootstrap, Razor, C# (everything on MVC pattern)'
          // responsabilities: [
          //   'Responsible for UI/UX Design for a specific part of a complex project on tourism bussiness area',
          //   'Developed with Razor (HTML5/CSS3/Javascript(vanilla)), jQuery, Bootstrap. Everything under a MVC Pattern'
          // ]
        },
        {
          company: 'CDSI',
          from: '06/2014',
          to: '09/2014',
          position: 'Junior Software Developer',
          description:
            'Worked on a new backoffice for insurance companies where they see a list with all their clients about any insurance. Worked with ASP.NET, VB.NET, HTML5/CSS3/JS(vanilla), jQuery'
          // responsabilities: [
          //   'Developed a new backoffice for insurance companies',
          //   'Builded with ASP.NET, VB.NET, HTML5/CSS3/JS(vanilla), jQuery'
          // ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.downloadLabel {
  margin-top: 1.25rem;
}
</style>
