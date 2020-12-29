pipeline{
	agent any
	
	stages{
		stage('SCM Checkout'){
			steps{
				checkout scm
			}
			
		}

		stage('Remove existing project from server'){
			steps{
				sh 'echo cleaning up'
				sh 'sudo bash cleanup.sh'
			}
		}

		stage('Deploy to server') {
			steps{
					sh 'echo deploying'
					sh 'sudo bash deploy.sh'
				}
			}
			
		}
	}