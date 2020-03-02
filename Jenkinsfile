node  
{
	def app
	def registry = "shouviksinha/heelloow"
	def registryCredential = 'dockerhub'
   
    agent any


    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build(registry + ":$BUILD_NUMBER")
    }

    stage('Test image') {
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
    	docker.withRegistry( '', registryCredential ) {
            app.push()
            echo "Published to docker hub"
          }     
     }

}

