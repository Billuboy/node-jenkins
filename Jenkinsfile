pipeline {
  agent {
    docker {
        image 'node:alpine'
        args '-v /work/projects/jenkins/nodejs/dist:/root/out'
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