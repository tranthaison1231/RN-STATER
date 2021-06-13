echo "sdk.dir = $ANDROID_HOME" > ./android/local.properties 
cp .env.example .env.development
cp .env.example .env.staging
cp .env.example .env.production

