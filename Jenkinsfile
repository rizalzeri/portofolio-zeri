pipeline {
  agent any
  options { disableConcurrentBuilds() }

  environment {
    IMAGE = 'portofolio-zeri-portofolio'
  }

  stages {
    stage('Install & Build (cek kode)') {
      agent {
        docker { image 'node:20-alpine'; reuseNode true }
      }
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Build image') {
      steps {
        sh 'docker build -t ${IMAGE}:${GIT_COMMIT} -t ${IMAGE}:latest .'
      }
    }

    stage('Import ke k3s') {
      steps {
        sh 'docker save ${IMAGE}:${GIT_COMMIT} | sudo /usr/local/bin/k3s ctr images import -'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl set image deploy/portofolio portofolio=${IMAGE}:${GIT_COMMIT}'
        sh 'kubectl rollout status deploy/portofolio --timeout=180s'
      }
    }
  }

  post {
    failure {
      sh 'kubectl rollout undo deploy/portofolio || true'
    }
  }
}