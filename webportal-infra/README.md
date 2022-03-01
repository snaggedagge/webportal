# webportal-infra

Infra project for creating a S3 bucket which the Webportal runs on.
Same bucket is also used by IoT devices to upload their current location to, inside a websites.json file.

## Useful commands

 * `mvn package`     compile and run tests
 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation
 * `gradle assemble && cdk synth && cdk deploy * --require-approval=never` Deploy cloudformation
 * `cdk synth && cdk deploy * --require-approval=never` Enough?
 * `cdk destroy`
Enjoy!
