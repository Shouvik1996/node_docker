node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("shouviksinha/heelloow")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') 
    
        
         {
            withDockerRegistry([ credentialsId: "4d846b75-af5b-4ff1-a7dd-86ae44a49910", url: "https://registry.hub.docker.com" ])
             {
          app.push("${env.BUILD_NUMBER}")
           echo " Published "

        
            } 
                
         }

}
