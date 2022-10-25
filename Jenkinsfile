pipeline {

    stage('Deploy K8s App') {
      steps {
        script {
          kubernetesDeploy(configs: "bvp-kios.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }
}
