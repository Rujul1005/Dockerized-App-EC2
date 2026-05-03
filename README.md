# 🌐 Dockerized Application Deployment on AWS EC2

## 🚀 Project Overview  
This project demonstrates how to containerize a web application using Docker and deploy it on an AWS EC2 instance.

The application is packaged into a Docker container using a Dockerfile, then built and run on an EC2 instance. This ensures consistency across environments and simplifies deployment.

---

## 🧰 Tech Stack  
- GitHub  
- AWS EC2  
- Docker  
- Linux (Amazon Linux)  
- HTML, CSS, JavaScript / Node.js / Python  

---

## 🏗️ Architecture  
Local Machine → EC2 Instance → Docker Container → Web Browser  

The application is developed locally, transferred to EC2, containerized using Docker, and accessed via the EC2 public IP.

---

## ✨ Features  
- Application containerization using Docker  
- Easy deployment on cloud (EC2)  
- Consistent runtime environment  
- Lightweight and fast deployment  
- Scalable container-based architecture  

---

## 📸 Screenshots  
<img width="1115" height="1028" alt="1" src="https://github.com/user-attachments/assets/fc22816a-44e3-4ef0-a577-69503d21a5c0" />
<img width="1600" height="917" alt="2" src="https://github.com/user-attachments/assets/a35fbfbd-46fc-4a43-aa30-3e225e5a6e89" />
<img width="1920" height="1030" alt="4" src="https://github.com/user-attachments/assets/8e9279bc-0027-4567-9e2e-86a1f9e92848" />
<img width="1158" height="1027" alt="5" src="https://github.com/user-attachments/assets/93d69f16-535a-4a9c-8db6-518d6a108bbd" />
<img width="1920" height="1032" alt="3" src="https://github.com/user-attachments/assets/a8786eae-e841-4ee6-a926-d3bc9e757bf4" />

---

## 🧠 What I Learned  
- Containerization using Docker  
- Writing Dockerfile for application setup  
- Managing Docker images and containers  
- Deploying applications on AWS EC2  
- Exposing applications using ports  

---

## ⚙️ Deployment Steps  
- Launch an EC2 instance on AWS  
- Connect to EC2 using SSH  
- Install Docker on EC2  
- Transfer project files to EC2  
- Create a Dockerfile  

- Build Docker image:
```bash
docker build -t myapp .
```

- Run container:
```bash
docker run -d -p 3000:3000 myapp
```

- Access application:
```
http://<EC2-PUBLIC-IP>:3000
```

---

## ⚠️ Note
AWS resources should be monitored to avoid unnecessary billing.  
Ensure required ports (e.g., 3000 or 80) are open in the EC2 security group.

---

## 💼 Resume Highlight  
Containerized and deployed a web application using Docker on AWS EC2, enabling consistent and scalable deployment with isolated runtime environments.
