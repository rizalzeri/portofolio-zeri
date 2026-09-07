"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

function ExperienceItem({ date, title, company, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.roadmapStage}>
      <div className={styles.roadmapDot}></div>
      <div className={styles.roadmapCard} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.roadmapDate}>{date}</div>
        <h3 className={styles.roadmapTitle}>{title}</h3>
        <div className={styles.roadmapCompany}>{company}</div>
        
        <div className={styles.clickHint}>
          {isOpen ? "Click to collapse" : "Click to expand details"}
        </div>
        
        <div className={`${styles.roadmapContent} ${isOpen ? styles.open : ""}`}>
          <ul>
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.main}>
      <div className="area">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
      
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}><a href="#about">About</a></li>
          <li className={styles.navItem}><a href="#experience">Experience</a></li>
          <li className={styles.navItem}><a href="#projects">Projects</a></li>
          <li className={styles.navItem}><a href="#skills">Skills</a></li>
          <li className={styles.navItem}><a href="#org-certs">Organizations & Certs</a></li>
          <li className={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="about" className={styles.hero}>
        <div className={styles.heroContent}>
          
          <div className={styles.heroImageContainer}>
            <Image 
              src="/pasfoto.png" 
              alt="Rizal Zeri Subakti" 
              width={150} 
              height={150} 
              className={styles.heroImage}
              priority
            />
          </div>

          <h1 className={styles.heroName}>Rizal Zeri Subakti</h1>
          <h2 className={styles.heroTitle}>IT Professional | Full Stack & IT Operations</h2>
          
          <div className={styles.heroHighlight}>
            <p>
              IT Professional and Diponegoro University (Cum Laude, GPA 3.74) with 3 years of experience in <strong>Full Stack Development</strong>, <strong>DevOps</strong>, and <strong>IT Operations</strong>. 
              <br/><br/>
              Experienced in managing and automating CI/CD pipelines using Jenkins, Docker, and SonarQube, as well as deploying and maintaining applications across AWS and on-premise environments. Skilled in Linux system administration, server configuration, application monitoring, and workflow orchestration using Apache Airflow. Proficient in Python scripting for automation and process optimization, with a strong focus on infrastructure reliability, deployment efficiency, system security, and continuous improvement.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.sectionWrapper}>
        <h2 className="section-title">Professional Experience</h2>
        <div className={styles.roadmapContainer}>
          
          <ExperienceItem 
            date="01/26 – now"
            title="Developer & IT Operations"
            company="PT Mostrans Global Digilog (Kalbe Group) | Jakarta"
            details={[
              "Managed and optimized CI/CD pipelines using Jenkins and Docker, integrating SonarQube for automated code quality and security scanning. Acted as a bridge between Development, Product QA, and deployment processes, coordinating application build, testing, and release across AWS cloud and on-premise environments.",
              "Managed AWS and VPS infrastructure, including EC2, RDS, and related services, to support reliable and scalable application operations.",
              "Managed and maintained Apache Airflow as a workflow orchestration platform, including DAG development and configuration, scheduling, monitoring, and troubleshooting. Worked closely with Data Engineers and Development teams to ensure reliable execution of automated data workflows and smooth integration with application services.",
              "Supported the Infrastructure team in maintaining application and system security by reviewing security scoreboards and vulnerability findings, identifying potential risks, and coordinating remediation activities."
            ]}
          />

          <ExperienceItem 
            date="03/24 – 12/25"
            title="Digital Application Developer"
            company="PT Citra Tubindo tbk (Vallourec Group) | Batam & Singapore"
            details={[
              "Developed and deployed a Production Tracking System for VAPC (Vallourec Asia Pacific Centre) Singapore, covering the entire workflow from Incoming Inspection to Certificate of Conformity (COC) to optimize production efficiency.",
              "Designed and implemented a real-time monitoring dashboard using Grafana to track Work Order (WO) numbers, covering both planned and ongoing operations.",
              "Developed an automation system to streamline data processing between Siemens and Yokogawa industrial machines. The system automatically converts DAD format files into structured XLSX format using Python scripting and the TagUI automation framework."
            ]}
          />

          <ExperienceItem 
            date="10/23 – 03/24"
            title="Apprenticeship Application & Production Support"
            company="PT Prudential Life Assurance | South Jakarta (Hybrid)"
            details={[
              "Assigned to the Digital & Information Technology Department to support internal application issue resolution at Prudential, specifically in the New Business & Major Division, ensuring smooth production processes for users.",
              "Handled and resolved approximately 10-20 internal issues daily, ranging from system troubleshooting, application bugs, process optimization, and user support, ensuring minimal disruption and improved operational efficiency."
            ]}
          />

          <ExperienceItem 
            date="05/23 – 10/23"
            title="Apprenticeship Fullstack Developer"
            company="PT Pro Sistimatika Automasi (Compnet Group) | West Jakarta (Hybrid)"
            details={[
              "Responsible for executing tasks assigned by the Business Analyst Team to perform web maintenance and development for E-SKA (Electronic Certificate of Origin)—a system developed by the Ministry of Trade for all SKA Issuing Agencies (IPSKA).",
              "Developed and enhanced web application modules using React.js as the frontend framework, Node.js for backend services, and PostgreSQL as the database, ensuring smooth integration and high performance across the system."
            ]}
          />

          <ExperienceItem 
            date="03/22 – 08/23"
            title="Practicum Assistant"
            company="Informatics Department, Diponegoro University"
            details={[
              "Taught basic MySQL to Informatics students at the Informatics Department, Universitas Diponegoro.",
              "Provided instruction on basic numerical methods, covering integrals, differentials, coding logic, and Python programming.",
              "Conducted lessons in 2 classes, each consisting of 30 students, ensuring hands-on learning and practical implementation of concepts."
            ]}
          />
          
          <ExperienceItem 
            date="02/23 – 05/23"
            title="Internship Software Engineer"
            company="PT Inspirasi Bisnis Nusantara (Haus! Indonesia) | West Jakarta (Hybrid)"
            details={[
              "The website developed for Haus Employee Learning Methods, commonly referred to as E-Learning, is designed to help Haus employees enhance their skills through the Haus E-Learning platform.",
              "The website was developed using Python with the Odoo framework, which is based on ERP (Enterprise Resource Planning), enabling efficient management of learning content and user interactions. Additionally, the ERP-based system incorporates 5-10 modules."
            ]}
          />

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.sectionWrapper}>
        <h2 className="section-title">Portfolio & Projects</h2>
        <div className={styles.skillsGrid}>
          
          <div className={styles.projectCard}>
            <h3>PortalBUMDes – SaaS Management Platform</h3>
            <p style={{color: 'var(--accent-primary)', marginBottom: '0.5rem'}}>Fullstack Developer | 08/25 – now</p>
            <p>
              Developed and managed PortalBUMDes, a subscription-based SaaS platform for BUMDes (Village-Owned Enterprises) to manage village websites, administrative activities, and operational reporting. Independently handled the entire development lifecycle using Laravel, from requirement analysis, system design, feature development to production deployment.
            </p>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>PHP</span>
              <span className={styles.tag}>SaaS</span>
              <span className={styles.tag}>Fullstack</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>IPOS Gangsal Pandawa – Retail Management System</h3>
            <p style={{color: 'var(--accent-primary)', marginBottom: '0.5rem'}}>Fullstack Developer | 04/26 – now</p>
            <p>
              Developed and managed IPOS Gangsal Pandawa, a comprehensive retail management system using Laravel to support end-to-end store operations, including cashier/POS transactions, stock opname, inventory management, warehouse transfers, income and expense tracking, and financial reporting. Independently handled the complete development lifecycle.
            </p>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>POS System</span>
              <span className={styles.tag}>Inventory Management</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Bumdes Pro – BUMDes Financial Management SaaS</h3>
            <p style={{color: 'var(--accent-primary)', marginBottom: '0.5rem'}}>Fullstack Developer | 08/25 – now</p>
            <p>
              Developed and maintained Bumdes Pro, a Laravel-based financial management platform for BUMDes (Village-Owned Enterprises), independently managing the end-to-end development lifecycle from requirements analysis, system and database design, feature development, testing, to production deployment, while implementing bookkeeping, financial transaction management, and reporting workflows to improve data accuracy, operational efficiency, and financial transparency.
            </p>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>SaaS</span>
              <span className={styles.tag}>Financial Management</span>
              <span className={styles.tag}>Bookkeeping</span>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.sectionWrapper}>
        <h2 className="section-title">Skills & Interests</h2>
        <div className={styles.skillsGrid}>
          
          <div className={styles.skillCategory}>
            <h3>Technical Skills</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>Grafana</span>
              <span className={styles.tag}>Airflow</span>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>Linux</span>
              <span className={styles.tag}>Daemon</span>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>Nginx</span>
              <span className={styles.tag}>PHP</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>C</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>CodeIgniter</span>
              <span className={styles.tag}>Selenium IDE</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3>Soft Skills & Interests</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Leadership</span>
              <span className={styles.tag}>IT Operations</span>
              <span className={styles.tag}>DevOps</span>
              <span className={styles.tag}>Infrastructure Automation</span>
              <span className={styles.tag}>System Monitoring</span>
              <span className={styles.tag}>Industrial IT</span>
              <span className={styles.tag}>Software Development</span>
              <span className={styles.tag}>Quality Assurance</span>
              <span className={styles.tag}>Data Analytics</span>
              <span className={styles.tag}>Robotic Process Automation (RPA)</span>
            </div>
          </div>

        </div>
      </section>

      {/* Organizations & Certificates Section */}
      <section id="org-certs" className={styles.sectionWrapper}>
        <h2 className="section-title">Organizations & Certificates</h2>
        <div className={styles.elegantGrid}>
          
          <div className={styles.elegantCard}>
            <h3>Organizations & Volunteering</h3>
            <ul className={styles.elegantList}>
              <li>
                <strong>Head of Seniora Division</strong>
                <span>Informatics Student Association, Diponegoro University (02/22 - 02/23)</span>
              </li>
              <li>
                <strong>Chairman</strong>
                <span>Fokus Undip, Tegal & Semarang (06/22 - 06/23)</span>
              </li>
              <li>
                <strong>Liaison Officer</strong>
                <span>International Conference on Informatics and Computational Science (ICICoS) (09/22)</span>
              </li>
            </ul>
          </div>

          <div className={styles.elegantCard}>
            <h3>Certificates</h3>
            <ul className={styles.elegantList}>
              <li><strong>TOEFL Certificate</strong> <span>(543 Scores)</span></li>
              <li><strong>Dicoding Academy</strong> <span>Certificate Visualisasi Data</span></li>
              <li><strong>Dicoding Academy</strong> <span>Belajar Membuat Front-End Web Untuk Pemula</span></li>
              <li><strong>Oracle Academy</strong> <span>Primavera P6 Professional Fundamentals</span></li>
              <li><strong>Official Exam</strong> <span>AWS Certified CloudOps Engineer - Associate (SOA-CO3)</span></li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.sectionWrapper} style={{minHeight: 'auto', marginBottom: '5rem'}}>
        <h2 className="section-title">Get In Touch</h2>
        <div className={styles.contactGrid}>
          <a href="mailto:rizalzeri@gmail.com" className={styles.contactCard}>
            <div className={styles.contactIcon}>✉️</div>
            <h3>Email</h3>
            <p>rizalzeri@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/rizalzeri/" target="_blank" rel="noreferrer" className={styles.contactCard}>
            <div className={styles.contactIcon}>🔗</div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/rizalzeri/</p>
          </a>
          <a href="tel:+6285290413373" className={styles.contactCard}>
            <div className={styles.contactIcon}>📞</div>
            <h3>Phone</h3>
            <p>(+62) 85290413373</p>
          </a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--surface-border)', color: 'var(--text-secondary)' }}>
        <p>© 2026 Rizal Zeri Subakti. All rights reserved.</p>
      </footer>
    </div>
  );
}
