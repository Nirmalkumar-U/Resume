import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = ({ name, title, contact }) => (
    <div>
        <div>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className="contact">
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a></p>
            </div>
        </div>
    </div>
);

const Education = ({ education }) => (
    <div className="col-6">
        <div className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree}</p>
                    <p>{edu.year}</p>
                </div>
            ))}
        </div>
    </div>
);

const Experience = ({ experience }) => (
    <div className="col-6">
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3>{exp.title}</h3>
                    <p>{exp.company}</p>
                    <p>{exp.duration}</p>
                    <ul>
                        {exp.tasks.map((task, idx) => (
                            <li key={idx}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const Skills = ({ skills }) => (
    <div className="col-6">
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
);

// Main resume component to render all sections

const App = () => {
    const resumeData = {
        firstName: 'Nirmalkumar',
        lastName: 'Uthamaraj',
        title: 'Software Developer',
        contact: {
            email: 'unirmalkumar3@gmail.com',
            phone: '8778359970',
            linkedin: 'linkedin.com/in/johndoe',
            linkedinLink: 'linkedin.com/in/johndoe',
        },
        education: [
            {
                educate: 'Best Employee Award In ByteForza',
                whereAndYer: 'June 2023 and Nov 2023'
            },
            {
                educate: 'M.Sc.Computer Science',
                whereAndYer: 'KASC - Coimbatore - April 2022'
            },
            {
                educate: 'B.Sc.Computer Science',
                whereAndYer: 'KASC - Coimbatore - Oct 2020'
            },
            {
                educate: 'Understanding Design',
                whereAndYer: 'NPTEL - 2022'
            }
        ],
        experience: [
            {
                title: 'Software Engineer',
                company: 'ByteForza Tecnology',
                duration: 'Augest 2022 - Present',
                description:'description',
                responsibility: [
                    'Developed web applications using React.js',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                ],
                environment:'DotNet Core 6.0, Web API, Angular 14, Bootstrap 5, SQL Server, Power Bi, RDL/RDLC Reporting',
            },
        ],
        skills: {
            frontEnd: [
                'Angular 14',
                'Bootstrap 5',
                'HTML, CSS',
            ],
            backEnd: [
                'ASP DotNet',
                'DotNet Core 6',
                'DotNet Entity Framework',
                'Web API',
                'RDL/RDLC Reporting'
            ],
            dataHandlingTechnologies: [
                'SQL Server',
                'Power Bi'
            ],
            technicalProficiencies: [
                'Azure DevOps',
                'GitHub'
            ]
        },
    };

    return (
        <div className="container-fluid d-flex h-100 w-100 text-start">
            <div className="col-7 p-2 d-flex flex-column justify-content-end ">
                <h1>{resumeData.firstName}</h1>
                <h2>{resumeData.title}</h2>
                <div>
                    <p>Email: {resumeData.contact.email}</p>
                    <p>Phone: {resumeData.contact.phone}</p>
                    <p>LinkedIn: <a href={resumeData.contact.linkedin}>{resumeData.contact.linkedin}</a></p>
                </div>
            </div>
            <div className="col-5 p-2 d-flex flex-column justify-content-end aliceblue">
                <h1>{resumeData.firstName}</h1>
                <h2>{resumeData.title}</h2>
                <div>
                    <p>Email: {resumeData.contact.email}</p>
                    <p>Phone: {resumeData.contact.phone}</p>
                    <p>LinkedIn: <a href={resumeData.contact.linkedin}>{resumeData.contact.linkedin}</a></p>
                </div>
            </div>
        </div>
    );
};

export default App

