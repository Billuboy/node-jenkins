pipeline {
  // agent {
  //   docker {
  //       image 'node:lts-alpine'
  //       args '-v $PWD/dist:/root/out'
  //   }
  // }
  agent any
  stages {
    stage('Something') {
      steps {
        sh 'whoami'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}