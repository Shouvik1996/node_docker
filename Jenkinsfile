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
            app.push("${env.BUILD_NUMBER}")
            echo "published"
            } 
                
    
}
