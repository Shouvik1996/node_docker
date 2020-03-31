node  
{
	def app
	def registry = "shouviksinha/heelloow:latest"
	def registryCredential = 'dockerhub'
   

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build(registry)
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
    
    stage('DeployToProduction') {
                    script {
                        
                    	docker.withRegistry( '', registryCredential ){
                            echo " login for pull succeed"
                        sh "docker pull shouviksinha/heelloow" 
                        
                        sh "docker run --name heelloow -p 3000:5000 -d shouviksinha/heelloow"
                        }
                    }
                }

    } 

