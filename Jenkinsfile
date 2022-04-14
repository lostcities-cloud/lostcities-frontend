pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    environment {
        GITHUB_ACTOR = credentials('GITHUB_ACTOR')
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
    }

    stages {
        stage('NPM Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Pack') {
            steps {
                sh 'npm run pack'
            }
        }
        stage('Publish') {
            steps {
                sh '''
                gh auth login
                gh release upload latest ./dist/lostcities-cloud-lostcities-frontend-*.tgz --clobber
                '''
            }
        }
    }

}
