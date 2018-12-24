const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1pmu6y8bolj6p"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://eqpvtsu98g.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_L6opFeHtB",
    APP_CLIENT_ID: "5coa12ig6kifufc827tu5ll1hj",
    IDENTITY_POOL_ID: "us-east-1:5eb8a427-dc62-452f-8510-e72068779e11"
  },
  STRIPE_KEY: "pk_test_c3r1SmZcVmgUWiuoQtZDSMy4"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1fn6wtm3rd4h2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zmp0lqq2d0.execute-api.us-east-1.amazonaws.com/prod "
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9odJs5xrg",
    APP_CLIENT_ID: "3privqdn60k35tgsvnf2qrrckm",
    IDENTITY_POOL_ID: "us-east-1:c51d327a-7a19-4015-9b1a-0ddc694e7dc6"
  },
  STRIPE_KEY: "pk_test_c3r1SmZcVmgUWiuoQtZDSMy4"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
