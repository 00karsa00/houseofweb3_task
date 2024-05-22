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
                withCredentials([usernamePassword(passwordVeriable: 'DOCKERHUB_PASSWORD',usernameVariable: 'DOCKERHUB_USERNAME')]){
                    bat 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    bat 'docker tag my-node-app:1.0 karsa007/my-node-app:1.0'
                    bat 'docker push karsa007/my-node-app:1.0'
                    bat 'docer logout'
                }
            }
        }
    }
}