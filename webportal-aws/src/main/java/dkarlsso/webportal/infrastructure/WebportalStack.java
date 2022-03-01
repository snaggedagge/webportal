package dkarlsso.webportal.infrastructure;


import software.amazon.awscdk.RemovalPolicy;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.route53.*;
import software.amazon.awscdk.services.route53.targets.BucketWebsiteTarget;
import software.amazon.awscdk.services.s3.Bucket;
import software.amazon.awscdk.services.s3.BucketAccessControl;
import software.amazon.awscdk.services.s3.CorsRule;
import software.amazon.awscdk.services.s3.HttpMethods;
import software.amazon.awscdk.services.s3.deployment.BucketDeployment;
import software.amazon.awscdk.services.s3.deployment.ISource;
import software.amazon.awscdk.services.s3.deployment.Source;
import software.constructs.Construct;

import java.util.Arrays;
import java.util.List;


public class WebportalStack extends Stack {


    public WebportalStack(Construct scope, String id, StackProps props) {
        super(scope, id, props);
        final IHostedZone zone = HostedZone.fromLookup(this, "Zone", HostedZoneProviderProps.builder()
                                .domainName("dkarlsso.com.")
                                .build());
        final String bucketName = "dkarlsso.com";
        final Bucket siteBucket =
                Bucket.Builder.create(this, "WebportalBucket")
                        .bucketName(bucketName)
                        .websiteIndexDocument("index.html")
                        .publicReadAccess(true)
                        .removalPolicy(RemovalPolicy.DESTROY)
                        .cors(Arrays.asList(CorsRule.builder()
                                .allowedHeaders(Arrays.asList("*"))
                                        .allowedMethods(Arrays.asList(HttpMethods.GET))
                                        .allowedOrigins(Arrays.asList(
                                                "http://dkarlsso.com",
                                                "http://hottub.dkarlsso.com",
                                                "http://localhost:4200"))
                                .build()))
                        .accessControl(BucketAccessControl.PUBLIC_READ)
                        .build();

        ARecord.Builder.create(this, "WebportalRecordSet")
                .recordName(bucketName)
                .target(RecordTarget.fromAlias(new BucketWebsiteTarget(siteBucket)))
                .zone(zone)
                .build();

        final List<ISource> sources = Arrays.asList(
                Source.asset("../webportal-web/dist/webportal-web"));

        BucketDeployment.Builder.create(this, "BucketDeployment")
                .sources(sources)
                .destinationBucket(siteBucket)
                .build();
    }

}
