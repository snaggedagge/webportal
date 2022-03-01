package dkarlsso.webportal.infrastructure;

import software.amazon.awscdk.App;
import software.amazon.awscdk.Environment;
import software.amazon.awscdk.StackProps;

import java.util.HashMap;

public final class WebportalApp {


    public static void main(final String[] args) {
        final App app = new App();
        final WebportalStack webportalStack = new WebportalStack(app, "Webportal-stack", new StackProps.Builder().env(
                        Environment.builder()
                                .region("eu-north-1")
                                .account("145158422295")
                                .build())
                .build());
        app.synth();
    }
}
