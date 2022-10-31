pipeline {

  environment {
    registry = "hades1122/reactjs"
    registryCredential = 'dockerhublogin'
    dockerImage = ""
  }

  agent any

  stages {
    
    stage('Checkout Source') {
      steps {
        git 'https://github.com/Hades11223/k8s-project-react-js-smart-kios.git'
      }
    }

    stage('Build'){
      steps{
        sh 'cd /var/lib/jenkins/workspace/K8s-project-react-js-smart-kios'
        sh 'npm install'
        sh 'yarn install --ignore-engines'
        sh 'yarn build'
        sh 'sudo scp -r build/* /mnt/NFS_Share/project-react-js-smart-kios/app'
      }
    }
    
    stage('Deploy K8s App') {
      steps {
        script {
          kubernetesDeploy(configs: "bvp-kios.yaml", kubeconfigId: "mykubeconfig")
        }
      }
    }
  
}
}
