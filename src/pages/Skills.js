import React from 'react';

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>

    <h4>Cloud & Infrastructure</h4>
    <ul>
      <li>AWS (EC2, S3, VPC, IAM, EKS, ECS, RDS)</li>
      <li>Infrastructure as Code (Terraform, CloudFormation)</li>
    </ul>

    <h4>DevOps & CI/CD</h4>
    <ul>
      <li>Docker, Kubernetes, Helm</li>
      <li>Jenkins, GitHub Actions</li>
      <li>Git & GitHub</li>
    </ul>

    <h4>Monitoring & Security</h4>
    <ul>
      <li>Prometheus, Grafana</li>
      <li>AWS CloudWatch, Secrets Manager, HashiCorp Vault</li>
    </ul>

    <h4>Scripting</h4>
    <ul>
      <li>Bash, Python</li>
    </ul>
  </section>
);

export default Skills;
