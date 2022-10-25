pipeline {

  environment {
    registry = "hades1122/test"
    registryCredential = 'dockerhublogin'
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/Hades11223/k8s-nodejs.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Push Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy K8s App') {
      steps {
        script {
          kubernetesDeploy(configs: "nodejs.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }


    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  
}
}
