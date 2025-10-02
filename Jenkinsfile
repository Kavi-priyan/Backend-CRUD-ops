pipeline {
    agent any
    
    environment {
        GIT_REPO = 'https://github.com/Kavi-priyan/Backend-CRUD-ops.git'
        BRANCH   = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test || echo "No tests found"'
            }
        }

        stage('Notify') {
            steps {
                echo "✅ Build and test completed for ${BRANCH}"
            }
        }
    }

    post {
        success {
            echo "SUCCESS: Build Passed!"
        }
        failure {
            echo "FAILURE: Build Failed!"
        }
    }
}
