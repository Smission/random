import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFilePdf, FaExternalLinkAlt, FaAward, FaGraduationCap, FaBriefcase, FaLaptopCode, FaNewspaper, FaReact, FaJs, FaDatabase, FaServer, FaAws, FaCode, FaJava, FaGoogle, FaChartLine, FaChartBar, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import { SiTypescript, SiDocker, SiKubernetes, SiMongodb, SiMicrosoftazure, SiRedux } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { 
    AboutContainer, 
    MainContainer, 
    AboutHeader, 
    AboutTitle, 
    AboutContent, 
    Section, 
    SectionTitle, 
    ExperienceItem, 
    ExperienceTitle, 
    ExperienceCompany, 
    ExperienceDuration,
    ExperienceDescription,
    SkillsContainer,
    SkillCategory,
    SkillItem,
    ContactInfo,
    ContactItem,
    SocialLinks,
    SocialLink
} from './AboutElements';

const About = () => {
    const yearsOfExperience = new Date().getFullYear() - 2021;
    
    return (
        <AboutContainer>
            <MainContainer>
                <AboutHeader>
                    <AboutTitle>About Me</AboutTitle>
                </AboutHeader>

                <Section>
                    <SectionTitle><FaBriefcase /> Hey There!</SectionTitle>
                    <AboutContent>
                        I'm a backend engineer who loves turning complex problems into elegant solutions. By day, I build systems that scale and systems that don't (yet). By night, you'll find me watching Carwow drag races or getting lost in new music.
                    </AboutContent>
                    <AboutContent>
                        This space is where I share not just my professional journey, but also random thoughts, lessons learned, and the occasional life update. I believe in continuous learning and pushing boundaries, both in tech and in life.
                    </AboutContent>
                    <AboutContent>
                        In my free time, I enjoy playing video games, reading about history, and trying out new recipes in the kitchen. I'm also passionate about photography and capturing moments that tell a story.
                    </AboutContent>
                </Section>

                <Section>
                    <SectionTitle><FaLaptopCode /> Technical Skills</SectionTitle>
                    <SkillsContainer>
                        <SkillCategory>
                            <h3>Backend</h3>
                            <SkillItem><FaCode /> Golang</SkillItem>
                            <SkillItem><FaCode /> C#</SkillItem>
                            <SkillItem><FaJava /> Spring Boot (Java/Kotlin)</SkillItem>
                        </SkillCategory>
                        
                        <SkillCategory>
                            <h3>Databases</h3>
                            <SkillItem><FaDatabase /> PostgreSQL</SkillItem>
                            <SkillItem><FaDatabase /> MySQL</SkillItem>
                            <SkillItem><SiMongodb /> MongoDB</SkillItem>
                            <SkillItem><FaDatabase /> InfluxDB</SkillItem>
                            <SkillItem><FaDatabase /> Apache Superset</SkillItem>
                            <SkillItem><FaDatabase /> Azure SQL</SkillItem>
                        </SkillCategory>
                        
                        <SkillCategory>
                            <h3>Cloud & Infrastructure</h3>
                            <SkillItem><SiMicrosoftazure /> Microsoft Azure</SkillItem>
                            <SkillItem><FaAws /> AWS</SkillItem>
                            <SkillItem><FaGoogle /> GCP</SkillItem>
                            <SkillItem><SiKubernetes /> Kubernetes</SkillItem>
                            <SkillItem><SiDocker /> Docker</SkillItem>
                            <SkillItem><SiDocker /> Docker Swarm</SkillItem>
                            <SkillItem><FaServer /> Serverless</SkillItem>
                        </SkillCategory>
                        
                        <SkillCategory>
                            <h3>Monitoring & Observability</h3>
                            <SkillItem><FaChartLine /> Prometheus</SkillItem>
                            <SkillItem><FaChartBar /> Grafana</SkillItem>
                            <SkillItem><FaSearch /> Instana</SkillItem>
                            <SkillItem><FaSearch /> Sumo Logic</SkillItem>
                            <SkillItem><FaExclamationTriangle /> Sentry</SkillItem>
                        </SkillCategory>
                        
                        <SkillCategory>
                            <h3>Messaging Systems</h3>
                            <SkillItem><FaEnvelope /> Kafka</SkillItem>
                            <SkillItem><FaEnvelope /> NATS JetStream</SkillItem>
                            <SkillItem><FaEnvelope /> RabbitMQ</SkillItem>
                            <SkillItem><FaEnvelope /> MQTT</SkillItem>
                            <SkillItem><FaEnvelope /> Redpanda</SkillItem>
                        </SkillCategory>
                        
                        <SkillCategory>
                            <h3>Frontend</h3>
                            <SkillItem><FaReact /> React</SkillItem>
                            <SkillItem><SiRedux /> Redux Toolkit</SkillItem>
                            <SkillItem><FaVuejs /> Vue 2</SkillItem>
                            <SkillItem><FaJs /> JavaScript</SkillItem>
                            <SkillItem><SiTypescript /> TypeScript</SkillItem>
                        </SkillCategory>
                    </SkillsContainer>
                    
                    <Section style={{marginTop: '2rem'}}>
                        <h3>Interests</h3>
                        <AboutContent>
                            Distributed architectures, high-performance systems, mentorship, knowledge sharing, 
                            collaborative engineering culture, niche technologies, cloud-native architectures & 
                            continuous learning.
                        </AboutContent>
                    </Section>
                </Section>

                <Section>
                    <SectionTitle><FaBriefcase /> Career Journey</SectionTitle>
                    
                    <ExperienceItem>
                        <ExperienceTitle>Software Engineer</ExperienceTitle>
                        <ExperienceCompany>Scrums.com (Formerly SovTech) (Feb 2024 - June 2025)</ExperienceCompany>
                        <ExperienceDuration>Johannesburg, South Africa</ExperienceDuration>
                        <ExperienceDescription>
                            Maintained distributed systems for enterprise clients including Vodafone Germany and Payfast by Network, focusing on IoT and Fintech solutions.
                        </ExperienceDescription>
                    </ExperienceItem>

                    <ExperienceItem>
                        <ExperienceTitle>Software Engineer</ExperienceTitle>
                        <ExperienceCompany>Sava Technologies (Aug 2022 - Feb 2024)</ExperienceCompany>
                        <ExperienceDuration>Johannesburg, South Africa</ExperienceDuration>
                        <ExperienceDescription>
                            As part of the founding engineering team, helped build the core banking platform that connects payment rails across South Africa and Kenya.
                        </ExperienceDescription>
                    </ExperienceItem>

                    <ExperienceItem>
                        <ExperienceTitle>Software Developer</ExperienceTitle>
                        <ExperienceCompany>Bridge Labs (Jan 2021 - July 2022)</ExperienceCompany>
                        <ExperienceDuration>Johannesburg, South Africa</ExperienceDuration>
                        <ExperienceDescription>
                            Developed software solutions for clients across various sectors including Education Technology, Insurance, and Healthcare.
                        </ExperienceDescription>
                    </ExperienceItem>

                    <ExperienceItem>
                        <ExperienceTitle>Academic Contributor & Freelancer</ExperienceTitle>
                        <ExperienceCompany>Self-Employed (Sep 2018 - Dec 2020)</ExperienceCompany>
                        <ExperienceDuration>Johannesburg, South Africa</ExperienceDuration>
                        <ExperienceDescription>
                            Engaged in lecturing, tutoring, mentorship, academic research, and software prototyping for various clients.
                        </ExperienceDescription>
                    </ExperienceItem>
                </Section>

                <Section>
                    <SectionTitle><FaGraduationCap /> Education</SectionTitle>
                    <ExperienceItem>
                        <ExperienceTitle>BCom Honours in Information Technology Management</ExperienceTitle>
                        <ExperienceCompany>University of Johannesburg</ExperienceCompany>
                    </ExperienceItem>

                    <ExperienceItem>
                        <ExperienceTitle>BCom in Information Systems</ExperienceTitle>
                        <ExperienceCompany>University of Johannesburg</ExperienceCompany>
                    </ExperienceItem>
                </Section>

                <Section>
                    <SectionTitle><FaAward /> Media & Recognition</SectionTitle>
                    
                    <ExperienceItem>
                        <ExperienceTitle>Research Publication</ExperienceTitle>
                        <AboutContent>
                            <SocialLink href="https://astesj.com/v05/i05/p100/" target="_blank" rel="noopener noreferrer">
                                <FaNewspaper /> Deaf Chat: A Speech-to-Text Communication Aid for Hearing Deficiency (ASTESJ, 2020) <FaExternalLinkAlt size={12} />
                            </SocialLink>
                        </AboutContent>
                    </ExperienceItem>
                    
                    <ExperienceItem>
                        <ExperienceTitle>Expert Contributor</ExperienceTitle>
                        <AboutContent>
                            <SocialLink href="https://www.myjobmag.co.za/blog/how-to-become-a-software-engineer-in-south-africa-2" target="_blank" rel="noopener noreferrer">
                                <FaNewspaper /> MyJobMag: Road to becoming a software engineer in South Africa <FaExternalLinkAlt size={12} />
                            </SocialLink>
                        </AboutContent>
                    </ExperienceItem>
                    
                    <ExperienceItem>
                        <ExperienceTitle>Featured Engineer</ExperienceTitle>
                        <AboutContent>
                            <SocialLink href="https://medium.com/@Sava-Africa/get-to-know-mandlenkosi-engineer-at-sava-44f2f5c6da9a" target="_blank" rel="noopener noreferrer">
                                <FaNewspaper /> Sava Africa Blog: Get to know Mandlenkosi <FaExternalLinkAlt size={12} />
                            </SocialLink>
                        </AboutContent>
                    </ExperienceItem>
                    
                    <ExperienceItem>
                        <ExperienceTitle>University Recognition</ExperienceTitle>
                        <AboutContent>
                            <SocialLink href="https://www.uj.ac.za/wp-content/uploads/2021/10/6-cbe-annual-report-2020-school-of-cons-intelligence-and-inf-syste.pdf" target="_blank" rel="noopener noreferrer">
                                <FaNewspaper /> UJ Newsletter: Director's Recognition <FaExternalLinkAlt size={12} />
                            </SocialLink>
                        </AboutContent>
                    </ExperienceItem>
                    
                    <ExperienceItem>
                        <ExperienceTitle>Panelist: Rethinking Higher Education in the 4IR</ExperienceTitle>
                        <AboutContent>
                            <SocialLink href="https://www.youtube.com/watch?v=lv7fMF4qySY&t=3s" target="_blank" rel="noopener noreferrer">
                                <FaNewspaper /> ZuluPython: AI and Education Panel Discussion <FaExternalLinkAlt size={12} />
                            </SocialLink>
                        </AboutContent>
                    </ExperienceItem>
                </Section>

                <Section>
                    <SectionTitle>Get In Touch</SectionTitle>
                    <AboutContent>
                        I'm always open to interesting conversations and new opportunities. Feel free to reach out through any of these channels:
                    </AboutContent>
                    
                    <ContactInfo>
                        <ContactItem><FaEnvelope /> mandlashezifbi@gmail.com / mandlenkosishezi@icloud.com</ContactItem>
                        <ContactItem><FaPhone /> +27 69 384 3280</ContactItem>
                        <ContactItem><FaMapMarkerAlt /> Johannesburg, South Africa</ContactItem>
                    </ContactInfo>
                    
                    <SocialLinks>
                        <SocialLink href="https://github.com/Smission" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/mandlenkosishezi/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </SocialLink>
                        {/* CV Download temporarily disabled
                        <SocialLink href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                            <FaFilePdf /> Download CV
                        </SocialLink>
                        */}
                    </SocialLinks>
                </Section>
            </MainContainer>
        </AboutContainer>
    );
};

export default About;
