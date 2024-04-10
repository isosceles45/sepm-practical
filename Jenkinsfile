pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/isosceles45/sepm-practical.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: env.GIT_REPO_URL
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    docker.build('frontend-app:latest', '.')
                }
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    docker.build('backend-api:v1.0', '.')
                }
            }
        }
        stage('Test') {
            steps {
                echo "Test Done"
            }
        }
        stage('Deploy') {
            steps {
                echon "Deployed!"
            }
        }
    }
}
