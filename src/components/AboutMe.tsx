import './AboutMe.scss';
import { useIsSectionEnabled } from './hooks/useIsSectionEnabled';

export const AboutMe = () => {
  const isSectionEnabled = useIsSectionEnabled('section-container.about-me');

  return (
    <section className="section-container about-me">
      <h1 className="section-heading about-me">
        ABOUT ME
        <div
          className={
            'section-heading-underline about-me' +
            (isSectionEnabled ? ' enabled' : '')
          }
        />
      </h1>
      <ul className="section-list about-me">
        <li className="section-card-container about-me">
          <aside className="section-card-left about-me">
            <h2 className="about-me-section">Chanoon Na</h2>
            <div className="section-divider about-me" />
          </aside>
          <div className="section-card-right about-me">
            <p className="section-card-right-item about-me description">
              I love solving complicate problems and building useful tools. My
              interests include automation, data processing, data visualization,
              and building tools to make development process more fun. I am
              currently working on my backend skills so that I can expand my
              knowledge and become a full-stack developer.
            </p>
            <h3>Languages</h3>
            <ul className="section-card-right-item about-me languages">
              {LANGUAGES.map((language) => (
                <li key={language} className="about-me-language">
                  {language}
                </li>
              ))}
            </ul>
            <h3>Other experiences</h3>
            <ul className="section-card-right-item about-me other-experiences">
              {OTHER_EXPERIENCES.map((experience) => (
                <li key={experience} className="other-experience">
                  {experience}
                </li>
              ))}
            </ul>
            <h3>Soft skills</h3>
            <ul className="section-card-right-item about-me non-tech-skills">
              {NON_TECH_SKILLS.map((nonTechSkill) => (
                <li key={nonTechSkill} className="non-tech-skill">
                  {nonTechSkill}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

const LANGUAGES = ['Javascript', 'Typescript', 'C', 'C++', 'Haskell', 'Ruby'];
const OTHER_EXPERIENCES = [
  'HTML',
  'CSS',
  'React',
  'Redux',
  'Redux-saga',
  'webpack',
  'node.js',
  'express',
  'Ruby on rails',
  'electron',
  'material-ui',
  'styled-components',
  'postgresql',
  'sqlite3',
  'jest',
  'react testing library',
  'mocha',
  'cypress',
  'circleci',
  'storybook'
];

const NON_TECH_SKILLS = [
  'Task Management',
  'Problem Solving',
  'Agile Development',
  'Adaptability',
  'Fast Learner'
];
