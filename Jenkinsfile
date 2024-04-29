pipeline {
  agent {
    docker {
        image 'node:alpine'
        args '-w /app -v /work/projects/jenkins/nodejs/dist:/app/out'
    }
  }
  stages {
    stage('Something') {
      steps {
        sh 'whoami'
      }
    }
    stage('Location') {
      steps {
        sh '''
          ls
          pwd
        '''
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}