pipeline {
  agent {
    docker {
        image 'node:alpine'
        args '-w /app -v $PWD/dist:/app/out'
    }
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Something') {
      steps {
        sh 'whoami'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
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
  }
}