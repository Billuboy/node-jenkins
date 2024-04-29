pipeline {
  agent {
    docker {
      image 'node:alpine'
    }
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Archiving') {
      steps {
        zip zipFile: 'build.zip', archive: false, dir: 'out'
      }
    }
  }
}