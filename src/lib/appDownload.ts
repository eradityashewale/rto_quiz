// GitHub repo that hosts this project's CI-built Android APK releases.
// See .github/workflows/build-android.yml — it publishes every build to the
// "android-latest" release under this repo, always as ANDROID_APK_ASSET_NAME.
export const GITHUB_REPO = "eradityashewale/rto_quiz";
export const ANDROID_APK_ASSET_NAME = "rto-quiz.apk";

// Stable URL: GitHub always redirects this to the newest asset with this name
// on the "latest" release, so the link below never needs to change between builds.
export const ANDROID_APK_DOWNLOAD_URL = `https://github.com/${GITHUB_REPO}/releases/latest/download/${ANDROID_APK_ASSET_NAME}`;
export const ANDROID_RELEASES_PAGE_URL = `https://github.com/${GITHUB_REPO}/releases`;
