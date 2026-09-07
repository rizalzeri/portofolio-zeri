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
          {isOpen ? "▲ Click to collapse" : "▼ Click to expand details"}
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
      
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}><a href="#about">~/about</a></li>
          <li className={styles.navItem}><a href="#experience">~/experience</a></li>
          <li className={styles.navItem}><a href="#projects">~/projects</a></li>
          <li className={styles.navItem}><a href="#skills">~/skills</a></li>
          <li className={styles.navItem}><a href="#org-certs">~/org_certs</a></li>
          <li className={styles.navItem}><a href="#contact">~/contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="about" className={styles.hero}>
        <div className={styles.heroContent}>
          
          <h1 className={styles.heroName}>Rizal Zeri Subakti</h1>
          <h2 className={styles.heroTitle}>System Engineering | IT Operations | DevOps</h2>
          
          <div className={styles.heroHighlight}>
            <p>
              I am an IT professional specializing in <strong>Infrastructure</strong>, <strong>System Engineering</strong>, and <strong>IT Operations</strong>. 
              <br/><br/>
              Experienced in managing and automating deployment pipelines using <strong>Docker</strong>, <strong>Nginx</strong>, and <strong>Apache</strong>. Skilled in Linux system administration, server configuration, and building real-time monitoring solutions with <strong>Grafana</strong>. I hold a Computer Science degree from Diponegoro University with <em>Cumlaude</em> honors (GPA 3.74).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#experience" className="btn btn-primary">View Pipeline</a>
            <a href="#contact" className="btn btn-outline">Initialize Contact</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.sectionWrapper}>
        <h2 className="section-title">deployment_pipeline</h2>
        <div className={styles.roadmapContainer}>
          
          <ExperienceItem 
            date="03/24 – 12/25"
            title="Digital Application Developer"
            company="PT Citra Tubindo tbk (Vallourec Group) | Batam & Singapore"
            details={[
              "Developed and deployed a comprehensive Production Tracking System for VAPC Singapore, covering the full workflow from Incoming Inspection to COC.",
              "Built supporting automation tools using Python and TagUI to convert Siemens DAD files into structured XLSX format.",
              "Implemented the system on an on-premise server environment. Set up Linux-based backend services, process daemons, scheduled tasks (crontab), and file management pipelines.",
              "Designed and implemented a real-time monitoring dashboard using Grafana to track Work Orders, process status, and backend service logs."
            ]}
          />

          <ExperienceItem 
            date="10/23 – 03/24"
            title="Apprenticeship App & Prod Support"
            company="PT Prudential Life Assurance | South Jakarta"
            details={[
              "Assigned to the Digital & Information Technology Department to support internal application issue resolution, specifically in the New Business & Major Division.",
              "Handled and resolved approximately 10-20 internal issues daily, ranging from system troubleshooting, application bugs, process optimization, and user support."
            ]}
          />

          <ExperienceItem 
            date="05/23 – 10/23"
            title="Apprenticeship Fullstack Developer"
            company="PT Pro Sistimatika Automasi (Compnet Group)"
            details={[
              "Responsible for executing tasks assigned by the Business Analyst Team to perform web maintenance and development for E-SKA, a system developed by the Ministry of Trade.",
              "Developed and enhanced web application modules using React.js, Node.js, and PostgreSQL, ensuring smooth integration and high performance."
            ]}
          />
          
          <ExperienceItem 
            date="02/23 – 05/23"
            title="Internship Software Engineer"
            company="PT Inspirasi Bisnis Nusantara (Haus! Indonesia) | West Jakarta"
            details={[
              "Developed a website for Haus Employee Learning Methods (E-Learning) using Python with the Odoo framework (ERP), incorporating 5-10 modules for efficient management of learning content."
            ]}
          />

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.sectionWrapper}>
        <h2 className="section-title">active_deployments</h2>
        <div className={styles.skillsGrid}>
          
          <div className="terminal">
            <div className="terminal-header">
              <span style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>production_tracking.sh</span>
            </div>
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--accent-blue)', marginBottom: '1.5rem', fontSize: '1.2rem'}}>Production Tracking Pipe Processing</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6'}}>
                Developed using Python (Flask) and PostgreSQL to monitor and optimize pipeline production processes, deployed with Nginx, Apache, Docker, and Daemon services for scalable, reliable, and real-time operational visibility.
              </p>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>Flask</span>
                <span className={styles.tag}>Docker</span>
                <span className={styles.tag}>Nginx</span>
              </div>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <span style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>automation_sys.sh</span>
            </div>
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--accent-blue)', marginBottom: '1.5rem', fontSize: '1.2rem'}}>Automation System for Siemens & Yokogawa</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6'}}>
                Developed an automated system to convert DAD files to XLSX using Python and TagUI, running on Linux with crontab scheduling, and integrated Grafana for real-time monitoring.
              </p>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>Linux</span>
                <span className={styles.tag}>Cron</span>
                <span className={styles.tag}>Grafana</span>
              </div>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <span style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>cpl_monitoring.sh</span>
            </div>
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--accent-blue)', marginBottom: '1.5rem', fontSize: '1.2rem'}}>CPL Monitoring (OBE)</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6'}}>
                Designed and developed a web-based application to support the implementation and monitoring of Learning Outcomes (CPL) within the Informatics Department.
              </p>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Backend</span>
                <span className={styles.tag}>Web Dev</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.sectionWrapper}>
        <h2 className="section-title">infrastructure_stack</h2>
        <div className={styles.skillsGrid}>
          
          <div className={styles.skillCategory}>
            <h3>DevOps & Infrastructure</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>Linux</span>
              <span className={styles.tag}>Nginx</span>
              <span className={styles.tag}>Apache</span>
              <span className={styles.tag}>Daemon</span>
              <span className={styles.tag}>Cron</span>
              <span className={styles.tag}>Infrastructure Automation</span>
              <span className={styles.tag}>System Monitoring</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3>Languages & Frameworks</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>PHP</span>
              <span className={styles.tag}>C</span>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>Node Js</span>
              <span className={styles.tag}>React Js</span>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>Codeigniter</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3>Databases & Tools</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Postgresql</span>
              <span className={styles.tag}>Mysql</span>
              <span className={styles.tag}>Grafana</span>
              <span className={styles.tag}>Selenium IDE</span>
              <span className={styles.tag}>RPA</span>
              <span className={styles.tag}>Data Analytics</span>
            </div>
          </div>

        </div>
      </section>

      {/* Organizations & Certificates Section */}
      <section id="org-certs" className={styles.sectionWrapper}>
        <h2 className="section-title">Professional Associations</h2>
        <div className={styles.elegantGrid}>
          
          <div className={styles.elegantCard}>
            <h3>Organizations</h3>
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
                <strong>Liaison Officer (Volunteer)</strong>
                <span>ICICoS Informatics Department (09/22)</span>
              </li>
            </ul>
          </div>

          <div className={styles.elegantCard}>
            <h3>Certifications</h3>
            <ul className={styles.elegantList}>
              <li><strong>Toefl Certificate</strong> <span>(543 Scores)</span></li>
              <li><strong>Dicoding Academy</strong> <span>Visualisasi Data</span></li>
              <li><strong>Oracle Academy</strong> <span>Primavera P6 Professional Fundamentals</span></li>
              <li><strong>DQLAB</strong> <span>Introduction to Data Science with Python</span></li>
              <li><strong>UNDIP FPIK</strong> <span>LKMM-PD (Latihan Keterampilan Manajemen Mahasiswa Dasar)</span></li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.sectionWrapper} style={{minHeight: 'auto', marginBottom: '5rem'}}>
        <h2 className="section-title">establish_connection</h2>
        <div className={styles.contactGrid}>
          <a href="mailto:rizalzeri@gmail.com" className={styles.contactCard}>
            <div className={styles.contactIcon}>✉️</div>
            <h3 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>Email</h3>
            <p style={{color: 'var(--text-secondary)'}}>rizalzeri@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/rizalzeri/" target="_blank" rel="noreferrer" className={styles.contactCard}>
            <div className={styles.contactIcon}>🔗</div>
            <h3 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>LinkedIn</h3>
            <p style={{color: 'var(--text-secondary)'}}>linkedin.com/in/rizalzeri/</p>
          </a>
          <a href="tel:+6285290413373" className={styles.contactCard}>
            <div className={styles.contactIcon}>📞</div>
            <h3 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>Phone</h3>
            <p style={{color: 'var(--text-secondary)'}}>(+62) 85290413373</p>
          </a>
          <a href="https://l1nk.dev/portofolio-rizal-zeri" target="_blank" rel="noreferrer" className={styles.contactCard}>
            <div className={styles.contactIcon}>🌐</div>
            <h3 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>Portfolio Link</h3>
            <p style={{color: 'var(--text-secondary)'}}>l1nk.dev/portofolio-rizal-zeri</p>
          </a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--surface-border)', color: 'var(--text-secondary)', fontFamily: 'var(--font-geist-mono)' }}>
        <p>sys.exit(0) // System terminated successfully.</p>
        <p style={{marginTop: '1rem', fontSize: '0.85rem', color: 'var(--surface-border)'}}>© 2026 Rizal Zeri Subakti</p>
      </footer>
    </div>
  );
}
