pipeline {
  agent any
  options { disableConcurrentBuilds() }

  environment {
    IMAGE = 'portofolio-zeri-portofolio'
  }

  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t ${IMAGE}:${GIT_COMMIT} -t ${IMAGE}:latest .'
      }
    }

    stage('Import ke k3s') {
      steps {
        sh 'docker save ${IMAGE}:${GIT_COMMIT} | sudo /usr/bin/ctr -n k8s.io images import -'
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
    always {
      sh 'docker image prune -f || true'
    }
  }
}