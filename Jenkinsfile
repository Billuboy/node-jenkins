pipeline {
  agent {
    docker {
        image 'node:lts-alpine'
        args '-v $PWD/dist:/root/out'
    }
  }
  stages {
    stage('Something') {
      steps {
        sh 'whoami'
      }
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}