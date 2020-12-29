echo "deploying to server"
cd ./resume-site
cp -r ./* /var/www/aayushb.com
rm /var/www/aayushb.com/deploy.sh
rm /var/www/aayushb.com/clean-up.sh
rm /var/www/aayushb.com/Jenkinsfile
