pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/isosceles45/sepm-practical.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: env.GIT_REPO_URL
            }
        }
        stage('Build Frontend') {
            steps {
                echo "Building frontend..."
            }
        }
        stage('Build Backend') {
            steps {
                echo "Building backend..."
            }
        }
        stage('Test') {
            steps {
                echo "Test Done"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deployed!"
            }
        }
    }
}

