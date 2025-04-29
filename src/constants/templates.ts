export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "software-proposal.svg",
    initialContent: `
      <h1 style="text-align:center;">Software Development Proposal</h1>
      <p><strong>Prepared For:</strong> [Client Name]</p>
      <p><strong>Date:</strong> [Date]</p>
      <hr />
      <h2>1. Project Overview</h2>
      <p>Describe the purpose, goals, and high-level scope of the software project.</p>
      <h2>2. Objectives</h2>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
      </ul>
      <h2>3. Proposed Solution</h2>
      <p>Detail the architecture, technologies, and tools to be used.</p>
      <h2>4. Timeline & Milestones</h2>
      <table>
        <thead>
          <tr><th>Milestone</th><th>Due Date</th></tr>
        </thead>
        <tbody>
          <tr><td>Requirement Gathering</td><td>[Date]</td></tr>
          <tr><td>Design & Architecture</td><td>[Date]</td></tr>
          <tr><td>Development</td><td>[Date]</td></tr>
          <tr><td>Testing</td><td>[Date]</td></tr>
          <tr><td>Deployment</td><td>[Date]</td></tr>
        </tbody>
      </table>
      <h2>5. Budget Estimate</h2>
      <p>[Estimated Cost]</p>
      <h2>6. Terms & Conditions</h2>
      <p>Outline payment terms, warranties, and any legal considerations.</p>
      <h2>7. Signatures</h2>
      <p>__________________________</p>
      <p><strong>Client Signature</strong></p>
      <p>__________________________</p>
      <p><strong>Provider Signature</strong></p>`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Title]</p>
      <p><strong>Author:</strong> [Your Name]</p>
      <hr />
      <h2>Executive Summary</h2>
      <p>Provide a brief overview of the project and its significance.</p>
      <h2>Background</h2>
      <p>Contextual information, current challenges, and why this project is needed.</p>
      <h2>Goals & Objectives</h2>
      <ol>
        <li>Goal 1</li>
        <li>Goal 2</li>
      </ol>
      <h2>Scope</h2>
      <p>Define what will and will not be included.</p>
      <h2>Methodology</h2>
      <p>Approach, methods, and resources required.</p>
      <h2>Timeline</h2>
      <ul>
        <li>Phase 1: [Date Range]</li>
        <li>Phase 2: [Date Range]</li>
      </ul>
      <h2>Budget</h2>
      <p>[Budget Details]</p>
      <h2>Risks & Mitigation</h2>
      <ul>
        <li>Risk 1 &mdash; Mitigation</li>
        <li>Risk 2 &mdash; Mitigation</li>
      </ul>
      `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Title]</p>
      <p>[Company Name]</p>
      <p>[Address Line 1]</p>
      <p>[Address Line 2]</p>
      <p>[City, State ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Recipient Title]</p>
      <p>[Company Name]</p>
      <p>[Address]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Opening paragraph: Purpose of letter]</p>
      <p>[Body paragraph: Details and context]</p>
      <p>[Closing paragraph: Call to action or next steps]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Your Title]</p>
      <p>[Contact Information]</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p><strong>Email:</strong> [email@example.com] | <strong>Phone:</strong> [123-456-7890] | <strong>LinkedIn:</strong> [link]</p>
      <hr />
      <h2>Professional Summary</h2>
      <p>Brief statement summarizing experience and key skills.</p>
      <h2>Experience</h2>
      <h3>[Company Name] &mdash; [Role]</h3>
      <p><em>[Start Date] &ndash; [End Date]</em></p>
      <ul>
        <li>Achievement or responsibility with metrics.</li>
        <li>Another achievement or responsibility.</li>
      </ul>
      <h2>Education</h2>
      <p><strong>[Degree]</strong>, [Institution], [Year]</p>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
      </ul>
      <h2>Certifications</h2>
      <ul>
        <li>[Certification Name] &mdash; [Year]</li>
      </ul>`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State ZIP]</p>
      <p>[Date]</p>
      <p>[Hiring Manager Name]</p>
      <p>[Company Name]</p>
      <p>Dear [Hiring Manager Name],</p>
      <p>I am writing to express my interest in the [Position] role at [Company]. With [X years] of experience in [Your Field], I have developed skills in [Key Skill 1], [Key Skill 2], and [Key Skill 3].</p>
      <p>At [Previous Company], I [Achievement that demonstrates relevant experience]. I am particularly drawn to [Company]'s focus on [Something specific].</p>
      <p>I am excited about the opportunity to contribute to [Company] by [How you will add value].</p>
      <p>Thank you for considering my application. I look forward to the possibility of discussing how my background and skills align with your needs.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Contact Information]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "letter.svg",
    initialContent: `
      <p>[Your Address]</p>
      <p>[City, State ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Recipient Address]</p>
      <p>Dear [Recipient],</p>
      <p>[Opening: Reason for writing]</p>
      <p>[Body: Details and main message]</p>
      <p>[Closing: Polite conclusion]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>  `,
  },
];

export const paginationAmount = 5;
