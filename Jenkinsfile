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
    }   
    
    stage('DeployToProduction') {
                    script {
                        sh "docker pull shouviksinha/heelloow"
                        sh "docker stop heelloow"
                        sh "docker rm heelloow"
                        sh "docker run --restart always --name heelloow -p 3000:5000 -d shouviksinha/heelloow:$BUILD_NUMBER"
                    }
                }

    } 

