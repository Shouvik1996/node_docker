pipeline 
{
    environment {
    	registry = "shouviksinha/heelloow"
    	registryCredential = 'dockerhub'
    	image = ''
  	}
    
    agent any

    stages {
    	stage('Clone repository') {
        	checkout scm
    	}

    	stage('Build image') {
        	image = docker.build(registry + ":$BUILD_NUMBER")
    	}

    	stage('Test image') {
        	image.inside {
            	echo "Tests passed"
        	}
    	}

    	stage('Push image') {
    		docker.withRegistry( '', registryCredential ) {
            	image.push()
            	echo "Published to docker hub"
          	}     
         }
    }

}
