node  
{
	def app
	def registry = "shouviksinha/heelloow"
	def registryCredential = 'dockerhub'
   

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
    
    stage('Remove Unused docker image') {
        steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    stage('Deploy'){

        sh "docker run -p3000:5000 shouviksinha/heelloow"
    }
    
    
    }






          } 
     }

}

