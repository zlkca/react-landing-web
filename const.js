const env = 'dev'
const BrandName = 'app-gen'
export const JWT_COOKIE = `${BrandName.toLowerCase()}-jwt`;

const LambdaClusterId = 'xxx'

export const RootApiUrl =
  env == "prd"
    ? `https://${LambdaClusterId}.execute-api.us-east-1.amazonaws.com/dev`
    : `http://192.168.101.223:5001`;