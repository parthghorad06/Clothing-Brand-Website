pipeline {
    agent any

    environment {
        IMAGE_NAME = "thetagless:v1"
        CONTAINER_NAME = "website"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d --name $CONTAINER_NAME -p 80:80 $IMAGE_NAME'
            }
        }

    }

    post {
        success {
            echo 'Website deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}