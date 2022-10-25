pipeline {

    stage('Deploy K8s App') {
      steps {
        script {
          kubernetesDeploy(configs: "bvp-kios.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }


    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  
}
