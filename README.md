# facebook-webhooks-sns

An aws serverless application that forwards facebook webhooks to an sns topic.

Each facebook webhook field will be mapped to an sns topic.
Example:

## Deploy

Create one parameter for each field  AWS Systems Manager Parameter Store
```bash
sam build
sam deploy --guided 
```

The API Gateway endpoint API will be displayed in the outputs when the deployment is complete.


## Test using sam sync
```bash
sam sync --stack-name facebook-webhooks-sns-dev --watch --region eu-west-3  --parameter-overrides 'ParameterKey=TopicLeadgen,ParameterValue=arn:aws:sns:eu-west-3:ACCOUNT_NUMBER:TOPIC'
```

## Unit tests

Set env vars before running the tests. 
Example:

```bash
my-application$ npm install
my-application$ export AWS_PROFILE=YOUR_AWS_PROFILE && TOPIC_LEADGEN=ARN_FOR_LEADGEN_TOPIC && npm run test

```
