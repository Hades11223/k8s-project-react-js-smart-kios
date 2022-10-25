pipeline {

  environment {
    registry = "hades1122/test"
    registryCredential = 'dockerhublogin'
    dockerImage = ""
  }

  agent any

  stages {

    stage('Deploy K8s App') {
      steps {
        script {
          kubernetesDeploy(configs: "nodejs.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }

  
}
}
