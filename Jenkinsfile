pipeline {
    agent any 
    stages{
        stage("Build") {
            steps{
                bat "npm install"
            }
        }
       
        stage("Build Image") {
            steps{
                bat "docker build -t my-node-app:1.0 ."
            }
        }

        stage('Docker Push') {
            steps {
                // withCredentials([usernamePassword(passwordVeriable: '',usernameVariable: 'DOCKERHUB_USERNAME')]){
                    bat 'docker login -u karsa007 -p Karsa@007'
                    bat 'docker tag my-node-app:1.0 karsa007/my-node-app:1.0'
                    bat 'docker push karsa007/my-node-app:1.0'
                    bat 'docker logout'
                // }
            }
        }
    }
}