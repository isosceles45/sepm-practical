pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/frontend.git'
                git 'https://github.com/your-username/backend.git'
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    docker.build('frontend-app:latest', '.frontend')
                }
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    docker.build('backend-api:v1.0', './backend')
                }
            }
        }
    }
}
