# Lambdaurora

This repo contains an example AWS SAM config for a Lambda connected to an Aurora Serverless RDS.

## Instructions

First run `npm install`

### Deploy Using SAM

The following steps are taken from this tutorial: https://docs.aws.amazon.com/lambda/latest/dg/serverless-deploy-wt.html

1. Create a Cloud9 environment

2. Create a bucket where code will reside: 

```
aws s3 mb s3://lambdaurora-bucket --region us-east-1
``` 

3. Upload the files in this repo

4. Run the following commands:
```
sam package \
  --template-file example.yaml \
  --output-template-file serverless-output.yaml \
  --s3-bucket lambdaurora-bucket
```

```
aws cloudformation deploy \
  --template-file /home/ec2-user/environment/serverless-node/serverless-output.yaml \
  --stack-name lambdaurora-stack \ 
  --capabilities CAPABILITY_IAM
```

